import knex, { Knex } from 'knex'
import 'dotenv/config'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

const dbKnex = knex(config)
export default dbKnex
