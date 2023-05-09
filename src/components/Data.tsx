import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type Props = {
  data: any
}

const Data = ({ data }) => {

  // Create a set of unique responses
  const uniqueResponses = new Set(data)
  console.log(uniqueResponses)

  // Convert the set back to an array
  const distinctResponses = Array.from(uniqueResponses)
  console.log(distinctResponses)

  const responseCounts: any[] = []

  for (let i = 0; i < distinctResponses.length; i++) {
    responseCounts.push(data.filter((r: string) => r === distinctResponses[i]).length)
  }

  const chartData = {
    labels: distinctResponses,
    datasets: [
      {
        label: 'Responses',
        data: responseCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ]
      }
    ]
    }
  return (
    <div className='dataView'>
     {distinctResponses.map((response, index) => (
        <p key={index}>{response}: {responseCounts[index]}</p>
      ))}
      <Pie data={chartData} />
    </div>
  )
}

export default Data

 /*const responseCounts = distinctResponses.map(response => {
    return data.filter((r: string) => r === response).length
  })*/


  /*const yesResponses = responses.filter(response => response === 'yes');
  const noResponses = responses.filter(response => response === 'no');

  console.log(yesResponses); // ['yes', 'yes', 'yes']
  console.log(noResponses); // ['no', 'no', 'no']*/