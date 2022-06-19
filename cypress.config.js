const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },
    env: {
        "allureResultsPath": "allure-results",
        "allureLogCypress": true
    },
    video: false
};


