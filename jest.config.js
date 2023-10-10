module.exports = {
  verbose: true, // Display detailed test information
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(test).js?(x)"], // Pattern for test files
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy", // Mock CSS and LESS modules
  },
};
