//const urlWebSocket = 'ws://localhost:3001'; // Substitua pelo endereço do servidor WebSocket
const urlWebSocket = 'wss://web-socket-server-bus.glitch.me/'
const linhasFile =[[4,"6","101-01","AGLOMERADO SANTA LUCIA"],[5,"8","102-01","N.S.DE FATIMA/HOSP. EVANGELICO"],[6,"10","103-01","VILA CAFEZAL/RUA POUSO ALTO"],[19,"33","1145-01","BAIRRO DAS INDUSTRIAS"],[25,"43","1170-01","SANTA LUCIA/MANGABEIRAS"],[39,"66","1502-01","VISTA ALEGRE / GUARANI"],[40,"68","1505-01","ALTO DOS PINHEIROS/TUPI"],[43,"72","1505R-01","CENTRO/CONJUNTO FELICIDADE"],[48,"79","1510-01","MADRE GERTRUDES/PROVIDENCIA"],[51,"84","202-01","ESTACAO VILA OESTE"],[52,"86","203-01","MORRO DAS PEDRAS/VENTOSA"],[54,"90","2101-01","GRAJAU/SION"],[56,"93","2102-01","GAMELEIRA / SERRA"],[59,"97","2103-01","PRADO/ANCHIETA"],[61,"100","2104-01","NOVA GAMELEIRA/BH SHOPPING"],[65,"105","2150-01","GRAJAU/SION VIA CONTORNO"],[66,"107","2151-01","VISTA ALEGRE/SERRA"],[67,"109","2152-01","SALGADO FILHO/CRUZEIRO"],[134,"206","30-01","EST. DIAMANTE/CENTRO-DIRETA"],[135,"207","30-02","EST.DIAMANTE/CENTRO-PARADORA"],[154,"229","303-01","EST.DIAM./STA CECILIA-CASTANHEIRAS"],[156,"232","304-01","EST. DIAMANTE / JATOBA IV"],[157,"234","305-01","EST. DIAMANTE/ MANGUEIRAS"],[160,"238","3050-01","EST.DIAM./HOSPITAIS-BH SHOPPING"],[164,"243","3051-01","FLAVIO M.LISBOA/SAVASSI-N.S.CARMO"],[165,"245","3052-01","EST.DIAMANTE/BH SHOPP- HAVAI"],[168,"249","308-01","EST. BARREIRO/ TIROL"],[171,"253","309-01","EST.DIAM./PETROPOLIS-V.STA RITA"],[176,"260","310-01","EST. DIAMANTE/ 3 E 4 SECAO"],[179,"264","311-01","EST. DIAMANTE/ INDEPENDENCIA"],[194,"288","3301A-01","SANTA TEREZINHA"],[195,"290","3301B-01","CASTELO"],[196,"292","3302A-01","NOVA PAMPULHA VIA ITAMARATI"],[197,"293","3302A-03","VIA HOSPITAIS"],[200,"297","3302B-02","TANCREDO NEVES VIA ITAMARATI"],[201,"299","3302D-01","BRAUNAS"],[203,"303","3501B-01","OURO PRETO 3A GLEBA/BAIRRO IPE VIA JD. MONTANHES"],[204,"305","3502-01","OURO PRETO/SAO GABRIEL"],[205,"307","3503A-01","SANTA TEREZINHA/SAO GABRIEL"],[207,"309","3503A-03","PARTIDAS DO OURO MINAS"],[219,"326","4032-01","CAICARA /SAVASSI/ PCA. DA LIBERDADE"],[221,"329","4033-01","CAMARGOS/CENTRO"],[224,"334","4103-01","APARECIDA/MANGABEIRAS"],[228,"340","4107-01","ALTO CAICARA/SERRA"],[231,"345","4108-01","PEDRO II / MANGABEIRAS"],[233,"348","4113-01","BOM JESUS/BELVEDERE"],[235,"351","4150-02","SHOPPING DEL REY/BH SHOPPING"],[236,"353","4201-01","ALTO CAICARA/NOVA CINTRA"],[237,"355","4205-01","ERMELINDA/SALGADO FILHO"],[238,"357","4403A-01","ZOOLOGICO VIA SERRANO"],[240,"360","4403C-01","RESIDENCIAL SARANDI"],[241,"362","4403D-01","URCA-CONFISCO"],[242,"364","4405-01","COQUEIROS"],[244,"366","4405-05","COQUEIROS"],[245,"368","4410-01","SERRANO"],[248,"372","4501-01","CALIFORNIA II / SAO PAULO"],[249,"374","4801A-01","JARDIM FILADELFIA/BOA VISTA A"],[253,"380","503-01","EST.S.GABRIEL/APARECIDA/STA ROSA"],[259,"389","504-01","EST.S.GABRIEL/STA ROSA/APARECIDA"],[262,"394","5102-01","UFMG/SANTO ANTONIO"],[268,"402","5401-01","SAO LUIZ/DOM CABRAL"],[272,"407","5503A-06","VIA VILA SO JORGE"],[273,"409","5503B-02","GOIANIA B"],[277,"416","5506A-01","RIBEIRO DE ABREU"],[323,"490","608-01","EST. VENDA NOVA/NOVA PAMPULHA"],[325,"493","609-01","SERRA VERDE/SANTA MONICA"],[326,"495","61-01","EST. VENDA NOVA/CENTRO-DIRETA"],[331,"502","62-01","EST.VENDA NOVA/SAVASSI-HOSPITAIS"],[333,"505","621-01","EST. VENDA NOVA/LAGOA"],[341,"516","624-01","EST. VENDA NOVA/MARIA HELENA A"],[345,"521","625-01","EST.VENDA NOVA/MARIA HELENA B"],[360,"541","63-01","EST.VENDA NOVA/LAGOINHA"],[364,"548","633-01","EST. VILARINHO/JD COMERCIARIOS"],[365,"550","64-01","EST.V.NOVA/ASSEMB.VIA CARLOS LUZ"],[375,"565","8001A-01","ANA LUCIA/BH SHOPPING"],[380,"574","8101-01","SANTA CRUZ/ALTO SANTA LUCIA"],[381,"576","8102-01","UNIAO/CARMO SION"],[383,"579","8103-01","NOVA FLORESTA/SANTA LUCIA"],[387,"585","8106-01","SANTA CRUZ/BH SHOPPING VIA BELVEDERE"],[389,"588","8108-01","CIDADE NOVA/SAVASSI"],[390,"590","8150-01","UNIAO/SERRA"],[392,"594","8205-01","MARIA GORETTI/NOVA GRANADA"],[394,"597","8207-01","MARIA GORETTI/ESTRELA DALVA"],[395,"599","8208-01","SANTA CRUZ / UNI-ESTORIL"],[400,"606","8401-01","CACHOEIRINHA/SAO JOSE"],[401,"608","8501-01","MARIA GORETTI/ENGENHO NOGUEIRA VIA OURO PRETO"],[402,"610","901-01","CIRCULAR LESTE"],[403,"612","9032-01","GRANJA DE FREITAS"],[404,"614","9101-01","PRINCIPAL"],[406,"617","9103-01","SANTA TERESA/SANTO ANTONIO"],[407,"619","9104-01","SAGRADA FAMILIA/LUXEMBURGO"],[409,"622","9105-01","NOVA VISTA/SION"],[410,"624","9106-01","SAGRADA FAMILIA/SERRA"],[413,"629","9202-03","POMPEIA/JARDIM AMERICA"],[418,"636","9204-01","SANTA EFIGENIA/ESTORIL"],[420,"639","9205-01","NOVA VISTA/NOVA CINTRA"],[423,"643","9206-01","VERA CRUZ/BURITIS"],[426,"648","9208-01","TAQUARIL/CONJUNTO SANTA MARIA"],[428,"651","9209-01","SAGRADA FAMILIA/GUTIERREZ"],[429,"653","9210-01","SANTA TEREZA/PRADO"],[430,"655","9211-01","CAETANO FURQUIM/HAVAI"],[433,"660","9250-02","CAETANO FURQUIM/NOVA CINTRA"],[435,"664","9403-01","PARAISO/CAICARA"],[437,"667","9404-01","SAO LUCAS/NOVA ESPERANCA"],[439,"671","9407-01","ALTO VERA CRUZ/DOM BOSCO"],[441,"674","9408-01","SANTA EFIGENIA/PADRE EUSTAQUIO"],[443,"677","9410-01","SAGRADA FAMILIA/CORACAO EUCARISTICO"],[444,"679","9411-01","CASA BRANCA/SAO JOSE"],[448,"686","9501-01","SAO LUCAS/JARAGUA"],[454,"693","9502-03","SAO GERALDO/SAO FRANCISCO VIA ESPLANADA"],[455,"695","9503-01","TAQUARIL/JARAGUA"],[457,"698","9550-01","CASA BRANCA/SAO FRANCISCO VIA EST. JOSE CANDIDO"],[458,"700","9801-01","SAUDADE/SANTA CRUZ"],[464,"710","SC01A-01","CONTORNO A"],[465,"712","SC01B-01","CONTORNO B"],[467,"716","SC02A-01","PRACA 7/SAVASSI VIA PCA DA LIBERDADE - SANTA CASA"],[472,"725","SC04A-01","SANTA CASA/SAVASSI/RODOVIARIA A"],[473,"727","SC04B-01","SANTA CASA/RODOVIARIA/SAVASSI B"],[478,"734","4102-01","APARECIDA/SERRA"],[480,"737","4110-01","DOM CABRAL/FAC. MILTON CAMPOS VIA BELVEDERE"],[483,"741","4111-03","ATENDIMENTO A ESCOLA GUINARD"],[486,"746","8107-01","CONCORDIA/SAO PEDRO"],[488,"749","8405-01","PALMARES/BELA VISTA"],[490,"753","9402-01","SANTA INES/SANTO ANDRE"],[491,"755","3501A-01","PRINCIPAL"],[496,"763","5502C-01","POUSADA SANTO ANTONIO"],[499,"768","607-01","EST.VILARINHO/ESPLENDOR "],[502,"772","9030-01","CASTANHEIRAS/CENTRO"],[521,"803","705-01","EST. SAO GABRIEL/SAO TOMAZ"],[524,"807","706-01","EST. SAO GABRIEL/ HELIOPOLIS"],[526,"810","707-01","EST.SAO GABRIEL/JD GUANABARA"],[528,"813","708-01","EST. SO GABRIEL / FELICIDADE"],[534,"821","8350-02","EST.SAO GABRIEL/EST.BARREIRO"],[540,"844","711-01","EST. SAO GABRIEL/SOLIMOES"],[542,"847","713-01","EST. SAO GABRIEL/LAJEDO"],[543,"849","714-01","EST. S. GABRIEL/CASAS POPULARES"],[544,"851","715-01","EST. SAO GABRIEL / MONTE AZUL"],[545,"853","716-01","EST.S. GABRIEL/NOVO AARAO REIS"],[557,"870","104-01","ESTAO LAGOINHA / AVENIDA"],[558,"872","205-01","METRO CALAFATE/ BURITIS"],[571,"890","4801A-02","VIA R. IRACI - NOVO GLORIA"],[572,"899","33-01","EST.BARREIRO/CENTRO- PARADORA"],[576,"905","3053-01","EST.BARREIRO/ BARRO PRETO"],[577,"908","3054-01","MILIONARIOS/CENTRO"],[578,"911","3350-01","EST. BARREIRO/ EST. DIAMANTE"],[579,"915","325-01","EST. BARREIRO/ FLAVIO M. LISBOA"],[580,"917","326-01","EST. BARREIRO/ VALE DO JATOBA"],[581,"919","327-01","EST. BARREIRO/ CARDOSO A"],[583,"922","328-01","EST. BARREIRO/ CARDOSO B"],[584,"924","329-01","EST. BARREIRO/ JATOBA"],[588,"930","32-02","PARADORA"],[591,"934","330-01","EST. BARREIRO/ INDEPENDENCIA"],[592,"936","331-01"," EST.BARR./CONJ.TEIXEIRA DIAS-UPA"],[600,"952","5201-03","DONA CLARA/BURITIS"],[605,"962","4031-01","SANTA MARIA / HOSPITAIS"],[621,"987","35-01","EST. BARREIRO/ CENTRO"],[642,"1022","330-03","VIA BAIRRO MINEIRAO"],[659,"1041","9412-11","CONJ.TAQUARIL/PADRE EUSTAQUIO"],[668,"1057","318-05","EST. BARR./J.LIBERDADE VIA MILIONARIOS"],[673,"1066","1404A-05","PALMEIRAS / ALIPIO DE MELO"],[679,"1077","9407-03","ALTO VERA CRUZ/DOM BOSCO"],[683,"1085","302-05","VIA CONJUNTO GUAS CLARAS"],[696,"1115","3055-01","EST.BARREIRO/SAVASSI-BH SHOP."],[756,"1248","9501-07","SAO LUCAS/JARAGUA"],[793,"1319","335-01","ESTAO BARREIRO/LINDIA"],[843,"1421","105-01","ESTAO CENTRAL/LOURDES"],[857,"1563","811-01","EST.S.GABRIEL/VISTA DO SOL - PUC"],[861,"1623","703-01","EST. SO GABRIEL/GUARANI A"],[862,"1625","806-01","EST.S.GABRIEL/VISTA DO SOL-NAZAR"],[863,"1627","807-01","EST.S.GABRIEL/RIBEIRO DE ABREU A"],[864,"1629","808-01","EST. SO GABRIEL/PAULO VI"],[865,"1631","809-01"," EST. SO GABRIEL/BELMONTE"],[890,"1863","637-01"," EST.VILARINHO/CANA-  S. VERDE"],[898,"1905","634-01","EST.VILAR/N. YORK- J. COMERCIRIOS"],[901,"1911","640-01","EST. V.NOVA/J.LEBLON-RIO BRANCO "],[906,"1917","626-06","EST.V.NOVA/ESPLENDOR-N. AMERICA"],[907,"1918","627-06","EST. VENDA NOVA / MANTIQUEIRA"],[909,"1920","635-02","EST.VILAR./J. DOS COMERCIRIOS C"],[910,"1921","636-02","EST. VILARINHO / JARDIM EUROPA "],[983,"2374","4802A-05","PINDORAMA / BOA VISTA - INVERSO DE PC"],[998,"2557","206-01","CIRCULAR OESTE"],[1007,"2634","3055-04","DIRETA ESTAO/SAVASSI - TARDE"],[1011,"2657","9104-04","SAGRADA FAMILIA / LUXEMBURGO - RETORNO EXPRESSO"],[1109,"3357","1509-07","CALIFORNIA/TUPI"],[1140,"3399","9805-03","SANTA EFIGNIA / RENASCENA"],[1146,"3405","9214-02","CAETANO FURQUIM/HAVAI - VIA ALTO HAVAI"],[1167,"3474","9201-06","BALEIA/NOVA GRANADA AT. UNIDADE ANTONIO MOURAO"],[1194,"3635","9999-01","LINHA ESPECIAL USO INTERNO CONCESSIONRIAS"],[1197,"3638","9999-04","LINHA ESPECIAL USO INTERNO CONCESSIONRIAS"],[1229,"3740","65-01","EST.VILAR./CENTRO-A.CARLOS/DIRETA"],[1233,"3745","738-01","EST.VILAR./CONJ. ZILAH SPSITO"],[1234,"3747","739-01","EST.VILAR/JAQ. 2 SE-FREI LEOPOLDO"],[1235,"3749","638-01","EST. VILARINHO / MINAS CAIXA"],[1237,"3753","735-01","EST. VILARINHO /  JULIANA   A"],[1238,"3755","736-01","EST. VILARINHO / JULIANA  B"],[1239,"3757","737-01","EST.VILARINHO/JAQUELINE"],[1244,"3835","823-01","EST. SO GABRIEL/BAIRRO VITRIA"],[1248,"3896","641-01","EST. VILARINHO / SERRA VERDE"],[1255,"3995","341-01","EST.BARR./EST.DIAM.-VIA SADE"],[1256,"3997","337-01","EST. BARREIRO / ITAIPU"],[1257,"3999","342-01","EST.BARR./SOLAR VIA EST.DIAMANTE  "],[1260,"4002","342-04","ATENDIMENTO AO BAIRRO SOLAR"],[1261,"4015","340-01","EST. BARR./VILA MANGUEIRA"],[1263,"4018","3029-01","REGINA / CENTRO"],[1265,"4023","6350-01","EST.VILAR./EST.BARREIRO-VIA ANEL"],[1266,"4054","8203-07","VIA RUA BORBOREMA"],[1267,"4055","8203-08","RENASCENA/BURITIS AT AV DEP CRISTOVAM CHIAR/RUA B"],[1314,"4399","4034-10","VIA NOVO DOM BOSCO E CONJ. FILADELFIA"],[1317,"4514","66-01","EST. VILARINHO/CENTRO/HOSP/VIA C.MACHADO"],[1320,"4614","3501A-12","VIA FERNAO DIAS"],[1329,"4661","67-01","EST.VILAR./STO AGOST./AV.CARLOS LUZ"],[1337,"4736","4103-06","VIA AMR"],[1339,"4756","901-04","RETORNO BAIRRO SAGRADA FAMILIA"],[1342,"4836","332-02","ATENDIMENTO AO CONJUNTO ESPERANA"],[1373,"5282","82-01","EST.S.GABRIEL/SAVASSI-VIA HOSPITAIS"],[1374,"5284","83D-01","EST.SO GABRIEL/CENTRO-DIRETA"],[1375,"5286","8151-01","EST. SO GABRIEL/BH SHOPPING VIA ANEL RODOVIRIO"],[1381,"5317","9414-04","STA.INS/ J.PINHEIRO-ATEND. RUA QUINZE (MARILAC) "],[1383,"5322","506-01","VIA CASTELO E NOVO OURO PRETO"],[1384,"5323","506-02","VIA OURO PRETO"],[1407,"5397","83P-01","EST.S.GABRIEL/CENTRO-PARADORA"],[1413,"5477","815-01","EST. SO GABRIEL/CONJ. PAULO VI"],[1434,"5538","813-01","EST.S.GABRIEL/PAULO VI-R.DE ABREU"],[1436,"5541","814-01","EST. SO GABRIEL/ JARDIM VITRIA"],[1441,"5547","85-01","EST.S.GABRIEL/CENTRO-VIA FLORESTA"],[1444,"5559","50-01","EST. PAMPULHA/CENTRO-DIRETA"],[1445,"5563","510-01","EST.PAMPULHA/TREVO VIA GARAS"],[1446,"5564","51-01","EST.PAMPULHA/CENTRO/HOSPITAIS"],[1448,"5567","614-01","EST. PAMPULHA/CU AZUL A"],[1449,"5569","52-01","EST. PAMPULHA / AV. ANTONIO CARLOS"],[1451,"5572","615-01","EST. PAMPULHA / CU AZUL B"],[1452,"5574","616-01","EST. PAMPULHA / CU AZUL C"],[1454,"5577","618-01","EST.PAMP/R.BRANCO-VIA JD LEBLON "],[1457,"5583","645-01","EST.PAMP/STA MNICA-JD ATLNTICO"],[1458,"5584","614-03","PARTIDAS EST. PAMPULHA"],[1463,"5602","617-01","EST. PAMP/PIRATININGA-VIA R.BRANCO"],[1465,"5605","619-01","EST.PAMP/STA MNICA-STA BRANCA"],[1467,"5609","644-01","EST.PAMPULHA/SO JOO BATISTA"],[1472,"5616","718-01","EST. PAMPULHA/PLANALTO"],[1473,"5619","719-01","EST. PAMPULHA/FLORAMAR"],[1474,"5620","5250-01","EST. PAMPULHA / BETANIA"],[1477,"5623","619-03","VIA R. VISCONDE DE TAUNAY"],[1481,"5630","2034-01","CONJUNTO BETNIA / CENTRO"],[1495,"5675","5550-01","EST. PAMPULHA / EST.SO JOS"],[1500,"5700","5106-01","BANDEIRANTES/BH SHOPPING"],[1505,"5706","406-01","EST.S.JOS/PINDORAMA-N.S.GLRIA"],[1506,"5708","511-01","EST.SO JOS/J.ALVORADA"],[1507,"5710","712-01","EST. PAMPULHA / SO BERNARDO"],[1509,"5713","3030-01","PILAR - OLHOS D AGUA / CENTRO"],[1511,"5716","4037-01","NOSSA SENHORA DA GLRIA / CENTRO"],[1523,"5777","68-01","EST. VILARINHO / LAGOINHA"],[1553,"5976","51-03","DIRETA MANH"],[1556,"5979","4108-04","VIA RUA VILA RICA"],[1558,"6016","3053-02","ATENDIMENTO A VIA EXPRESSA "],[1559,"6018","62-13","DIRETA"],[1561,"6039","825-01","EST.S. GABRIEL/VITRIA II- UPA"],[1573,"6158","705-06","CENTRO ESP. MDICA - UNIFENAS"],[1782,"6640","208-01","ESTAO BARREIRO/BETNIA VIA NOVO DAS INDUSTRIAS"],[1789,"6698","340-03","ATENDIMENTO AO C.S. MANGUEIRAS"],[1792,"6740","9415-01","NOSSA SENHORA DE FTIMA/BONFIM"],[1818,"6846","642-05","RETORNO SERRA VERDE"],[1851,"7079","5104-01","PRINCIPAL"],[1856,"7119","5203-01","CASTELO/ESTRELA DO ORIENTE VIA MANACS"],[1857,"7121","5033-01","STA TEREZINHA/PA. DA LIBERDADE VIA TANC. NEVES "],[1872,"7340","3055-08","VIA OLHOS DGUA OESTE"],[1876,"7419","3250-01","EST.DIAMANTE/BURITIS VIA PALMEIRAS"],[1889,"7559","338-01","PRINCIPAL"],[1904,"7759","903-01","GRANJA DE FREITAS/TAQUARIL VIA ALTO VERA CRUZ"],[1905,"7761","9034-01","TAQUARIL/CENTRO"],[1928,"7998","615-04","VIA RUA CARLOS LACERDA"],[1942,"8098","4403A-08","VIA CENTRO SADE CONFISCO"],[1943,"8118","832-07","VIA RUA DOS MOREIRAS/MANGUEIRAS"],[1947,"8638","627-07","VIA AV. VILARINHO"],[1965,"8818","838-02","ATENDIMENTO CENTER MINAS"],[1974,"8959","720-01","CIRCULAR SADE MG 20"]]
const socket = new WebSocket(urlWebSocket);

