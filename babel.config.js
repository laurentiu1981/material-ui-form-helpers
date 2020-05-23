module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-function-bind"
  ],
  "env": {
    "test": {
      "plugins": [
        "require-context-hook",
        "@babel/plugin-transform-runtime"
      ]
    }
  }
};
