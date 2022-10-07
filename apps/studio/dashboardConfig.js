export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'mrbenito/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63403db08f039b04f5c1fa24',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-7zztg8ip',
                  apiId: '1c2c319b-b42e-4143-928c-353b35ac2d67'
                },
                {
                  buildHookId: '63403db12f60080b304328ef',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-3vmyp2u6',
                  apiId: '91906e69-032b-48a6-be62-71501781166d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrbenito/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-3vmyp2u6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
