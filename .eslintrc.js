module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@tanstack/query/recommended'],
  plugins: ['import', '@tanstack/query'],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@+(routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
            // 'react-native/no-inline-styles': 0,
          },
        ],
      },
    },
  ],
};
