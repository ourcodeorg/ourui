module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ourui`
  extends: ["ourui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
