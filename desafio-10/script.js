//variaveis e seleção de elementos
const diasDaSemana = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

const tokenOpenWether = '96dae8b99d345ae38e6fb35961ad475e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cidadeElemento = document.querySelector('#cidade');
const tempAtualElemento = document.querySelector('#temp-atual');
const descElemento = document.querySelector('#descricao');
const descicone = document.querySelector('#desicone');
const maxTempAtualElemento = document.querySelector('#max-temp-atual');
const minTempAtualElemento = document.querySelector('#min-temp-atual');
const ventoElemento = document.querySelector('#vento-atual');
const umidadeAtualElemento = document.querySelector('#umidade-atual');
const possibiChuvaElemento = document.querySelector('#possibi-chuva');
const containerTempElemento = document.querySelector('.temperatura');
const containerSelecioneCidade = document.querySelector('.selecione-cidade');
const errorMessageContainer = document.querySelector('#error-message');

//dias da semana

const amanha_1Elemento = document.querySelector('#amanha_1');
const amanha_2Elemento = document.querySelector('#amanha_2');
const amanha_3Elemento = document.querySelector('#amanha_3');
const amanha_4Elemento = document.querySelector('#amanha_4');
const amanha_5Elemento = document.querySelector('#amanha_5');

//temperaturas max min dias da semana

const max_amanha_1Elemento = document.querySelector('#max_amanha_1');
const max_amanha_2Elemento = document.querySelector('#max_amanha_2');
const max_amanha_3Elemento = document.querySelector('#max_amanha_3');
const max_amanha_4Elemento = document.querySelector('#max_amanha_4');
const max_amanha_5Elemento = document.querySelector('#max_amanha_5');
const min_amanha_1Elemento = document.querySelector('#min_amanha_1');
const min_amanha_2Elemento = document.querySelector('#min_amanha_2');
const min_amanha_3Elemento = document.querySelector('#min_amanha_3');
const min_amanha_4Elemento = document.querySelector('#min_amanha_4');
const min_amanha_5Elemento = document.querySelector('#min_amanha_5');

//qualidade do ar

const metricaQualidadeArElemento = document.querySelector(
  '#metricaQualidadeAr',
);
const qualidadeArElemento = document.querySelector('#qualidadeAr');
const pm25Elemento = document.querySelector('#pm25');
const pm10Elemento = document.querySelector('#pm10');
const so2Elemento = document.querySelector('#so2');
const no2Elemento = document.querySelector('#no2');
const o3Elemento = document.querySelector('#o3');
const coElemento = document.querySelector('#co');

//horario sol

const horarioSol = document.querySelector('.horario-sol-valor');
const nascerSolElemento = document.querySelector('#nascer-sol');
const porDoSolElemento = document.querySelector('#por-do-sol');

//funçoes de erros

const showErrorMessage = () => {
  errorMessageContainer.classList.remove('desaparecer');
};

const hideInformation = () => {
  errorMessageContainer.classList.add('hide');
  containerTempElemento.classList.add('hide');
  containerSelecioneCidade.classList.add('hide');
};

//funcoes

const getCircularDay = (diasAdd) => {
  const diaAtual = new Date().getDay();
  let diaCerto = diaAtual;

  for (let i = 0; i < diasAdd; i++) {
    if (diaCerto === diasDaSemana.length - 1) {
      diaCerto = 0;
    }
    diaCerto++;
  }

  return diaCerto;
};

