import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
  data: any,
  question: string
}

const PieChart = ({ data, question }) => {

  const backgroundColors = [
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ]

  // Create a set of unique responses
  const uniqueResponses = new Set(data)
  console.log(uniqueResponses)

  // Convert the set back to an array
  const distinctResponses = Array.from(uniqueResponses)
  console.log(distinctResponses)

  const responseCounts: any[] = []

  const chartColors = []
  for (let i = 0; i < distinctResponses.length; i++) {
    console.log(distinctResponses[i])
    responseCounts.push(data.filter((r: string) => r === distinctResponses[i]).length)
    console.log(data.filter((r: string) => r === distinctResponses[i]).length)
    chartColors.push(backgroundColors[i])

  }

  const chartData = {
    labels: distinctResponses,
    datasets: [
      {
        label: 'Responses',
        data: responseCounts,
        backgroundColor: chartColors
      }
    ]
    }

  return (
    <div className='dataView'>
      <h3>{question}</h3>
      <div className='chart' >
        <Pie data={chartData} />
      </div>
    </div>
  )
}

export default PieChart
