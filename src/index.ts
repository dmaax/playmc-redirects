import { Hono } from 'hono'
import indexRoutes from './routes'

const app = new Hono()

app.notFound((c) => c.json({ error: 'Are you lost?' }, 404))

indexRoutes(app)

app.fire()
