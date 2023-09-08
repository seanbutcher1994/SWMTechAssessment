module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    collectCoverageFrom: ['components/**/*.ts', 'pages/**/*.ts'],
    coverageReporters: ['lcov', 'text'],
    modulePaths: [
        "./"
      ]
  };
