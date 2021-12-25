import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

export default config;
