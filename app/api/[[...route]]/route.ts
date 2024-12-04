import { db } from '@/db/drizzle'
import { todo } from '@/db/schema'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

app.get('/todo', async (c)=> {
  const data = await db.select().from(todo)
  return c.json({
    todos: data
  })
})

app.post('/todo', async (c) => {
  const body = await c.req.parseBody()
  
  return c.json({
    todo: body["input"]
  })
  // call db and add todo ...
})

export const GET = handle(app)
export const POST = handle(app)