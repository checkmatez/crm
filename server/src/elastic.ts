import * as es from 'elasticsearch'

const client = new es.Client({
  host: 'localhost:9200',
  // log: 'trace',
})

const asyncFunc = async () => {
  try {
    const response = await client.search({
      index: 'companies',
      body: {
        query: {
          match_all: {},
        },
      },
      // sort: 'account_number:asc',
      // _source: ['account_number', 'firstname'],
    })
    console.log(response.hits.hits)
    console.log('TOTAL', response.hits.total)
  } catch (error) {
    console.log(error)
    console.trace(error.message)
  }
}

asyncFunc()