let map
let userLocation = {};
async function getUserLocation() {
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
 async function main() {
      try {
        // Chama a função para obter a localização do usuário e armazena na variável global
        if(!userLocation.hasOwnProperty('latitude'))
            userLocation = await getUserLocation();
      } catch (error) {
        console.error(error);
      }
    }

main()
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

async function createMap() {
    main()
    const initialZoom = 13;
    if(!map) {
        map = L.map('map',{trackResize: true})
        .setView([userLocation.latitude, userLocation.longitude], initialZoom);
        // Usando o provedor de mapas da OpenStreetMap
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        tileLayer.on('load', function() {
        document.getElementById('loading').style.display = 'none';

        });
 
    }    
}

function addMarkersToMap(locations) {
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
            className: 'custom-icon', html: '<div style="background-color: ' + corMarcador + ';" class="relative w-4 h-4 rounded-full ring-2 ring-gray-900"></div>' }) })
        .addTo(map);
         marker.bindPopup(`${NV} - ${VL}`)  
        const posicao = L.marker([userLocation.latitude, userLocation.longitude],{ icon: L.divIcon({ 
            className: 'custom-icon', html: '<div class="relative w-3 h-3 bg-gray-900 rounded-full ring-2 ring-gray-300"></div>' }) }).addTo(map)
        posicao.bindPopup("Voce esta aqui")
    });
}
socket.onopen = function () {
    const btn = document.getElementById('input-pesquisa')
     document.getElementById('connect').style.display = 'none';
    btn.disabled = false
    // console.log('Conexão estabelecida com o servidor WebSocket.');
};
socket.onmessage = async  function (event) {
     createMap();
    console.log(JSON.parse(event.data)
     addMarkersToMap(JSON.parse(event.data));   
};
socket.onerror = function (error) {
    console.error('Erro ao conectar com o servidor WebSocket:', error);
};

   function filtrarOpcoes() {
      const pesquisa = document.getElementById("input-pesquisa").value.toLowerCase();
      const resultadoPesquisa = document.getElementById("resultado-pesquisa");
      resultadoPesquisa.innerHTML = ""; // Limpar resultados anteriores

      const opcoesFiltradas = linhasFile.filter((opcao) =>
        opcao[2].toLowerCase().includes(pesquisa)
      );
   
      if (pesquisa !== '') {

        opcoesFiltradas.forEach((opcao) => {
          const itemOpcao = document.createElement("li");
          itemOpcao.textContent = opcao[2]; // Mostrar o valor da terceira posição do array
          itemOpcao.addEventListener('click', () => {
            // Chamar a função desejada quando o item for clicado
            // Remover pesquisa e resultados
            socket.send(opcao[1]);
            document.getElementById('loading').style.display = 'block';
            document.getElementById("input-pesquisa").value = '';
            resultadoPesquisa.innerHTML = '';
          });
          resultadoPesquisa.appendChild(itemOpcao);
        });

        // Posicionar o resultado abaixo do input
        const inputPesquisa = document.getElementById("input-pesquisa");
        const inputRect = inputPesquisa.getBoundingClientRect();
        resultadoPesquisa.style.top = inputRect.bottom  + 'px';
        resultadoPesquisa.style.left = inputRect.left + 'px';
      } else {
        resultadoPesquisa.innerHTML = ''; // Limpar resultados se a pesquisa estiver vazia
      }
    }
