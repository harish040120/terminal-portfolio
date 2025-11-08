# Portfolio Terminal - Dark Space Theme

A modern portfolio website with an interactive terminal interface, featuring a mesmerizing starfield background and green monospace terminal aesthetics.

## 🚀 Features

- **Interactive Terminal UI** - Navigate through portfolio content using terminal commands
- **Starfield Canvas Background** - Animated star particles creating a space-like atmosphere
- **Typed Intro Animation** - Dynamic text typing effect using Framer Motion
- **Command System** - Type commands like `about`, `projects`, `skills`, `education`, `resume`, `contact`
- **GitHub Integration** - Automatically fetches and displays latest repositories
- **Skill Badges** - Visual representation of technical skills and certifications
- **Projects Grid** - Showcases both resume projects and GitHub repositories
- **Contact Form** - Ready for Vercel/Netlify forms integration
- **Accessibility** - Respects `prefers-reduced-motion`, full keyboard navigation, ARIA labels
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React 19** - Latest React features

## 📋 Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

## 🚀 Quick Start

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page auto-updates as you edit the files.

## 📝 Available Terminal Commands

Type these commands in the terminal interface:

- `help` - Display all available commands
- `about` - Show personal information and achievements
- `projects` - View featured projects and GitHub repositories
- `skills` - List technical skills and certifications
- `education` - Display educational background
- `resume` - Download resume PDF
- `contact` - Get contact information and send message
- `clear` - Clear the terminal screen

## 🎨 Customization

### Update Personal Data

Edit `data.json` to update your personal information, projects, skills, education, and achievements.

### Modify Theme

Edit `tailwind.config.ts` and `app/globals.css` to customize:
- Terminal green color (`--terminal-green`)
- Background color (`--terminal-bg`)
- Font sizes and weights

### Add Resume

Replace `public/resume9.pdf` with your own resume file.

## 🔧 Configuration

### GitHub Integration

The portfolio automatically fetches repositories from the GitHub username specified in `data.json`. To change:

1. Update the `github` URL in `data.json`
2. The username is extracted from the URL in `components/Terminal.tsx`

### Contact Form Integration

To integrate with Vercel or Netlify forms:

1. **Vercel**: Add form action to `/api/contact` endpoint
2. **Netlify**: Add `data-netlify="true"` attribute to form

## 📦 Build & Deploy

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Netlify

\`\`\`bash
npm run build
# Deploy the .next folder
\`\`\`

## ♿ Accessibility Features

- **Keyboard Navigation** - Full keyboard support for terminal input
- **Reduced Motion** - Respects `prefers-reduced-motion` media query
- **ARIA Labels** - Semantic HTML and proper ARIA attributes
- **Focus Management** - Clear focus indicators and logical tab order
- **Screen Reader Support** - Descriptive labels for all interactive elements

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📄 License

MIT License - Feel free to use this portfolio template for your own projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Muthu Harish T**
- Email: harish040120@gmail.com
- GitHub: [@harish040120](https://github.com/harish040120)
- LinkedIn: [harish040120](https://linkedin.com/in/harish040120)

## 🌟 Acknowledgments

- Inspired by classic terminal interfaces
- Starfield effect inspired by space-themed websites
- Built with modern web technologies

---

**Note**: This portfolio uses lightweight assets and minimal external libraries to ensure fast loading times and optimal performance.
