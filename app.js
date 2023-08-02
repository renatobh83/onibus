let map

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
const ultimaPosicao  = {}


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
function definirUltimaPosicao(valor, obj) {
   
  if (!ultimaPosicao.hasOwnProperty(valor)) {
        ultimaPosicao[valor] = obj;
  }  
}
function getPosicao(valor, obj) {
  // Define a cor do valor (caso ainda não exista)
  definirUltimaPosicao(valor, obj);
  return ultimaPosicao[valor];
}


async function createMap(userLocation) {
     const initialZoom = 13;
     if(!map) {
   
     map = L.map('map',{trackResize: true}).setView(["-19.922913", "-43.925802"], initialZoom);
    // Usando o provedor de mapas da OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }    
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
        const { LT, LG, NV ,VL, NL} = location;

        const corMarcador = getCorMarcador(NV);
       
     
        const marker = L.marker([LT, LG],{ icon: L.divIcon({ 
            className: 'custom-icon', html: '<div style="background-color: ' + corMarcador + ';" class="relative w-4 h-4 rounded-full ring-2 ring-gray-900"></div>' }) }).addTo(map);
          
         marker.bindPopup(`${NV} - ${VL}`)  
    });
     
}



//const urlWebSocket = 'ws://localhost:3001'; // Substitua pelo endereço do servidor WebSocket
const urlWebSocket = 'wss://web-socket-server-bus.glitch.me/'

const socket = new WebSocket(urlWebSocket);


socket.onopen = function () {
    const btn = document.getElementById('btn')
    btn.disabled = false
    // console.log('Conexão estabelecida com o servidor WebSocket.');
};

socket.onmessage = async  function (event) {
    // console.log('Mensagem recebida do servidor:', event.data);
     createMap();
     addMarkersToMap(JSON.parse(event.data));   
};

socket.onerror = function (error) {
    console.error('Erro ao conectar com o servidor WebSocket:', error);
};

function enviarMensagem() {
    const mensagemInput = document.getElementById('mensagem');
    if (mensagemInput.value === '') {
        return;
    }
    const mensagem = mensagemInput.value;
    socket.send(mensagem);
    mensagemInput.value = ''; // Limpa o campo de entrada após enviar a mensagem
}
