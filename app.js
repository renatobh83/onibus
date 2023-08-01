let map
async function getCoordinatesFromAPI(linha) {
    const response = await fetch(`https://bhtrans.vercel.app/dados/${linha}/1`);
    const data = await response.json();
    return data;
}

async function getLinhaFromAPI(linha) {
    const response = await fetch(`https://bhtrans.vercel.app/linha/${linha}`);
    const data = await response.json();
    
    return data;
}

function getUserLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                error => {
                    reject("Não foi possível obter a localização do usuário.");
                }
            );
        } else {
            reject("Geolocalização não está disponível no navegador.");
        }
    });
}

const coresMarcadores = {};


function definirCorParaValor(valor) {
  if (!coresMarcadores.hasOwnProperty(valor)) {
    // Gerar uma cor hexadecimal aleatória
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
    coresMarcadores[valor] = corAleatoria;
  }
}
function getCorMarcador(valor) {
  // Define a cor do valor (caso ainda não exista)
  definirCorParaValor(valor);

  return coresMarcadores[valor];
}

function createMap(userLocation) {
     const initialZoom = 13;
     map = L.map('map').setView([userLocation.latitude, userLocation.longitude], initialZoom);
    // Usando o provedor de mapas da OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      
}


function addMarkersToMap(locations,userLocation) {
    // Limpar marcadores existentes
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Adicionar marcadores para cada localidade e velocidade
    locations.forEach(location => {
        const { LT, LG, NV ,VL} = location;

        const corMarcador = getCorMarcador(NV);
        const marker = L.marker([LT, LG],{ icon: L.divIcon({ 
        	className: 'custom-icon', html: '<div style="background-color: ' + corMarcador + ';" class="relative w-6 h-6 rounded-full ring-2 ring-gray-300"></div>' }) }).addTo(map);
          
         marker.bindPopup(`${NV} - ${VL}`)
         
 	  const posicao = L.marker([userLocation.latitude, userLocation.longitude],{ icon: L.divIcon({ 
        	className: 'custom-icon', html: '<div class="relative w-3 h-3 bg-gray-900 rounded-full ring-2 ring-gray-300"></div>' }) }).addTo(map)
      posicao.bindPopup("Voce esta aqui").openPopup();
  
       
    });
}

// Função principal para iniciar o processo
async function main() {
    try {
        const localizacoes = await getCoordinatesFromAPI("238")
         const userLocation = await getUserLocation();
        createMap(userLocation);
        addMarkersToMap(localizacoes, userLocation);

    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

async function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
     // Verifique se o campo de pesquisa está vazio
    if (searchQuery === '') {
        return;
    }
    const localizacoes = await getCoordinatesFromAPI(searchQuery)
      const userLocation = await getUserLocation();
     addMarkersToMap(localizacoes,userLocation);
     createMap(userLocation);
}


// Chame a função principal para iniciar o processo
main();
