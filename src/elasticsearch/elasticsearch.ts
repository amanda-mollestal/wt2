/**
 * Elasticsearch client configuration file
 */ 

import { Client } from '@elastic/elasticsearch'

const elasticId = process.env.ELASTIC_CLOUD_ID
const elasticUser = process.env.ELASTIC_CLOUD_USERNAME
const elasticPassword = process.env.ELASTIC_CLOUD_PASSWORD

if (!elasticId || !elasticUser || !elasticPassword) {
  throw new Error('Elasticsearch credentials are not set')
}

const client = new Client({
  cloud: {
    id: elasticId,
  },
  auth: {
    username: elasticUser,
    password: elasticPassword,
  }
})

export default client
