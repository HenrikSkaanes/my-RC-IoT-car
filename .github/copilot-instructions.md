<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# RC Car Control Dashboard - Copilot Instructions

This is a modern React + Vite application for controlling and monitoring an RC car system with tactical/military styling.

## Project Structure
- **Components**: Located in `/src/components/` - modular, reusable UI components
- **Hooks**: Located in `/src/hooks/` - custom React hooks for state management
- **Styles**: Located in `/src/styles/` - global styles and CSS variables

## Key Technologies
- **Frontend**: React 18 + Vite
- **Mapping**: Leaflet.js for GPS tracking display
- **Styling**: CSS modules with military/tactical theme
- **State Management**: React hooks (useState, useEffect, custom hooks)

## Design Principles
- **Dark Theme**: Military-inspired green on dark backgrounds
- **Responsive**: Mobile-first design approach
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Modular**: Component-based architecture for maintainability

## Color Scheme
- Primary Green: `#00ff41`
- Dark Green: `#004d14`
- Background: `#0a0f0a`
- Secondary BG: `#1a2f1a`
- Accent Orange: `#ff6b35`
- Accent Red: `#ff3333`

## Features Implemented
- ✅ WASD keyboard controls with visual feedback
- ✅ Camera feeds with rainbow placeholders
- ✅ GPS mapping with dark theme
- ✅ Toggle buttons for lighting controls
- ✅ Responsive military-style dashboard
- ✅ Real-time key press visualization

## Future Backend Integration Points
- Camera stream URLs for live video feeds
- WebSocket connections for real-time RC car control
- Azure IoT Hub integration for telemetry
- GPS coordinate updates from actual hardware

## Code Style Guidelines
- Use functional components with hooks
- Keep components small and focused
- Use CSS custom properties for theming
- Follow camelCase for JavaScript, kebab-case for CSS
- Include proper PropTypes or TypeScript interfaces
- Write accessible, semantic HTML
