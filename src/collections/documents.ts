import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
  ],
}
