# @tl21/eslint-custom

My personal concise ESLint configuration for modern **React/Next.js + TypeScript** projects.
Designed for **Flat Config** (ESLint 9+).

## Features

* ⚛️ **React**: Full JSX/TSX support (via `eslint-plugin-react`).
* 📘 **TypeScript**: Recommended `typescript-eslint` rules.
* ♿ **Accessibility**: Integrated `jsx-a11y` rules for WCAG compliance.
* 🧹 **Clean Code**: Auto-sorted imports (via `perfectionist`) and unused import removal.
* ⚡ **Modern**: Designed specifically for ESLint 9 "Flat Config".

## Requirements

* Node.js
* ESLint 9.0.0+

## Usage

### 1. Install

Install the package as a development dependency:

```bash
npm install -D @tl21/eslint-custom
# or
pnpm add -D @tl21/eslint-custom
# or
yarn add -D @tl21/eslint-custom

```

### 2. Configure `eslint.config.js`

Create or edit your `eslint.config.js` file at the root of your project. Import the shared config and export it.

**Basic Setup**

```javascript
import myConfig from "@tl21/eslint-custom";

export default [
  ...myConfig,
];

```

**Overriding Rules**

If you need to change specific rules (e.g., allowing `console.log`), add a new config object *after* spreading the shared config:

```javascript
import myConfig from "@tl21/eslint-custom";

export default [
  ...myConfig,

  {
    rules: {
      "no-console": "warn", // Downgrade from error to warning
    },
  },
];