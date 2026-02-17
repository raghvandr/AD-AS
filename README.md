# SafeRoad AI - Emergency Response System

A modern mobile-first web application for AI-powered road accident detection and emergency response, built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **AI-Powered Detection**: Real-time accident detection with intelligent alerts
- **Emergency SOS**: Large, prominent emergency button for quick response
- **Emergency Contacts**: Manage and quickly contact emergency responders
- **Location Tracking**: Real-time GPS tracking for emergency responders
- **Multi-Language Support**: Support for 22 Indian languages
- **Responsive Design**: Fully responsive mobile-first design
- **Real-Time Status**: Live system status monitoring (AI detection, GPS, microphone, internet)
- **Emergency Alerts**: Comprehensive alert system with countdown timer and multiple response options

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19.2
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Authentication**: Mock OTP system
- **State Management**: React Context + Hooks

## Getting Started

### Prerequisites
- Node.js 18+ and npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raghvandr/AD-AS.git
cd AD-AS
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout
│   ├── providers.tsx        # Context providers
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Splash screen
│   ├── login/page.tsx       # Login/signup
│   ├── dashboard/page.tsx   # Main dashboard
│   ├── contacts/page.tsx    # Emergency contacts
│   ├── alert/page.tsx       # Emergency alert
│   └── settings/page.tsx    # Settings
├── components/
│   ├── navigation.tsx       # Bottom navigation
│   ├── emergency-button.tsx # SOS button
│   ├── status-indicator.tsx # Status cards
│   └── contact-card.tsx     # Contact display
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## Screens

### Splash Screen
- App introduction with key features
- Call-to-action for getting started

### Login Screen
- OTP-based authentication
- Phone number verification

### Dashboard
- System status indicators
- Large SOS emergency button
- Quick access to contacts and settings

### Emergency Alert
- Real-time location display
- Countdown timer
- Multiple emergency response options

### Emergency Contacts
- Add/edit/delete emergency contacts
- Relationship tracking

### Settings
- AI detection sensitivity adjustment
- Language selection
- Notification preferences
- Video call support toggle

## Design System

### Color Scheme
- **Background**: #000000 (Black)
- **Foreground**: #FFFFFF (White)
- **Card**: #1F2937 (Dark Gray)
- **Emergency**: #EF4444 (Red)
- **Safe**: #22C55E (Green)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License

## Support

For issues and feature requests, please open an issue on GitHub.
