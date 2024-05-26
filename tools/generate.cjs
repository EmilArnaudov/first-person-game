const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  // Example of generating multiple files
  {
    option: 'DEFAULT Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component/',
    },
    stringReplacers: ['__component__'],
    output: {
      path: './src/components/__component__',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
  {
    option: 'GAME Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/game-component/',
    },
    stringReplacers: ['__component__'],
    output: {
      path: './src/components/game-world/__component__',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
  // {
  //   option: 'MOLECULE Component',
  //   defaultCase: '(pascalCase)',
  //   entry: {
  //     folderPath: './tools/templates/molecule-component/',
  //   },
  //   stringReplacers: ['__component__'],
  //   output: {
  //     path: './src/components/molecules/__component__',
  //     pathAndFileNameDefaultCase: '(kebabCase)',
  //   },
  //   onComplete: (results) => {
  //     console.log(`results`, results);
  //   },
  // },
  // {
  //   option: 'ORGANISM Component',
  //   defaultCase: '(pascalCase)',
  //   entry: {
  //     folderPath: './tools/templates/organism-component/',
  //   },
  //   stringReplacers: ['__component__'],
  //   output: {
  //     path: './src/components/organisms/__component__',
  //     pathAndFileNameDefaultCase: '(kebabCase)',
  //   },
  //   onComplete: (results) => {
  //     console.log(`results`, results);
  //   },
  // },
  // {
  //   option: 'PAGE Component',
  //   defaultCase: '(pascalCase)',
  //   entry: {
  //     folderPath: './tools/templates/page-component/',
  //   },
  //   stringReplacers: ['__component__'],
  //   output: {
  //     path: './src/components/pages/__component__',
  //     pathAndFileNameDefaultCase: '(kebabCase)',
  //   },
  //   onComplete: (results) => {
  //     console.log(`results`, results);
  //   },
  // },
  // Example of generating a single file
  // {
  //   option: 'Create Redux Reduce',
  //   defaultCase: '(pascalCase)',
  //   entry: {
  //     folderPath: './tools/templates/__store__Reducer.ts',
  //   },
  //   stringReplacers: ['__store__', '__model__'],
  //   output: {
  //     path: './src/stores/__store__/__store__(pascalCase)Reducer.ts',
  //     pathAndFileNameDefaultCase: '(kebabCase)',
  //   },
  // },
]);
