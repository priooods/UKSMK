import store from '../store';

var uk1 = store.state.ukone.length
var uk2 = store.state.uktwo.length
var uk3 = store.state.ukthree.length
var all = store.state.karyawanUser.length + store.state.operator.length
var operator = store.state.operator.length

export const planetChartData = {
    type: 'bar',
    data: {
      labels: ['UK I', 'UK II', 'UK III', 'ALL', 'Operator'],
      datasets: [
        { 
          label: 'Totals',
          data: [uk1, uk2, uk3, all, operator],
          backgroundColor: [
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
          ],
          borderColor: [
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 2
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default planetChartData;