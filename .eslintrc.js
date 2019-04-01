module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    globals: {
        __static: true,
        gxcUtil: true,
        MtaH5: true
    },
    plugins: [
        'html'
    ],
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": ["error", 4, {"SwitchCase": 1}],
        'space-before-function-paren': 0,
        'camelcase': 0,
        'eqeqeq': 0,
        'no-extra-boolean-cast': 0,
        'import/first': 0,
        'no-return-assign': 0,
        'import/no-webpack-loader-syntax': 0,
    }
}
