module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "react": {
            "version": "^16.8.2"
        }
    },
    "globals": {
        "window": true,
        "define": true,
        "require": true,
        "module": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "es6": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        // "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "react/jsx-boolean-value": 0,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": [2, "always"],
        "react/jsx-indent-props": [1, 4],
        "react/jsx-no-undef": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-wrap-multilines": 1,
        "react/react-in-jsx-scope": 1,
        "react/prefer-es6-class": 1,
        "react/jsx-no-bind": 1,
    }
}