const getWeatherData = async (city) => {
  const apiWeatherURL = `${baseUrl}q=${city}&units=metric&appid=${tokenOpenWether}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  console.log(data);
  return data;
};

const mostrarCidade = async (city) => {
  const data = await getWeatherData(city);

  if (data.cod === '404') {
    showErrorMessage();
    return;
  }

  cidadeElemento.innerText = data.name;
  descElemento.innerText = data.weather[0].description;
  descicone.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  );

  containerTempElemento.classList.remove('hide');
  containerSelecioneCidade.classList.add('hide');
  errorMessageContainer.classList.add('hide');

  const latitude = data.coord.lat;
  const longitude = data.coord.lon;

  //chamando segunda api

  const weatherForecast = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation_probability,temperature_2m,relativehumidity_2m,rain,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);
    return dados;
  };

  const dados = await weatherForecast();

  tempAtualElemento.innerText = dados.current_weather.temperature;
  maxTempAtualElemento.innerText = dados.daily.temperature_2m_max[0];
  minTempAtualElemento.innerText = dados.daily.temperature_2m_min[0] + '°';
  ventoElemento.innerText = dados.current_weather.windspeed + 'km/h';
  umidadeAtualElemento.innerText = dados.hourly.relativehumidity_2m[0];
  possibiChuvaElemento.innerText = dados.hourly.precipitation_probability[0];

  // dados sol

  let now = new Date();
  let horaAtual = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const nascerDoSol = dados.daily.sunrise[0];
  const porDoSol = dados.daily.sunset[0];

  const convertidoNascerDoSol = nascerDoSol.slice(11);
  const convertidoPorDoSol = porDoSol.slice(11);

  nascerSolElemento.innerText = convertidoNascerDoSol;
  porDoSolElemento.innerText = convertidoPorDoSol;
  horarioSol.innerText = horaAtual;

  weatherForecast();

  //dias da semana dinamico

  amanha_1Elemento.innerText = diasDaSemana[getCircularDay(1)];
  amanha_2Elemento.innerText = diasDaSemana[getCircularDay(2)];
  amanha_3Elemento.innerText = diasDaSemana[getCircularDay(3)];
  amanha_4Elemento.innerText = diasDaSemana[getCircularDay(4)];
  amanha_5Elemento.innerText = diasDaSemana[getCircularDay(5)];

  max_amanha_1Elemento.innerText =
    dados.daily.temperature_2m_max[getCircularDay(1)] + '°';
  max_amanha_2Elemento.innerText =
    dados.daily.temperature_2m_max[getCircularDay(2)] + '°';
  max_amanha_3Elemento.innerText =
    dados.daily.temperature_2m_max[getCircularDay(3)] + '°';
  max_amanha_4Elemento.innerText =
    dados.daily.temperature_2m_max[getCircularDay(4)] + '°';
  max_amanha_5Elemento.innerText =
    dados.daily.temperature_2m_max[getCircularDay(5)] + '°';
  min_amanha_1Elemento.innerText =
    dados.daily.temperature_2m_min[getCircularDay(1)] + '°';
  min_amanha_2Elemento.innerText =
    dados.daily.temperature_2m_min[getCircularDay(2)] + '°';
  min_amanha_3Elemento.innerText =
    dados.daily.temperature_2m_min[getCircularDay(3)] + '°';
  min_amanha_4Elemento.innerText =
    dados.daily.temperature_2m_min[getCircularDay(4)] + '°';
  min_amanha_5Elemento.innerText =
    dados.daily.temperature_2m_min[getCircularDay(5)] + '°';

  // api qualidade do ar

  const apiQualidadeAr = async () => {
    const urlQualidadeAr = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,european_aqi&timezone=America%2FSao_Paulo`;

    const responseQualidade = await fetch(urlQualidadeAr);
    const dadosQualidadeAr = await responseQualidade.json();

    console.log(dadosQualidadeAr, 'o que ta vindo');
    return dadosQualidadeAr;
  };

  apiQualidadeAr();

  const dadosQualidadeAr = await apiQualidadeAr();

  qualidadeArElemento.innerText = dadosQualidadeAr.hourly.european_aqi[0];
  pm25Elemento.innerText = dadosQualidadeAr.hourly.pm2_5[0];
  pm10Elemento.innerText = dadosQualidadeAr.hourly.pm10[0];
  so2Elemento.innerText = dadosQualidadeAr.hourly.sulphur_dioxide[0];
  no2Elemento.innerText = dadosQualidadeAr.hourly.nitrogen_dioxide[0];
  o3Elemento.innerText = dadosQualidadeAr.hourly.ozone[0];
  coElemento.innerText = dadosQualidadeAr.hourly.carbon_monoxide[0];

  var europeanEvaluation = dadosQualidadeAr.hourly.european_aqi[0];

  const airQuality = (europeanEvaluation) => {
    switch (true) {
      case europeanEvaluation <= 20:
        return (metricaQualidadeArElemento.innerText = 'Boa');
      case europeanEvaluation > 20 && europeanEvaluation <= 40:
        return (metricaQualidadeArElemento.innerText = 'Razoável');
      case europeanEvaluation > 40 && europeanEvaluation <= 60:
        return (metricaQualidadeArElemento.innerText = 'Moderado');
      case europeanEvaluation > 60 && europeanEvaluation <= 80:
        return (metricaQualidadeArElemento.innerText = 'Ruim');
      case europeanEvaluation > 80 && europeanEvaluation < 100:
        return (metricaQualidadeArElemento.innerText = 'Muito Ruim');
      case europeanEvaluation >= 100:
        return (metricaQualidadeArElemento.innerText = 'muito Ruim');
    }
  };

  airQuality(europeanEvaluation);
};

//eventos

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  mostrarCidade(city);
});

cityInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    const city = e.target.value;
    mostrarCidade(city);
  }
});
