#!/bin/bash

# Function to check if a command is available
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Create .gitignore file
echo 'node_modules
/package-lock.json
/package.json
/nodesource_setup.sh
/babel.config.js
/.eslintrc.js
/.gitignore' > .gitignore

# Install Node.js
if ! command_exists node; then
  curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
  sudo bash nodesource_setup.sh
  sudo apt install nodejs -y
fi

# Verify Node.js and npm versions
node_version=$(node -v)
npm_version=$(npm -v)

echo "Node.js version: $node_version"
echo "npm version: $npm_version"

# Install Jest, Babel, and ESLint in the project directory
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint

# Create configuration files if they don't exist
if [ ! -f package.json ]; then
  echo "Creating package.json..."
  echo '{
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "dev": "npx babel-node",
      "test": "jest",
      "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
    },
    "devDependencies": {
      "@babel/core": "^7.6.0",
      "@babel/node": "^7.8.0",
      "@babel/preset-env": "^7.6.0",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "jest": "^24.9.0"
    }
  }' > package.json
fi

if [ ! -f babel.config.js ]; then
  echo "Creating babel.config.js..."
  echo 'module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ]
    ]
  };' > babel.config.js
fi

if [ ! -f .eslintrc.js ]; then
  echo "Creating .eslintrc.js..."
  echo 'module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true
    },
    extends: ["airbnb-base", "plugin:jest/all"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["jest"],
    rules: {
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"]
    },
    overrides: [
      {
        files: ["*.js"],
        excludedFiles: "babel.config.js"
      }
    ]
  };' > .eslintrc.js
fi

# Install project dependencies
npm install

echo "Setup complete!"
