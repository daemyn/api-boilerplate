import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'todos' })
export class TodoEntity {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  name: string

  @Column()
  done: boolean

  @Column()
  timestamp: Date
}
