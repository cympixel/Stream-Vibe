export default function (plop) {

  // 🔹 ОБЫЧНЫЙ КОМПОНЕНТ (БЕЗ SCSS)
  plop.setGenerator('component', {
    description: 'React component (no styles)',
    prompts: [
      {
        type: 'list',
        name: 'basePath',
        message: 'Where to create component?',
        choices: [
          { name: 'components', value: 'src/components' },
          { name: 'sections', value: 'src/sections' },
          { name: 'layouts', value: 'src/layouts' }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{basePath}}/{{name}}/index.js',
        templateFile: 'plop-templates/component/index.js.hbs'
      },
      {
        type: 'add',
        path: '{{basePath}}/{{name}}/{{name}}.jsx',
        templateFile: 'plop-templates/component/component.jsx.hbs'
      }
    ]
  })

  // 🔹 КОМПОНЕНТ СО SCSS
  plop.setGenerator('component-scss', {
    description: 'React component with SCSS',
    prompts: [
      {
        type: 'list',
        name: 'basePath',
        message: 'Where to create component?',
        choices: [
          { name: 'components', value: 'src/components' },
          { name: 'sections', value: 'src/sections' },
          { name: 'layouts', value: 'src/layouts' }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{basePath}}/{{name}}/index.js',
        templateFile: 'plop-templates/component-scss/index.js.hbs'
      },
      {
        type: 'add',
        path: '{{basePath}}/{{name}}/{{name}}.jsx',
        templateFile: 'plop-templates/component-scss/component.jsx.hbs'
      },
      {
        type: 'add',
        path: '{{basePath}}/{{name}}/{{name}}.scss',
        templateFile: 'plop-templates/component-scss/component.scss.hbs'
      }
    ]
  })
}
