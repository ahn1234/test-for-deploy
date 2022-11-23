    // setup 
    const data = {
      // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: ['인벤토리 기능 좀 넣어 주세요', '멀티기능 좀 추가 해주세요', '버그좀  수정 해주세요'],
      datasets: [{
        label: 'Weekly Sales',
        // data: [18, 12, 6, 9, 12, 3, 9],
        data: [18, 12, 6],
        borderColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        backgroundColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 0,
        borderSkipped: 'false',
        borderRadius: 5,
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      }]
    };

    //progressBar plugin block
    const progressBar = {
      id: 'progressBar',
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, chartArea: { top, bottom, left, right, width, height },
          scales: { x, y } } = chart;
        ctx.save();
        const barHeight = height / y.ticks.length*data.datasets[0].
        barPercentage*data.datasets[0].categoryPercentage;


        data.datasets[0].data.forEach((datapoint, index) => {
          //label text
          //창의 크기에 따라 변하는 폰트사이즈
          const fontSizeLabel =15;
          ctx.font = `${fontSizeLabel}px Arial`;
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(data.labels[index], left, y.getPixelForValue(index) -
            fontSizeLabel - 25);

          //value text
          const fontSizeDatapoint = 12;
          ctx.font = `${fontSizeDatapoint}px Arial`;
          ctx.fillStyle = 'rgba(102, 102, 102, 1)';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(datapoint, right, y.getPixelForValue(index) -
            fontSizeDatapoint - 5);

          //bg color progess bar
          ctx.beginPath();
          ctx.fillStyle = data.datasets[0].borderColor[index];
          ctx.fillRect(left, y.getPixelForValue(index)-(barHeight/2), width, barHeight);

        })

      }
    }


    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorer: false
            },
            ticks: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
              drawBorer: false
            },
            ticks: {
              display: false
            }
          }
        }
      },
      plugins: [progressBar]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );