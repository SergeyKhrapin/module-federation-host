# Host Module

This is the host application in a Webpack Module Federation setup. It consumes the `Button` component from the remote module.

## Features

- Consumes a remote React Button component via Module Federation.
- Runs a development server on port 3000.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. The host app will be available at `http://localhost:3000`.

## Module Federation

This module uses Webpack's Module Federation plugin to consume the `Button` component from the remote module. The remote is configured to load from `http://localhost:3001` (see module-federation-remote repo)