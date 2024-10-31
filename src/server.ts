import fastify from 'fastify'
import db from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await db('transactions').where('amount', 1000).select('*')
  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
