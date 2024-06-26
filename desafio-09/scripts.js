const options = {
  series: [
    {
      name: 'cambio',
      data: [
        {
          x: new Date('2018-02-12').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2018-02-13').getTime(),
          y: 5.3,
        },
        {
          x: new Date('2018-02-14').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2018-02-15').getTime(),
          y: 5.11,
        },
        {
          x: new Date('2018-02-16').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2018-02-17').getTime(),
          y: 5.25,
        },
        {
          x: new Date('2018-02-18').getTime(),
          y: 5.18,
        },
        {
          x: new Date('2018-02-19').getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',');
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ['#7C3AED'],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace(
        '.',
        ',',
      )}</span>
    <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex],
      ).toLocaleDateString('pt-BR', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })}</span>
    </div>`;
    },
  },
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

function conversor(moedas) {
  const token = '2870|Y9bda7u9I0uvWst3MNlYsYFaQvP8kj7P';
  const url = `https://api.invertexto.com/v1/currency/${moedas}?token=${token}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const preco = data[moedas].price;
      return preco;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}


function calcular() {
  var fromVal = parseFloat(document.getElementById('fromVal').value);
  var toVal = document.getElementById('toVal');
  var select_moeda_1 = document.getElementById('moeda-1').value;
  var select_moeda_2 = document.getElementById('moeda-2').value;
  var moedas = `${select_moeda_1}_${select_moeda_2}`;

  conversor(moedas)
    .then(preco => {
      if (preco) {
        var valorConvertido = fromVal * preco;
        console.log('Valor inserido:', fromVal);
        console.log('Valor convertido:', valorConvertido);
        toVal.value = valorConvertido.toFixed(2); // Exibindo o resultado no elemento toVal
      }
    });
}




