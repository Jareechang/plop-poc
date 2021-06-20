'use strict';
const path = require('path');

module.exports = function(plop) {
    plop.addHelper('absPath', function (p) {
        return path.resolve(plop.getPlopfilePath(), p);
    });

    plop.setGenerator('utils', {
        description: 'Create an util',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Pick a file name:',
                validate: function (value) {
                    if (!value) return 'file name is required';
                    return true;
                }
            },
            {
                type: 'directory',
                name: 'path',
                message: 'Where would you like to put this component?',
                basePath: plop.getPlopfilePath()
            }
        ],
        actions: [
            {
                type: 'add',
                path: '{{path}}/utils/{{name}}.ts',
                templateFile: 'templates/utils/utils.ts'
            }
        ]
    });

    plop.setGenerator('component', {
        description: 'Create a React Component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Pick a file name:',
                validate: function (value) {
                    if (!value) return 'file name is required';
                    return true;
                }
            },
            {
                type: 'directory',
                name: 'path',
                message: 'Where would you like to put this component?',
                basePath: plop.getPlopfilePath()
            }
        ],
        actions: [
            {
                type: 'add',
                path: '{{path}}/{{lowerCase name}}/{{name}}.tsx',
                templateFile: 'templates/react-components/component.tsx'
            },
            {
                type: 'add',
                path: '{{path}}/{{lowerCase name}}/{{name}}.test.tsx',
                templateFile: 'templates/react-components/component-test.tsx'
            },
            {
                type: 'add',
                path: '{{path}}/{{lowerCase name}}/README.md',
                templateFile: 'templates/react-components/README.md'
            },
            {
                type: 'add',
                path: '{{path}}/{{lowerCase name}}/index.tsx',
                templateFile: 'templates/react-components/index.tsx'
            }
        ]
    });
}
