# Website v2 - Minimalist Personal Portfolio

A clean, minimalist personal website inspired by OpenAI and Anthropic's design philosophy. Built with Next.js and Tailwind CSS, focusing on typography, readability, and professional presentation.

## Design Principles

- **Extreme Minimalism**: Clean, uncluttered design with purposeful white space
- **Typography-First**: Content and readability as the primary focus
- **Academic Tone**: Professional, research-oriented presentation
- **Performance**: Fast loading times with minimal JavaScript
- **Accessibility**: Universal access and screen reader friendly

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Inter font via Google Fonts
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Content
- Update personal information in each component file
- Modify the data arrays in components for your own content
- Replace placeholder links with your actual profiles

### Styling
- Colors and typography are defined in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes

### Sections
- Each section is a separate component in the `components/` directory
- Easy to reorder, remove, or add new sections
- All sections are responsive and accessible

## Performance Features

- Minimal JavaScript bundle
- Optimized fonts with `next/font`
- Static generation for fast loading
- No external dependencies beyond core libraries

## Deployment

```bash
npm run build
npm start
```

Or deploy directly to Vercel:
```bash
vercel
```

## License

MIT License - feel free to use this as a template for your own website. 