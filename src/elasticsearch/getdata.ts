import client from './elasticsearch'

/**
 * Retrieves data from Elasticsearch based on a question.
 * 
 * @param {string} question - The question to search for.
 * @returns {Promise<any[]>} A Promise that resolves to an array of search results.
 */
export default async function getData(question: string): Promise<any[]> {

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

