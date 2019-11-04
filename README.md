# Webpack Resolver Issue

`eslint-plugin-import` webpack resolver issue detils. Please refer to the project [issue](https://github.com/benmosher/eslint-plugin-import/issues/1511) for more details.

## Steps to reproduce

1. Install dependencies

    ```sh
    yarn install
    ```

2. Run ESLint

    ```sh
    yarn eslint src
    ```

## My findings so far

- If I'm using the default `webpack` config location at `<root>/webpack.config.js`, I can have the following on my `.eslintrc.json`

    ```json
    "settings": {
        "import/resolver": "webpack"
    }
    ```

    In this case, **it works just fine**.

- The issue only occurs when `webpack` config is not at its default location. Then I have to add the following content to my `.eslintrc.json`:
            
    ```json
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.dev.config.js"
            }
        }
    }
    ```

    Then I get the following error:

    ```
    Error resolving webpackConfig Error: Cannot find module '<path>/webpack-resolver-issue/node_modules/date-fns/webpack.dev.config.js'
    Require stack:
    - <path>/webpack-resolver-issue/node_modules/eslint-import-resolver-webpack/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js
    - <path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/rules/no-unresolved.js
    - <path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/config-array-factory.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cli-engine.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli.js
    - <path>/webpack-resolver-issue/node_modules/eslint/bin/eslint.js
        at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)
        at Function.Module._load (internal/modules/cjs/loader.js:687:27)
        at Module.require (internal/modules/cjs/loader.js:849:19)
        at require (<path>/webpack-resolver-issue/node_modules/eslint/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
        at Object.exports.resolve (<path>/webpack-resolver-issue/node_modules/eslint-import-resolver-webpack/index.js:66:27)
        at v2 (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:94:23)
        at withResolver (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:99:16)
        at fullResolve (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:116:22)
        at Function.relative (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:61:10)
        at remotePath (<path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/ExportMap.js:401:30) {
    code: 'MODULE_NOT_FOUND',
    requireStack: [
        '<path>/webpack-resolver-issue/node_modules/eslint-import-resolver-webpack/index.js',
        '<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js',
        '<path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/rules/no-unresolved.js',
        '<path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/index.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/config-array-factory.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cli-engine.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/index.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/lib/cli.js',
        '<path>/webpack-resolver-issue/node_modules/eslint/bin/eslint.js'
    ]
    }
    Error: Cannot find module '<path>/webpack-resolver-issue/node_modules/date-fns/webpack.dev.config.js'
    Require stack:
    - <path>/webpack-resolver-issue/node_modules/eslint-import-resolver-webpack/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js
    - <path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/rules/no-unresolved.js
    - <path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/config-array-factory.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/cli-engine.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli-engine/index.js
    - <path>/webpack-resolver-issue/node_modules/eslint/lib/cli.js
    - <path>/webpack-resolver-issue/node_modules/eslint/bin/eslint.js
        at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)
        at Function.Module._load (internal/modules/cjs/loader.js:687:27)
        at Module.require (internal/modules/cjs/loader.js:849:19)
        at require (<path>/webpack-resolver-issue/node_modules/eslint/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
        at Object.exports.resolve (<path>/webpack-resolver-issue/node_modules/eslint-import-resolver-webpack/index.js:66:27)
        at v2 (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:94:23)
        at withResolver (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:99:16)
        at fullResolve (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:116:22)
        at Function.relative (<path>/webpack-resolver-issue/node_modules/eslint-module-utils/resolve.js:61:10)
        at remotePath (<path>/webpack-resolver-issue/node_modules/eslint-plugin-import/lib/ExportMap.js:401:30)
    ```

