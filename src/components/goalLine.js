import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import gradient from 'chartjs-plugin-gradient'
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  gradient
)

const GoalLineChart = (props) => {
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#1E1C0F',
          font: {
            size: 11,
            family: 'Quicksand',
            weight: '450',
          },
          padding: 20,
          pointStyle: 'rectRounded',
          usePointStyle: true,
        },
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
      tooltip: {
        enabled: false,
        external: ({ chart, tooltip }) => {
          const ct = document.getElementById('custom-tooltip')
          const cth = document.getElementById('tooltip-title')
          // current
          const ctcc = document.getElementById('tooltip-current-color')
          const ctc0 = document.getElementById('tooltip-current-0')
          const ctc1 = document.getElementById('tooltip-current-1')
          // target
          const cttc = document.getElementById('tooltip-target-color')
          const ctt0 = document.getElementById('tooltip-target-0')
          const ctt1 = document.getElementById('tooltip-target-1')

          // show custom tooltip
          ct.style.opacity = 1
          // change label / title for tooltip
          cth.innerHTML = tooltip?.dataPoints[0].label

          const dataCurrent = tooltip?.dataPoints?.find(
            (item) => item.dataset.label === 'Current'
          )
          if (dataCurrent) {
            // change current value
            ctc1.innerHTML = dataCurrent.formattedValue ?? 0
            ctcc.style.opacity = 1
            ctc0.style.opacity = 1
            ctc1.style.opacity = 1
          } else {
            ctcc.style.opacity = 0
            ctc0.style.opacity = 0
            ctc1.style.opacity = 0
          }
          const dataTarget = tooltip?.dataPoints?.find(
            (item) => item.dataset.label === 'Target'
          )
          if (dataTarget) {
            // change and show target value
            ctt1.innerHTML = dataTarget.formattedValue ?? 0
            cttc.style.opacity = 1
            ctt0.style.opacity = 1
            ctt1.style.opacity = 1
          } else {
            cttc.style.opacity = 0
            ctt0.style.opacity = 0
            ctt1.style.opacity = 0
          }
          //   change x grid line if there's selected data
          if (tooltip?.dataPoints && tooltip?.dataPoints.length) {
            const xIndex = tooltip?.dataPoints[0].dataIndex
            chart.scales.x._gridLineItems?.forEach((grids, id) => {
              if (id === xIndex) {
                grids.color = '#FB9825'
                grids.width = 3
              } else {
                grids.color = '#E8EBEE'
                grids.width = 1
              }
            })
          } else {
            chart.scales.x._gridLineItems?.forEach((grids) => {
              grids.color = '#E8EBEE'
              grids.width = 1
            })
          }
          return ''
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        display: true,
        ticks: {
          display: true,
          color: '#78776F',
          font: {
            size: 10,
            family: 'Quicksand',
            weight: '600',
          },
          padding: 10,
          align: 'start',
          autoSkip: true,
        },
        grid: {
          drawTicks: true,
          color: '#E8EBEE',
        },
      },
      y: {
        position: 'right',
        ticks: {
          display: true,
          color: '#78776F',
          font: {
            size: 10,
            family: 'Quicksand',
            weight: '600',
          },
          padding: 10,
          callback: function (value, index, ticks) {
            return value
          },
        },
        grid: {
          color: '#E8EBEE',
          drawTicks: false,
        },
      },
    },
  })

  const handleLeave = (ev) => {
    setOptions({
      ...options,
      scales: {
        ...options.scales,
        x: {
          ...options.scales.x,
          grid: {
            drawTicks: true,
            color: '#E8EBEE',
          },
        },
      },
    })
  }
  return <Line onMouseLeave={handleLeave} options={options} {...props} />
}

export default GoalLineChart
