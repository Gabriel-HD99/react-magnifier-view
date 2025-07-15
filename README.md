# React Magnifier View

A modern, lightweight React component for image magnification with smooth hover effects.

## 🚀 [Live Demo](https://gabriel-hd99.github.io/react-magnifier-view/)

[![npm version](https://badge.fury.io/js/react-magnifier-view.svg)](https://www.npmjs.com/package/react-magnifier-view)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🔍 **Smooth magnification** - Follows mouse cursor with fluid animations
- 🖥️ **Desktop optimized** - Designed specifically for desktop applications
- 🎨 **Highly customizable** - Control size, zoom level, styling, and behavior
- 🚀 **Lightweight** - Minimal dependencies and optimized performance
- 📱 **Portal rendering** - Magnifier renders outside component boundaries
- 🎯 **TypeScript ready** - Full TypeScript support with comprehensive types
- 🔧 **Flexible** - Support for different source images for magnification

## Installation

```bash
npm install react-magnifier-view
```

```bash
yarn add react-magnifier-view
```

```bash
pnpm add react-magnifier-view
```

## Basic Usage

```jsx
import React from "react";
import Magnifier from "react-magnifier-view";

function App() {
  return (
    <div>
      <Magnifier src="/path/to/your/image.jpg" alt="Product image" />
    </div>
  );
}
```

## Advanced Usage

```jsx
import React from "react";
import Magnifier from "react-magnifier-view";

function ProductGallery() {
  return (
    <div className="product-gallery">
      <Magnifier
        src="/thumbnail.jpg"
        largeSrc="/high-resolution.jpg"
        alt="Product detail view"
        magnifierSize={400}
        zoomLevel={3}
        hoverMessage="Click and drag to explore"
        containerClassName="my-magnifier-container"
        imageClassName="product-image"
        messageClassName="custom-hint"
        portalElementId="magnifier-portal"
      />

      {/* Portal target */}
      <div id="magnifier-portal"></div>
    </div>
  );
}
```

## Props

| Prop                 | Type     | Default              | Description                                                        |
| -------------------- | -------- | -------------------- | ------------------------------------------------------------------ |
| `src`                | `string` | **required**         | Source URL of the image to display                                 |
| `largeSrc`           | `string` | `undefined`          | Optional high-resolution image URL for magnification               |
| `alt`                | `string` | `""`                 | Alt text for accessibility                                         |
| `containerClassName` | `string` | `""`                 | CSS class for the main container                                   |
| `imageClassName`     | `string` | `""`                 | CSS class for the image element                                    |
| `messageClassName`   | `string` | `""`                 | CSS class for the hover message                                    |
| `magnifierSize`      | `number` | `320`                | Size of the magnifier circle in pixels                             |
| `zoomLevel`          | `number` | `2.5`                | Magnification level (1 = no zoom, 2 = 2x zoom, etc.)               |
| `hoverMessage`       | `string` | `"Hover to magnify"` | Text shown in the hover hint                                       |
| `portalElementId`    | `string` | `undefined`          | ID of element to render magnifier into (defaults to document.body) |

## Styling

The component comes with default styles, but you can customize every aspect:

### CSS Classes

- `.imageZoomContainer` - Main container wrapper
- `.magnifyWrapper` - Image wrapper with hover detection
- `.mainImage` - The actual image element
- `.zoomHint` - Hover message overlay
- `.zoomHintText` - Text within the hint
- `.magnifierIcon` - Search icon in the hint
- `.magnifierPortal` - Portal container for the magnifier

### Custom Styling Example

```css
.my-magnifier-container .mainImage {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.my-magnifier-container .zoomHint {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 4px;
}
```

## Use Cases

### E-commerce Product Images

Perfect for online stores where customers need to examine product details closely.

```jsx
<Magnifier
  src="/product-thumbnail.jpg"
  largeSrc="/product-4k.jpg"
  alt="Product details"
  magnifierSize={350}
  zoomLevel={3}
  hoverMessage="Hover to see details"
/>
```

### Technical Documentation

Great for diagrams, schematics, or detailed illustrations.

```jsx
<Magnifier
  src="/diagram-small.png"
  largeSrc="/diagram-full.png"
  alt="System architecture diagram"
  magnifierSize={400}
  zoomLevel={2}
/>
```

### Art and Photography Galleries

Ideal for showcasing artwork or photography with fine details.

```jsx
<Magnifier
  src="/artwork-preview.jpg"
  largeSrc="/artwork-full.jpg"
  alt="Digital artwork"
  magnifierSize={500}
  zoomLevel={4}
  hoverMessage="Explore the details"
/>
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Requirements

- React 16.8+
- Modern browser with CSS backdrop-filter support for best visual effects

## Performance Tips

1. **Use appropriate image sizes**: Provide optimized thumbnails for `src` and high-resolution images for `largeSrc`
2. **Lazy loading**: Consider implementing lazy loading for large image sets
3. **Portal usage**: Use `portalElementId` to control where the magnifier renders for better performance in complex layouts

## Development

```bash
# Clone the repository
git clone https://github.com/yourusername/react-magnifier-view.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [Gabriel Hernandez]

## Changelog

### 1.0.0

- Initial release
- Basic magnification functionality
- TypeScript support
- Portal rendering
- Customizable styling

---

**Made with ❤️ for the React community**
