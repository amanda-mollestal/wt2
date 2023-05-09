import client from './elasticsearch'
import path from 'path'
import fs from 'fs'
import csvParser from 'csv-parser'

export default async function saveData() {
  const results = [] as any

  const csvPath = path.join(process.cwd(), 'src/dataset', 'myData.csv')

  fs.createReadStream(csvPath)
    .pipe(csvParser())
    .on('data', async (data) => {

      const id = (results.length / 2) + 1

      results.push({
        index: { _index: 'dataset', _id: id }
      })
      results.push(data)

    })
    .on('end', async () => {
      const response = await client.bulk({ refresh: true, body: results })

      if (response.errors) {
        console.log(response.errors)
      } else {
        console.log('Data saved successfully!')
      }
    })
};
