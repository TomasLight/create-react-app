const tsNameof = require("ts-nameof");

function override(config, env) {
    if (!config.module) {
        config.module = {};
    }

    if (!config.module.rules) {
        config.module.rules = [];
    }

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({ before: [tsNameof] }),
                },
            },
        ],
    });

    return config;
}

module.exports = override;
