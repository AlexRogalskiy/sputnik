'use strict'

module.exports = wallaby => ({
    debug: false,

    files: [
        { pattern: 'test/__fixtures__/*', instrument: false },
        'lib/*.js',
        'lib/__mocks__/*.js',
        '!test/*.spec.js',
        'src/**/*.ts',
        'tests/*.ts',
    ],

    tests: ['tests/**/*-test.ts', 'tests/*.spec.js'],

    env: {
        type: 'node',
        runner: 'node',
    },

    compilers: {
        '**/*.js': wallaby.compilers.babel(),
    },

    testFramework: 'jest',
})
