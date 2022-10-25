`use strict`

// 学習時間
{
  const studyHours = [
      {"day": 1, "time": 3},
      {"day": 2, "time": 4},
      {"day": 3, "time": 5},
      {"day": 4, "time": 3},
      {"day": 5, "time": 0},
      {"day": 6, "time": 0},
      {"day": 7, "time": 4},
      {"day": 8, "time": 2},
      {"day": 9, "time": 2},
      {"day": 10, "time": 8},
      {"day": 11, "time": 8},
      {"day": 12, "time": 2},
      {"day": 13, "time": 2},
      {"day": 14, "time": 1},
      {"day": 15, "time": 7},
      {"day": 16, "time": 4},
      {"day": 17, "time": 4},
      {"day": 18, "time": 3},
      {"day": 19, "time": 3},
      {"day": 20, "time": 3},
      {"day": 21, "time": 2},
      {"day": 22, "time": 2},
      {"day": 23, "time": 6},
      {"day": 24, "time": 2},
      {"day": 25, "time": 2},
      {"day": 26, "time": 1},
      {"day": 27, "time": 1},
      {"day": 28, "time": 1},
      {"day": 29, "time": 7},
      {"day": 30, "time": 8}
  ];

  studyHoursDay = [];
  studyHoursTime = [];
  studyHours.forEach((element) => {
    studyHoursDay.push(element.day)
    studyHoursTime.push(element.time);
  })

  const ctx = document.getElementById('studyHoursGraph');
  const context = ctx.getContext('2d');
  const grad = context.createLinearGradient( 0 , 200 , 0 , 0 ) ;
  grad.addColorStop(0.0 , '#0f71bc');
  grad.addColorStop(1.0 , "#3ccfff");
  
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: studyHoursDay,
        datasets: [{
            label: '# of Votes',
            data: studyHoursTime,
            backgroundColor: grad,
            borderWidth: 1
        }]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 2,
            callback: function(value){
              if(value % 2 != 0  && value != 0){
                return value + 1;
              };
            }
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2,
            callback: function(value){
              return value+'h';
            }
          },
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      },
    }
  });
}

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

// 学習言語
{
  const languages = [
    {name: 'HTML', hour: 30, color: '#0000CD'},
    {name: 'CSS', hour: 20, color: '#4169E1'},
    {name: 'JavaScript', hour: 10, color: '#4682B4'},
    {name: 'PHP', hour: 5, color: '#20B2AA'},
    {name: 'Laravel', hour: 5, color: '#9370DB'},
    {name: 'SQL', hour: 20, color: '#8A2BE2'},
    {name: 'SHELL', hour: 20, color: '#00008B'},
    {name: '情報システム基礎知識（その他）', hour: 10, color: '#4B0082'},
  ];

  const ctx = document.getElementById('languagesPieChart');
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [languages[0].name, languages[1].name, languages[2].name, languages[3].name, languages[4].name, languages[5].name, languages[6].name, languages[7].name],
        datasets: [{
          data: [languages[0].hour, languages[1].hour, languages[2].hour, languages[3].hour, languages[4].hour, languages[5].hour, languages[6].hour, languages[7].hour],
          backgroundColor: [
            languages[0].color,
            languages[1].color,
            languages[2].color,
            languages[3].color,
            languages[4].color,
            languages[5].color,
            languages[6].color,
            languages[7].color,
          ],
          parsing: {
            yAxisKey: 'net'
          }
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          labels: {
            title: {
              color: "white",
            },
          },
          formatter: function (value, context) {
            return value + "%";
          },
        },
      }
    }
  });

  const languagesChartWrapper = document.getElementById('languagesChartWrapper');
  let languagesList = `<div class="contents-list">`
  + `<div><span style="color:${languages[0].color}">●</span>${languages[0].name}</div>`
  + `<div><span style="color:${languages[1].color}">●</span>${languages[1].name}</div>`
  + `<div><span style="color:${languages[2].color}">●</span>${languages[2].name}</div>`
  + `<div><span style="color:${languages[3].color}">●</span>${languages[3].name}</div>`
  + `<div><span style="color:${languages[4].color}">●</span>${languages[4].name}</div>`
  + `<div><span style="color:${languages[5].color}">●</span>${languages[5].name}</div>`
  + `<div><span style="color:${languages[6].color}">●</span>${languages[6].name}</div>`
  + `<div><span style="color:${languages[7].color}">●</span>${languages[7].name}</div>`
  + `</div>`;
  languagesChartWrapper.insertAdjacentHTML("beforeend", languagesList);
}

// 学習コンテンツ
{
  const contents = [
    {name: 'N予備校', hour: 40, color: '#0000CD'},
    {name: 'ドットインストール', hour: 60, color: '#1E90FF'},
    {name: 'POSSE課題', hour : 40, color: '#00BFFF'},
  ];

  const ctx = document.getElementById('contentsPieChart');
  
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [contents[0].name, contents[1].name, contents[2].name],
      datasets: [{
        data: [contents[0].hour, contents[1].hour, contents[2].hour],
        backgroundColor: [
          contents[0].color,
          contents[1].color,
          contents[2].color,
        ],
      }],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          labels: {
            title: {
              color: "white",
            },
          },
          formatter: function (value, context) {
            return value + "%";
          },
        },
      }
    }
  });

  const contentsChartWrapper = document.getElementById('contentsChartWrapper');
  let contentsList = `<div class="contents-list">`
  + `<div><span style="color:${contents[0].color}">●</span>${contents[0].name}</div>`
  + `<div><span style="color:${contents[1].color}">●</span>${contents[1].name}</div>`
  + `<div><span style="color:${contents[2].color}">●</span>${contents[2].name}</div>`
  + `</div>`;
  contentsChartWrapper.insertAdjacentHTML("beforeend", contentsList);
}
