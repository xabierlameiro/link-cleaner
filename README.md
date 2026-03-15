# Link Cleaner

A fast URL cleaning tool that strips tracking parameters (UTM tags, affiliate IDs, click trackers) from URLs, built with Astro 5, React 19, and Tailwind CSS v4.

[![CI](https://github.com/xabierlameiro/link-cleaner/actions/workflows/ci.yml/badge.svg)](https://github.com/xabierlameiro/link-cleaner/actions/workflows/ci.yml)

## Features

- 🧹 Removes common tracking parameters (utm_*, fbclid, gclid, etc.)
- ⚡ Instant cleaning — no server round-trip
- 📋 One-click copy to clipboard
- 🖥️ Zero-dependency URL parsing

## Stack

| Layer           | Choice             |
| --------------- | ------------------ |
| Framework       | Astro 5            |
| UI              | React 19           |
| Styling         | Tailwind CSS v4    |
| Testing         | Vitest             |
| Package manager | npm                |
| Branch          | `trunk`            |

## Getting started

```bash
git clone https://github.com/xabierlameiro/link-cleaner.git
cd link-cleaner
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm test`      | Vitest unit tests        |

## License

[MIT](./LICENSE) — © 2026 Xabier Lameiro
