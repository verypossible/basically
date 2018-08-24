module.exports = {
  testEnvironment: 'enzyme',
  setupTestFrameworkScriptFile: './tests.js',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@basically/(.*)': '<rootDir>/packages/$1',
  },
  globals: {
    'ts-jest': {
      skipBabel: true,
    },
  },
};
