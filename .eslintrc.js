module.exports = {
  root: true,
  env: {
    node: true
  },
  ignorePatterns: ["node_modules", "packages/**/node_modules", "packages/**/dist"],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}