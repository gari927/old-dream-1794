export const dynamic = 'force-dynamic'

export async function GET(request: Request, context: { env: { DB: D1Database } }) {
  const db = context.env.DB

  const { results } = await db.prepare('SELECT * FROM users').all()

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' }
  })
}