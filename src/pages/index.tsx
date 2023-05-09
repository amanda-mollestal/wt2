import Head from 'next/head'
import saveData from '@/elasticsearch/savedata'
import getData from '@/elasticsearch/getdata'
import PieChart from '@/components/PieChart'

type Props = {
  diagnosedData: any,
  hurtCareerData: any
}

export default function Home({ diagnosedData, hurtCareerData }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='info'>
          <h1>Data from the OSMI Mental Health in Tech Survey 2016</h1>
          <h3 style={{ fontSize: 20 }}>With 1433 responses, the survey aimed to measure attitudes towards mental health in the tech workplace, and examine the frequency of mental health disorders among tech workers.</h3>
        </div>
        <div className="charts">

          <PieChart data={diagnosedData} question='Have you been diagnosed with a mental health condition by a medical professional?' />
          <PieChart data={hurtCareerData} question='Do you feel that being identified as a person with a mental health issue would hurt your career?' />

        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {

  await saveData()
  const diagnosedData = await getData('Have you been diagnosed with a mental health condition by a medical professional?')
  const hurtCareerData = await getData('Do you feel that being identified as a person with a mental health issue would hurt your career?')

  return {
    props: {
      diagnosedData: diagnosedData,
      hurtCareerData: hurtCareerData
    }
  }
}


