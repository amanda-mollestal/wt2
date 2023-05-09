import client from './elasticsearch'

export default async function getData() {

  const response = await client.search({
    index: 'dataset', 
    body: {
      query: {
        match_all: {}, 
      },
      size: 20,
    },
  })

  //console.log(response.hits.hits)

  const data = [] as any

  for (const hit of response.hits.hits) {
    data.push({
      id: hit._id,
      source: hit._source,
    })
  }

  //const data = response.hits.hits.map((hit: any) => hit._source)

  return data
}