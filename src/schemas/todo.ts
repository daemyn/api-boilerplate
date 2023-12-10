import { ObjectId } from 'mongodb'
import { z } from 'zod'

export const TodoSchema = z
  .object({
    _id: z
      .string()
      .optional()
      .transform(value => new ObjectId(value)),
    name: z.string().min(3).max(255),
    done: z.boolean().default(false),
    timestamp: z.string().transform(t => new Date(t)),
  })
  .strict()

export type Todo = z.infer<typeof TodoSchema>
