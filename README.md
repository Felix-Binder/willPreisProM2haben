# willPreisProM2haben 🏷️

[![Tests](https://github.com/Felix-Binder/willPreisProM2haben/actions/workflows/test.yml/badge.svg)](https://github.com/Felix-Binder/willPreisProM2haben/actions)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
[![Version](https://img.shields.io/github/package-json/v/Felix-Binder/willPreisProM2haben)](package.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

A super lightweight Browser Extension that adds a badge for the **price per square meter** directly on [willhaben.at](https://www.willhaben.at) real estate listings.

## ✨ Features

- 🏡 Shows €/m² directly on all willhaben.at listings
- 🧠 Auto-calculates from existing DOM data (price + area)
- 🧼 Super lightweight, no settings or storage
- 🔍 Works on object and listing views
- 🔒 Open Source & non-commercial

## 🧩 Compatibility

- ✅ **Chrome** (ab Manifest v3, getestet auf Desktop)
  - Publication planned in the Chrome Web Store
- 🦊 **Firefox** 
  - Adaptations for AMO compatibility in preparation

## 🚀 Installation (Development)

```bash
$ npm install
$ npm run dev
```

Then load the `dist/` folder as an unpacked extension in Chrome with the "Development mode" enabled.

1. open `chrome://extensions/`
2. activate "Development mode"
3. click on "Load unpackged"
4. choose the `dist/` directory

### 🧰 Tech Stack

- Vite
- Vitest + jsdom
- ESLint + Prettier
- semantic-release
- Chrome Extension Manifest V3

### 🧪 Run Tests & Lint
```
$ npm run test         # Run unit and integration tests
$ npm run lint         # Run ESLint
$ npm run format       # Format code with Prettier
```

## 💡 Feedback

📣 You have a great idea or found a bug?  
👉 [Create a GitHub-Issue](https://github.com/Felix-Binder/willPreisProM2haben/issues)

## License
[MIT](./LICENSE) © 2025 Felix Binder
