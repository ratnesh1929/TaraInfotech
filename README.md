# MundraTech Website

A modern, responsive company website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI** - Beautiful, clean design with Tailwind CSS
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🔧 **TypeScript** - Type-safe development
- 📧 **Contact Forms** - Functional contact and quote forms
- 🎭 **Animations** - Smooth animations with Framer Motion
- 📊 **Analytics Ready** - Google Analytics integration ready
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tarainfotech-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── sections/         # Page sections
├── lib/                  # Utility functions
│   ├── constants.ts      # App constants
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/          # Images and icons
├── styles/              # Additional styles
│   ├── animations.css   # Animation utilities
│   └── components.css   # Component styles
├── types/               # TypeScript type definitions
└── README.md
```

## Customization

### Branding

1. **Company Information**: Update `lib/constants.ts` with your company details
2. **Logo**: Replace `public/images/logo.png` with your logo
3. **Colors**: Modify the color scheme in `tailwind.config.js`
4. **Fonts**: Update fonts in `app/globals.css`

### Content

1. **Services**: Edit the services array in `lib/constants.ts`
2. **Portfolio**: Update projects in the constants file
3. **Team**: Modify team members information
4. **Contact**: Update contact information and social links

### Styling

1. **Global Styles**: Edit `app/globals.css`
2. **Component Styles**: Modify `styles/components.css`
3. **Animations**: Customize `styles/animations.css`
4. **Tailwind Config**: Update `tailwind.config.js` for custom colors, fonts, etc.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- JavaScript is code-split automatically
- Static assets are cached efficiently

## SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data markup
- XML sitemap generation
- robots.txt file

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email mundratechworks@gmail.com or create an issue in the repository.

## Roadmap

- [ ] Blog functionality
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] CMS integration
- [ ] E-commerce features
- [ ] Advanced analytics

---

Built with ❤️ by MundraTech


