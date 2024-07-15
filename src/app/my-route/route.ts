import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function GET() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}
