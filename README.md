# willPreisProM2haben 🏷️

[![Tests](https://github.com/Felix-Binder/willPreisProM2haben/actions/workflows/test.yml/badge.svg)](https://github.com/Felix-Binder/willPreisProM2haben/actions)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
[![Version](https://img.shields.io/github/package-json/v/Felix-Binder/willPreisProM2haben)](package.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
![Manifest Version](https://img.shields.io/badge/manifest-v3-blue)


A super lightweight Browser Extension that adds a badge for the missing **price per square meter** attribute directly on [willhaben.at](https://www.willhaben.at) real estate listings.

## ✨ Features

- 🏡 Shows €/m² directly on all willhaben.at listings
- 🧠 Auto-calculates from existing DOM data (price + area)
- 🚀 Lightweight, no settings or storage
- 🔍 Works on detail and listing views
- 🌍 Works on Chrome **and** Firefox
- 🔒 Open Source & non-commercial

## 🧩 Compatibility

- ✅ **Chrome**
  - Compatible with Chrome (Manifest V3)
  - Publication planned in the Chrome Web Store
- 🦊 **Firefox** 
  - Compatible with Firefox (Manifest V3)
  - Adaptations for AMO compatibility in preparation

## 🚀 Installation (Development)

```bash
$ npm install
$ npm run dev
```

This will rebuild the extension in the `dist/` folder whenever files in the `src/` directory change or are saved during development.

To test the extension in your browser, follow these steps:

**Chrome**
1. open `chrome://extensions/`
2. activate "Development mode"
3. click on "Load unpackged"
4. choose the `dist/` directory

**Firefox**
1. open `about:debugging`
2. go to "This Firefox" tab
3. "Load Temporary Add-on..."
4. choose the `dist/manifest.json` file


## 🧰 Tech Stack

- Vite
- Vitest + jsdom
- ESLint + Prettier
- semantic-release
- Manifest V3

## 🧪 Run Tests & Lint
```
$ npm run test         # Run unit and integration tests
$ npm run lint         # Run ESLint
$ npm run format       # Format code with Prettier
```

## 📣 Feedback

You have a great idea or found a bug?  
👉 [Create a GitHub-Issue](https://github.com/Felix-Binder/willPreisProM2haben/issues)

## ⚖️ License
[MIT](./LICENSE) © 2025 Felix Binder
