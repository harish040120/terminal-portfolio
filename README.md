# Terminal Portfolio

A modern, interactive portfolio website featuring a **Dark Space Terminal** theme with animated starfield background and terminal-style command interface.

![Portfolio Demo](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)

## ✨ Features

- 🌌 **Animated Starfield Background** - Mesmerizing canvas-based particle system
- 💻 **Interactive Terminal Interface** - Type commands to navigate portfolio
- ⌨️ **Typed Welcome Animation** - Smooth text typing effect with Framer Motion
- 🎯 **Command System** - Navigate using terminal commands (`help`, `about`, `projects`, etc.)
- 🔗 **GitHub Integration** - Automatically fetches latest repositories
- 🎨 **Green Terminal Aesthetic** - Small monospace font (0.85rem, bold) in terminal green (#00ff41)
- ♿ **Fully Accessible** - Keyboard navigation, ARIA labels, respects `prefers-reduced-motion`
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harish040120/terminal-portfolio.git
cd terminal-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Terminal Commands

Type these commands in the terminal interface:

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Show personal information, achievements, and patents |
| `projects` | View featured projects and GitHub repositories |
| `skills` | List technical skills and certifications |
| `education` | Display educational background |
| `resume` | Download resume PDF |
| `contact` | Get contact information and send message |
| `clear` | Clear the terminal screen |

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[React 18](https://react.dev/)** - UI library

## 🎨 Customization

### Update Personal Information

Edit `lib/data.json` to update your:
- Personal details (name, email, phone, social links)
- Projects and descriptions
- Skills and technologies
- Education history
- Achievements and certifications
- Patents

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    ...
  },
  ...
}
```

### Replace Resume

Replace `public/resume9.pdf` with your own resume file.

### Modify Theme Colors

Edit `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --terminal-green: #00ff41;  /* Main terminal color */
  --terminal-dim: #00cc33;    /* Dimmed terminal color */
  --terminal-bg: #0a0e14;     /* Background color */
}
```

### Change Font Size

Update in `app/globals.css`:

```css
body {
  font-size: 0.85rem;  /* Adjust terminal text size */
  font-weight: bold;
}
```

## 📂 Project Structure

```
terminal-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Starfield.tsx        # Animated starfield background
│   ├── Terminal.tsx         # Main terminal interface
│   └── TypedIntro.tsx       # Typing animation component
├── lib/
│   └── data.json            # Portfolio data
├── public/
│   └── resume9.pdf          # Resume file
├── .github/
│   └── workflows/
│       └── ci.yml           # CI/CD workflow
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harish040120/terminal-portfolio)

Or manually:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Environment Variables

Create `.env.local` for custom configuration:

```bash
# Optional: GitHub Personal Access Token for higher API rate limits
GITHUB_TOKEN=your_github_token

# Optional: Contact form email
CONTACT_EMAIL=your-email@example.com
```

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ **Keyboard Navigation** - Full keyboard support for all interactions
- ✅ **Screen Reader Support** - Semantic HTML and ARIA labels
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion` media query
- ✅ **Focus Management** - Clear focus indicators and logical tab order
- ✅ **Color Contrast** - High contrast terminal green on dark background

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🔧 GitHub API Integration

The portfolio automatically fetches your latest GitHub repositories. The username is extracted from the GitHub URL in `lib/data.json`.

To modify which repos are displayed, edit `components/Terminal.tsx`:

```typescript
fetch(`https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=3`)
```

## 📄 License

MIT License - Feel free to use this portfolio template for your own projects.

## 👤 Author

**Muthu Harish T**

- 📧 Email: harish040120@gmail.com
- 💼 LinkedIn: [@harish040120](https://linkedin.com/in/harish040120)
- 🐙 GitHub: [@harish040120](https://github.com/harish040120)

## 🌟 Acknowledgments

- Inspired by classic terminal interfaces
- Starfield effect inspired by space-themed websites
- Built with modern web technologies for optimal performance

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Contact Form Integration

The contact form is a stub ready for integration:

### For Vercel
Add a serverless function at `pages/api/contact.ts`

### For Netlify
Add `data-netlify="true"` attribute to the form in `components/Terminal.tsx`

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**

**⭐ Star this repo if you find it useful!**
