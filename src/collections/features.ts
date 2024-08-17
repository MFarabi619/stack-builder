import * as lucideIcons from 'react-icons/lu'
import type { CollectionConfig } from 'payload'

export const Features: CollectionConfig = {
  slug: 'features',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
  ],
}
