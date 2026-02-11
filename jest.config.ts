import type { Config } from 'jest';

const config: Config = {
    rootDir: './',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/test/mocks/fileMock.js',
    },
}

export default config;