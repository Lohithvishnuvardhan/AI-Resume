# AI Resume Builder - Professional Resume Creation Tool

A modern, AI-powered resume builder with 50+ premium templates, ATS optimization, and real-time preview. Built with React, TypeScript, and Tailwind CSS.

## Features

### Core Features
- **50+ Premium Templates** - Professional, modern, and ATS-optimized designs
- **AI-Powered Resume Generation** - Create resumes from job descriptions
- **Live Preview** - Real-time resume preview as you type
- **ATS Checker** - Analyze and optimize resumes for Applicant Tracking Systems
- **Health Scorer** - Get actionable feedback to improve your resume
- **AI Auto-Fix** - Automatically improve weak sections
- **Cover Letter Builder** - Generate matching cover letters
- **PDF Export** - High-quality PDF downloads
- **Dark Mode** - Eye-friendly dark theme support
- **Responsive Design** - Works perfectly on all devices

### Additional Features
- Resume Upload & Parse (PDF)
- Multiple export formats
- Template preview with carousel
- Onboarding tour for new users
- Help panel with guides
- Trust badges and testimonials
- Countdown timer for promotions

## Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful icon set
- **html2pdf.js** - PDF generation
- **pdf.js** - PDF parsing

## Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Clone or extract the files**
```bash
cd ai-resume-builder
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Supabase Integration

Follow these steps exactly to connect the app to your Supabase project:

1. **Create tables inside Supabase**
   - Open Supabase → SQL Editor.
   - Paste the contents of `backend/supabase/schema.sql`.
   - Run the script once to create tables and seed the demo admin user.

2. **Add environment variables**
   - In the project root, create a `.env` file (ignored by Git).
   - Add the following lines using the values from Supabase → Project Settings → API:
     ```
     VITE_SUPABASE_URL=your-project-url
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```

3. **Install the Supabase client**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```
   - Open the browser and use the “Login / Sign up” button (top right).
   - Register normally for user accounts; tick “Register as admin” for admin demos.

5. **Verify admin UI**
   - After logging in as admin, the “Admin Demo Tools” card appears in the builder view.
   - Logging out hides admin-only content.

Keep future migrations or seed data inside `backend/supabase/` so your database setup stays in sync.

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── AIAutoFix.tsx
│   │   ├── AIResumeGenerator.tsx
│   │   ├── ATSChecker.tsx
│   │   ├── CoverLetterBuilder.tsx
│   │   ├── EditableResumeForm.tsx
│   │   ├── HealthScorer.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LivePreview.tsx
│   │   ├── TemplateCarousel.tsx
│   │   └── ... (more components)
│   ├── pages/               # Page components
│   │   ├── Documentation.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── ... (more pages)
│   ├── App.tsx              # Main app component
│   ├── Router.tsx           # Client-side routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── dist/                    # Production build
└── package.json             # Dependencies
```

## Customization

### Changing Colors
Edit `src/index.css` to modify the color scheme:
```css
/* Update gradient colors */
.bg-gradient-to-r { ... }
```

### Adding Templates
Add new templates in the `templates` array in `src/components/TemplateCarousel.tsx`

### Modifying Features
Each feature is a separate component in `src/components/`. Edit the component files to customize functionality.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

### Template License
This is a commercial template. By purchasing, you receive:

**Single License:**
- Use in one project (personal or client)
- Modify and customize the code
- Create end products for yourself or one client

**Extended License:**
- Use in multiple projects
- Create SaaS applications
- Resell as part of your service

**Not Allowed:**
- Reselling or redistributing the source code
- Creating competing template products
- Sharing with others who haven't purchased

## Support

For support, please contact the template author through the marketplace where you purchased this template.

## SEO Features

This application includes comprehensive SEO optimization:

- **Meta Tags**: Complete set of meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema for rich snippets
- **Sitemap**: XML sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Responsive**: Mobile-first design for better rankings
- **Performance**: Fast loading times with Vite

### SEO Best Practices Implemented

1. **Semantic HTML**: Proper heading hierarchy (H1-H6)
2. **Alt Text**: All images have descriptive alt attributes
3. **Loading Speed**: Optimized bundle size and lazy loading
4. **Mobile Responsive**: Perfect mobile experience
5. **Clean URLs**: User-friendly URL structure

## Deployment

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

### Deploy to any hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your web server
3. Configure server to handle client-side routing
4. Enable HTTPS/SSL

### Post-Deployment SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph tags with Facebook Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Check mobile-friendliness with Google Mobile-Friendly Test
- [ ] Run Lighthouse audit for performance and SEO
- [ ] Update canonical URLs to match your domain
- [ ] Set up Google Analytics (optional)
- [ ] Enable HTTPS and set up redirects from HTTP

## Updates

Check the marketplace where you purchased this template for updates and new features.

## Credits

- Icons: [Lucide Icons](https://lucide.dev)
- Fonts: System fonts for optimal performance
- PDF Generation: html2pdf.js

---

**Version:** 1.0.0
**Last Updated:** 2025

For questions about using this template in a SaaS application, please refer to the Extended License terms.
