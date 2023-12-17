import type { Config } from "jest";

const config: Config = {
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|webp)$": "<rootDir>/src/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)": "ts-jest",
  },
  verbose: true,
};

export default config;
