# Truth Charting Youth Series

A revolutionary Catholic youth formation platform that combines Grand Tour-style adventure with deep theological formation.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build for production
npm run build:prod

# Preview production build
npm run serve
```

## 📦 Project Structure

```
src/
├── App.tsx              # Main application component
├── assets/              # Images and static assets
├── components/          # Reusable UI components
│   ├── figma/          # Figma-specific components
│   └── ui/             # Base UI components
├── styles/             # Global styles
└── main.tsx            # Application entry point
```

## 🛠️ Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Motion** - Animations
- **Lucide React** - Icons

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build:prod`
4. Output directory: `dist`
5. Deploy!

### GitHub Pages
1. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build:prod",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

### Manual Deployment
1. Build the project: `npm run build:prod`
2. Upload the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Clean build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build on port 4173
- `npm run clean` - Remove build directory

## 📱 Features

- **Responsive Design** - Works on all devices
- **Modern UI** - Beautiful, accessible interface
- **Performance Optimized** - Fast loading and smooth animations
- **SEO Ready** - Proper meta tags and structure
- **Accessible** - WCAG compliant

## 🎨 Design System

The project uses a custom design system with:
- Orange/Red gradient theme
- Glassmorphism effects
- Smooth animations
- Consistent spacing and typography

## 📄 License

© 2025 Truth Charting LLC. All rights reserved.
  