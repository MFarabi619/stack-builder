// storage-adapter-import-placeholder
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Users } from '@/collections/users'
import { Media } from '@/collections/media'
import { Documents } from '@/collections/documents'
import { Features } from '@/collections/features'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Documents, Features],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET as string,
      config: {
        forcePathStyle: true, // Important for using Supabase
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
