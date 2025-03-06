# Fragment42 Portfolio Website

A cutting-edge portfolio website for Fragment42 web design studio, built with Next.js, Framer Motion, and Tailwind CSS. This website showcases the studio's work, skills, and services with modern design elements and smooth animations.

## Features

- **Dynamic, Animated Hero Section**: Introduces Fragment42 with engaging animations
- **About Me Section**: Highlights 4+ years of experience and educational background
- **Portfolio Showcase**: Features 6 projects with filtering capabilities
- **Skills Section**: Interactive visualization of technical proficiencies
- **Services Overview**: Detailed presentation of services offered
- **Contact Form**: Integrated with EmailJS for form submission
- **Dark/Light Mode Toggle**: Enhanced user experience with theme options
- **Responsive Design**: Optimal viewing on all devices
- **Smooth Scrolling**: Engaging navigation throughout the site
- **Micro-interactions**: Subtle animations for enhanced user experience
- **Accessibility Features**: Inclusive design for all users

## Tech Stack

- **Next.js**: For server-side rendering and static site generation
- **React**: Core library for building UI components
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For animations and transitions
- **GSAP**: For advanced animations
- **EmailJS**: For contact form functionality
- **React Icons**: For a wide variety of icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
  - `layout`: Layout components like Header and Footer
  - `sections`: Main section components for the homepage
  - `ui`: Reusable UI components
- `src/lib`: Utility functions
- `src/styles`: Global styles and CSS modules
- `public`: Static assets like images

## Customization

To customize the portfolio for your own use:

1. Replace the placeholder images in the `public/projects` directory with your own project images
2. Update the project data in `src/components/sections/PortfolioSection.tsx`
3. Modify the content in each section component to reflect your own information
4. Update the contact form in `src/components/sections/ContactSection.tsx` with your own EmailJS credentials

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation for the modern web
