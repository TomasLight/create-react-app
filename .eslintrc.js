module.exports = {
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        indent: [1, 2, { SwitchCase: 1 }],
        curly: [1, 'all'],
        'brace-style': [1, 'stroustrup'],
        'object-curly-newline': [1, {
            ObjectExpression: {
                multiline: true,
                minProperties: 3,
            },
            ObjectPattern: {
                multiline: true,
                minProperties: 3,
            },
            ImportDeclaration: {
                multiline: true,
                minProperties: 3,
            },
            ExportDeclaration: {
                multiline: true,
                minProperties: 3,
            },
        }],
        'no-trailing-spaces': [1, { skipBlankLines: true, ignoreComments: true }],
        'linebreak-style': [1, 'unix'],
        'arrow-parens': [1, 'as-needed'],
        quotes: [1, 'single'],
        semi: [2, 'always'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
        }],
        'import/prefer-default-export': 'off',
    },
    overrides: [{
        files: ['**/*.ts?(x)'],
        rules: {
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn'
            ],
        }
    }],
};
