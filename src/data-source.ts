import { DataSource } from 'typeorm'
import { TodoEntity } from './enitities/Todo.entity'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb://localhost:27017',
  database: 'boilerplate',
  logging: true,
  entities: [TodoEntity],
})
