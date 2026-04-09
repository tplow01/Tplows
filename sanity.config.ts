import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'thomas-plowman-portfolio',
  title: 'Thomas Plowman',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Case Studies')
              .schemaType('caseStudy')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.listItem()
              .title('Gallery')
              .schemaType('galleryItem')
              .child(S.documentTypeList('galleryItem').title('Gallery Items')),
            S.listItem()
              .title('About Page')
              .schemaType('about')
              .child(S.document().schemaType('about').documentId('about')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
