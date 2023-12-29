# Astrix UI

AstrixUI is a set of ready-to-go React components and hooks to minimize your effort building UI applications.

## Features
- Available for React v18
- Styled using Tailwindcss
- ESM support
- TypeScript support

## Installation

```bash
npm i astrixui
```

## How to use it

This library uses TailwindCSS to style its components, so you need to use Tailwind in your project and make some changes inside the `tailwind.config.js` file.

### 1. Add presets with the following import
```jsx
//...
plugins: [require('astrixui/plugin')]
//...
```
### 2. Add the module to the contents section
```jsx
//...
content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/astrixui/**/*.{js,jsx,ts,tsx,mdx}',
  ],
//...
```
### 3. Import `index.css` file from AstrixUI in your main css file
```css
@import '~astrixui/index.css'
```
### 4. Import your components
```jsx
import { Card, CardContent, CardFooter, CardTitle } from 'astrixui';
```

## Troubleshooting

_1. I'm getting an error on compilation when I import some components from the library_

Some components may fail on compiling due to the nature of server components and how react handles them, so you might need to use the `use client` directive at the top of a file, above your imports.

## Contributing
Create a PR with your changes, please provide enough information and how to reproduce your changes. A well-written RFC will be much appreciated.

## Credits

Made with ❤️ by Ricardo Riveros