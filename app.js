let map
async function getCoordinatesFromAPI(linha) {
    const response = await fetch(`https://bhtrans.vercel.app/dados/${linha}/1`);
    const data = await response.json();
    return data;
}

async function getLinhaFromAPI(linha) {
    const response = await fetch(`https://bhtrans.vercel.app/linha/${linha}`);
    const data = await response.json();
    console.log(data)
    return data;
}


function createMap() {
         const initialZoom = 15;
     map = L.map('map').setView(["-19.923030", "-43.925846"], initialZoom);
    // Usando o provedor de mapas da OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}


function addMarkersToMap(locations) {
    // Limpar marcadores existentes
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Adicionar marcadores para cada localidade
    locations.forEach(location => {
        const { LT, LG, NV } = location;
        const marker = L.marker([LT, LG]).addTo(map);
         marker.bindPopup(NV);
    });
}


function showMap(locations) {
    const initialZoom = 15;
     map = L.map('map').setView(["-19.923030", "-43.925846"], initialZoom);

    // Usando o provedor de mapas da OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

       L.marker(["-19.923030", "-43.925846"])
        .addTo(map)
        .bindPopup("Você está aqui!");

    // Iterar sobre o array de localidades e adicionar marcadores para cada uma delas
    locations.forEach(location => {
        const { LT, LG, NV } = location;

        const marker = L.marker([LT, LG]).addTo(map);

        marker.bindPopup(NV)
    });
}
// Função principal para iniciar o processo
async function main() {
    try {
   
        const localizacoes = await getCoordinatesFromAPI("238")
        createMap();
        addMarkersToMap(localizacoes);
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
     addMarkersToMap(localizacoes);
}

async function codigoLinha() {
    const searchQuery = document.getElementById('searchInput-1').value.trim().toLowerCase();
     // Verifique se o campo de pesquisa está vazio
    console.log(searchQuery)
    if (searchQuery === '') {
        return;
    }
    const x = await getLinhaFromAPI(searchQuery)

    //  addMarkersToMap(localizacoes);
}


// Chame a função principal para iniciar o processo
main();