module.exports = {
    chainWebpack: config => {
        config.resolve.modules.add("./src");
    }
};

var path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            modules: [
                path.resolve("./src"),
                path.resolve("./node_modules")
            ]
        },
    }
}

module.exports = {
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
        StyleGuideRenderer: path.join(
            __dirname,
            'resources/'
        )
    }
}
