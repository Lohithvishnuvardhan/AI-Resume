# AI Resume Builder Website Template

A premium, modern resume builder website template you can sell, customize, or launch as your own SaaS. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Clean Modern UI** - Premium SaaS-style design with glassmorphism and gradients
- **AI-Ready Resume Structure** - Thoughtful sections ready for customization
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Easy to Customize** - Clean React + Tailwind codebase (HTML/CSS/JS friendly)
- **No Backend Required** - Pure front-end template, ready to host
- **PDF & Word Export** - Download resumes in multiple formats
- **Live Preview** - Real-time resume preview as you type
- **Multiple Templates** - Professional resume templates included
- **ATS Optimized** - Resume structure optimized for Applicant Tracking Systems

## 📋 Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

## 🛠️ Installation

1. **Extract the files** to your desired location

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🎨 Customization

### Changing Colors & Styles

Edit `src/index.css` and `tailwind.config.js` to modify colors, fonts, and styling.

### Updating Content

- **Landing Page**: Edit `src/components/LandingPage.tsx`
- **Resume Templates**: Edit `src/components/LivePreview.tsx`
- **Forms**: Edit `src/components/EditableResumeForm.tsx`

### Adding Your Gumroad Link

1. Open `src/components/LandingPage.tsx`
2. Find: `const GUMROAD_URL = 'https://gumroad.com/l/ai-resume-builder-template';`
3. Replace with your actual Gumroad product URL

### Modifying Features

Each feature is a separate component in `src/components/`. Edit the component files to customize functionality.

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🚢 Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add custom domain and SSL

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Deploy automatically
5. Configure custom domain

### Deploy to Any Hosting

1. Run `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure server to handle client-side routing
4. Enable HTTPS/SSL

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── LandingPage.tsx  # Main landing page
│   │   ├── LivePreview.tsx  # Resume preview
│   │   ├── EditableResumeForm.tsx  # Form inputs
│   │   └── ... (more components)
│   ├── pages/               # Page components
│   ├── App.tsx              # Main app component
│   ├── Router.tsx           # Client-side routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files (images, videos, etc.)
├── package.json             # Dependencies
└── README.md               # This file
```

## 🎯 What You Can Do

- ✅ Use in your own projects
- ✅ Customize and modify the code
- ✅ Sell as a service (SaaS)
- ✅ Use for client projects
- ✅ Host on any platform

## ⚠️ License Terms

**What's Allowed:**
- Use in personal or client projects
- Modify and customize the code
- Create end products for yourself or clients
- Sell as a service/SaaS

**Not Allowed:**
- Reselling or redistributing the source code
- Creating competing template products
- Sharing with others who haven't purchased

## 🔧 Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful icon set
- **html2pdf.js** - PDF generation

## 📞 Support

For support, please contact the template author through Gumroad.

## 🎉 Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Customize the code to match your brand
4. Update the Gumroad URL in `LandingPage.tsx`
5. Build and deploy: `npm run build`

---

**Version:** 1.0.0  
**Last Updated:** 2025

Enjoy building with this template! 🚀
