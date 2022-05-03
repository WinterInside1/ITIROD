const initChart1 = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return new Chart(document.getElementById('chart-1'), config);
};

const initChart2 = () => {
  const labels = Samples.utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return new Chart(document.getElementById('chart-2'), config);
};

const initChart3 = () => {
  const labels = Samples.utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return new Chart(document.getElementById('chart-3'), config);
};

const initChart4 = () => {
  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = Samples.utils.numbers({
            count: chart.data.labels.length,
            min: -100,
            max: 100,
          });
        });
        chart.update();
      },
    },
  ];

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Samples.utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Samples.utils.numbers(NUMBER_CFG),
        backgroundColor: Samples.utils.CHART_COLORS.red,
      },
      {
        label: 'Dataset 2',
        data: Samples.utils.numbers(NUMBER_CFG),
        backgroundColor: Samples.utils.CHART_COLORS.blue,
      },
      {
        label: 'Dataset 3',
        data: Samples.utils.numbers(NUMBER_CFG),
        backgroundColor: Samples.utils.CHART_COLORS.green,
      },
    ],
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  return new Chart(document.getElementById('chart-4'), config);
};

const initChart5 = () => {
  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = Samples.utils.numbers({
            count: chart.data.labels.length,
            min: 0,
            max: 100,
          });
        });
        chart.update();
      },
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const data = chart.data;
        const newDataset = {
          label: 'Dataset ' + (data.datasets.length + 1),
          backgroundColor: [],
          data: [],
        };

        for (let i = 0; i < data.labels.length; i++) {
          newDataset.data.push(
            Samples.utils.numbers({ count: 1, min: 0, max: 100 })
          );

          const colorIndex = i % Object.keys(Samples.utils.CHART_COLORS).length;
          newDataset.backgroundColor.push(
            Object.values(Samples.utils.CHART_COLORS)[colorIndex]
          );
        }

        chart.data.datasets.push(newDataset);
        chart.update();
      },
    },
    {
      name: 'Add Data',
      handler(chart) {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels.push('data #' + (data.labels.length + 1));

          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Samples.utils.rand(0, 100));
          }

          chart.update();
        }
      },
    },
    {
      name: 'Hide(0)',
      handler(chart) {
        chart.hide(0);
      },
    },
    {
      name: 'Show(0)',
      handler(chart) {
        chart.show(0);
      },
    },
    {
      name: 'Hide (0, 1)',
      handler(chart) {
        chart.hide(0, 1);
      },
    },
    {
      name: 'Show (0, 1)',
      handler(chart) {
        chart.show(0, 1);
      },
    },
    {
      name: 'Remove Dataset',
      handler(chart) {
        chart.data.datasets.pop();
        chart.update();
      },
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.labels.splice(-1, 1);

        chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
        });

        chart.update();
      },
    },
  ];
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Samples.utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Samples.utils.CHART_COLORS),
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  };
  return new Chart(document.getElementById('chart-5'), config);
};

const [chart1, chart2, chart3, chart4, chart5] = [
  initChart1(),
  initChart2(),
  initChart3(),
  initChart4(),
  initChart5(),
];
