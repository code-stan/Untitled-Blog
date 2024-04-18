export default defineType({
     name: 'content',
     type: 'array',
     title: 'Content',
     of: [
          { type: 'block' }, // Standard block content
          {
               type: 'image',
               title: 'Image',
               fields: [
                    {
                         title: 'Image',
                         name: 'image',
                         type: 'image',
                         options: { hotspot: true }, // Enable image cropping (optional)
                    },
                    {
                         title: 'Alternative Text',
                         name: 'alt',
                         type: 'string',
                         options: {
                              description: 'Important for accessibility and SEO',
                         },
                    },
               ],
          },
     ],
});