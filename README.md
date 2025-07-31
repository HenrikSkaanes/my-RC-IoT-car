# 🚗 RC Car Control Dashboard

A modern, **Apple-inspired** web application built with **React + Vite** for controlling and monitoring an RC car system. Features Apple's **Liquid Glass design language** with glassmorphism effects, smooth animations, and a premium user experience.

![Apple Design](https://img.shields.io/badge/Design-Apple%20Liquid%20Glass-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

## ✨ Design Features

### 🎨 **Apple Liquid Glass Aesthetic**
- **Glassmorphism Effects**: Backdrop blur and translucent panels
- **Smooth Animations**: 60fps transitions with cubic-bezier easing
- **System Fonts**: SF Pro Display and SF Mono for authentic Apple feel
- **Color Palette**: Apple's blue (#007AFF), purple (#5856D6), and teal (#5AC8FA)
- **Premium Shadows**: Layered shadows for depth and elevation

### 📐 **Optimized Layout**
- **Main Camera**: Full-screen primary view for RC car perspective
- **Secondary Camera**: Picture-in-picture rear view (top-right overlay)
- **GPS Module**: Horizontal rectangular map in bottom-left corner
- **Control Panel**: Right sidebar with touch-optimized buttons

## 🎯 Interactive Features

### 🕹️ **Precision Controls**
- **WASD Movement**: Smooth vehicle control with visual feedback
- **Camera Positioning**: Q/E keys for camera tilt control
- **Lighting System**: Toggle headlights and hazard lights
- **Multi-input Support**: Keyboard, mouse, and touch controls

### 📹 **Dual Camera System**
- **Main View**: Large primary camera feed
- **Rear Camera**: Secondary overlay view
- **Status Indicators**: Live connection status for each feed
- **Rainbow Placeholders**: Animated gradients when streams unavailable

### 🗺️ **Enhanced GPS Tracking**
- **Fixed Layout Issues**: No more white areas or map bugs
- **Optimized Tiles**: High-quality dark theme mapping
- **Real-time Marker**: Animated GPS position with pulse effect
- **Coordinate Display**: Live latitude/longitude readout
- **Signal Visualization**: GPS signal strength indicator

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** 
- **npm or yarn**

### Installation & Launch
```bash
# Navigate to project directory
cd my-RC-IoT-car

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**🌐 Live Development**: `http://localhost:5174`

## 🏗️ Project Architecture

```
src/
├── components/          # Reusable UI components
│   ├── CameraFeed.jsx   # Video stream with Apple design
│   ├── ControlPanel.jsx # Touch-optimized controls
│   └── MapDisplay.jsx   # Fixed GPS component
├── hooks/               # Custom React hooks
│   └── useKeyboardControls.js # Input management
├── styles/              # Apple-inspired styling
│   └── globals.css      # Liquid Glass variables
├── App.jsx             # Main application layout
└── main.jsx            # Application entry point
```

## 🎮 Control Reference

| Key | Function | Visual Feedback |
|-----|----------|-----------------|
| `W` | Drive Forward | Blue press animation |
| `S` | Drive Backward | Blue press animation |
| `A` | Turn Left | Blue press animation |
| `D` | Turn Right | Blue press animation |
| `Q` | Camera Tilt Up | Blue press animation |
| `E` | Camera Tilt Down | Blue press animation |
| `1` | Toggle Headlights | Green glow when active |
| `2` | Toggle Hazard Lights | Green glow when active |

## 🎨 Apple Design System

### Color Palette
```css
/* Primary Colors */
--primary-blue: #007AFF;     /* Apple Blue */
--primary-purple: #5856D6;   /* Apple Purple */
--primary-teal: #5AC8FA;     /* Apple Teal */
--accent-green: #34C759;     /* Apple Green */
--accent-orange: #FF9500;    /* Apple Orange */
--accent-red: #FF3B30;       /* Apple Red */

/* Glass Effects */
--bg-glass: rgba(255, 255, 255, 0.08);
--blur-medium: blur(12px);
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.3);
```

### Typography
- **Primary**: SF Pro Display (system fallbacks)
- **Monospace**: SF Mono (coordinate displays)
- **Weights**: 300, 400, 500, 600, 700

## 🔧 Technical Specifications

### Built With
- **React 18** - Latest hooks and Suspense features
- **Vite** - Lightning-fast HMR and optimized builds
- **Leaflet.js** - Interactive maps with proper tile loading
- **CSS3** - Native backdrop-filter and modern properties

### Performance Optimizations
- **Canvas Rendering**: Preferred for map performance
- **Proper Tile Loading**: Eliminates white map areas
- **Optimized Images**: Lazy loading and proper sizing
- **Minimal Bundle**: Tree-shaking for reduced file sizes

### Browser Compatibility
- **Chrome/Edge 90+** (Full backdrop-filter support)
- **Firefox 103+** (backdrop-filter enabled)
- **Safari 14+** (Native backdrop-filter)
- **Mobile browsers** (iOS 14+, Android Chrome 90+)

## 🐛 Fixed Issues

### ✅ **Map Component Fixes**
- **No more white areas**: Proper tile layer configuration
- **Responsive sizing**: Map fills container correctly
- **Horizontal layout**: GPS positioned as requested rectangle
- **Performance**: Canvas rendering for smooth interactions

### ✅ **Layout Improvements**
- **Proper positioning**: GPS in bottom-left corner
- **Overlay cameras**: Secondary camera doesn't block main view
- **Responsive design**: Works on all screen sizes
- **Touch optimization**: Mobile-friendly controls

## 📱 Responsive Breakpoints

### Desktop (1200px+)
- Two-column layout with sidebar controls
- GPS overlay in bottom-left
- Secondary camera in top-right

### Tablet (768-1200px)
- Stacked layout with preserved functionality
- Touch-optimized button sizes
- Adaptive spacing and typography

### Mobile (480-768px)
- Single-column vertical layout
- Large touch targets
- Optimized for portrait orientation

### Small Mobile (<480px)
- Compact controls and spacing
- Essential features prioritized
- Optimized for one-handed use

## 🔮 Ready for Backend Integration

### Connection Points
```javascript
// Camera streams
const streamUrl = "rtsp://192.168.1.100:554/stream";

// WebSocket control
const ws = new WebSocket("wss://api.example.com/rc-car");

// Azure IoT Hub
const connectionString = "HostName=...";

// GPS updates
const gpsCoordinates = { lat: 59.8745, lng: 10.6589 };
```

### API Integration Points
- **Real-time Controls**: WebSocket for WASD commands
- **Camera Feeds**: RTSP/WebRTC stream URLs
- **GPS Tracking**: Live coordinate updates
- **Telemetry**: Battery, speed, sensor data
- **Authentication**: Secure access control

## 🚀 Deployment Ready

### Production Build
```bash
npm run build
# Creates optimized ./dist folder

npm run preview
# Test production build locally
```

### Hosting Recommendations
- **Vercel** - Zero-config deployment
- **Netlify** - Static hosting with edge functions
- **GitHub Pages** - Free hosting for open source
- **AWS S3 + CloudFront** - Enterprise-grade CDN

## 📄 License

This project is open-source and available under the **MIT License**.

---

**🎉 Apple-Quality RC Car Control** - Experience the perfect blend of functionality and beautiful design, ready for your RC car adventures!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
