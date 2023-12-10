import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from 'fastify'
import { TodoSchema, type Todo } from '../schemas/todo'
import { AppDataSource } from '../data-source'
import { TodoEntity } from '../enitities/Todo.entity'

const todoRepository = AppDataSource.getRepository(TodoEntity)

export default (server: FastifyInstance): FastifyInstance => {
  server.get(
    '/',
    async (request: FastifyRequest, reply: FastifyReply): Promise<Todo[]> => {
      return await todoRepository.find({})
    },
  )

  server.post('/', async (request, reply): Promise<Todo> => {
    const todo: Todo = TodoSchema.parse(request.body)
    await todoRepository.insert(todo)
    return todo
  })

  return server
}
