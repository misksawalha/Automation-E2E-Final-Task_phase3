const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

// Correct the import of createEsBuildPlugin
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = async (on, config) => {
    const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    });
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);
    return config;
};
