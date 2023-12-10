import 'reflect-metadata'
import fastify from 'fastify'
import todos from './routes/todos'
import { AppDataSource } from './data-source'

const server = fastify()

async function start(): Promise<void> {
  await AppDataSource.initialize()
  await server.register(todos, { prefix: 'todos' })

  server.listen({ port: 8080 }, (err, address) => {
    if (err !== null) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}

void start()
