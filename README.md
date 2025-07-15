<<<<<<< HEAD
# Peerspace Clone

A modern, responsive clone of the Peerspace website built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Space Discovery**: Browse and search for unique venues and event spaces
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- 🎨 **Modern UI**: Clean, modern interface with smooth animations
- 🔍 **Search Functionality**: Advanced search with location, date, and capacity filters
- ⭐ **Rating System**: Display space ratings and reviews
- 💳 **Booking System**: Space booking interface (UI only)
- 📧 **Contact Forms**: Newsletter subscription and contact forms

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd peerspace-clone
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
peerspace-clone/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with search
│   ├── SpaceCard.tsx        # Individual space card component
│   ├── FeaturedSpaces.tsx   # Featured spaces section
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── README.md               # Project documentation
```

## Key Components

### Header
- Responsive navigation with mobile menu
- Search functionality
- User authentication buttons

### Hero Section
- Compelling headline and description
- Advanced search form with location, date, and capacity filters
- Popular search tags

### Featured Spaces
- Grid layout of featured venues
- Space cards with images, pricing, and ratings
- Hover effects and animations

### Space Cards
- Responsive design with aspect ratio images
- Rating and review display
- Pricing information
- Category tags

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
- Update space data in `components/FeaturedSpaces.tsx`
- Modify navigation links in `components/Header.tsx`
- Customize footer links in `components/Footer.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes only. Peerspace is a registered trademark of its respective owners.

## Acknowledgments

- Design inspired by [Peerspace](https://www.peerspace.com/)
- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide React](https://lucide.dev/) 
=======
# SpaceHive
A website to book workshop/meeting rooms or an event for short-term use.
>>>>>>> 9394fb355a58753c2e6e35212d53a413d42f28a3
