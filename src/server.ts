import fastify from 'fastify'
import crypto from 'node:crypto'
import db from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await db('transactions').where('amount', 1000).select('*')
  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
