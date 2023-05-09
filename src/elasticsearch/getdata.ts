import client from './elasticsearch'

export default async function getData(question: string) {

  const response = await client.search({
    index: 'dataset',
    body: {
      query: {
        match_all: {}
      },
      fields: [question]
    },
    size: 1500
  })

  const data = [] as any


  for (const hit of response.hits.hits) {

    if (hit.fields) {
      data.push(hit.fields[question][0])
    }

  }



  return data
}

