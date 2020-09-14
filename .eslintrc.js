module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.js', '.*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'tests/**/*.ts', 'tests/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_' }],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        'getter-return': 'off',
      },
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
