# SB Works Frontend

<p align="center">
  <img src="public/logo192.png" alt="SB Works Logo" width="80" />
</p>

<p align="center">
  <strong>A comprehensive freelancing platform built with React</strong>
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-development-workflow">Development</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-troubleshooting">Troubleshooting</a> •
  <a href="#-contributing">Contributing</a>
</p>

## 📋 Project Overview

SB Works is a modern freelancing platform that connects talented freelancers with clients seeking professional services. The platform facilitates project creation, application management, secure communications, and seamless project collaboration through an intuitive user interface.

This repository contains the frontend codebase, built with React 19 and designed with a focus on performance, scalability, and user experience.

## ✨ Key Features

### User Management

- **Multi-role Authentication**: Secure login and registration system supporting three distinct roles:
  - **Freelancers**: Browse projects, submit applications, manage ongoing work
  - **Clients**: Post projects, review applications, manage hired freelancers
  - **Admins**: Platform oversight, user management, dispute resolution

- **Protected Routes**: Role-based access control ensures users only access authorized sections
- **JWT Authentication**: Secure token-based authentication with automatic token renewal
- **Profile Management**: Comprehensive user profile customization options

### Project Ecosystem

- **Project Marketplace**: Browse, filter, and search available projects
- **Application System**: Apply to projects with proposals and track application status
- **Project Workspace**: Collaborative environment for active projects
- **Rating & Review System**: Build reputation through project completion and feedback

### Communication Tools

- **Real-time Messaging**: Integrated chat system using Socket.IO
- **Notification Center**: Instant alerts for important events and updates
- **File Sharing**: Exchange documents and assets securely

### Payment & Business

- **Secure Payment Processing**: Integration with payment gateways (upcoming)
- **Milestone-based Payments**: Release funds upon work completion
- **Earnings Dashboard**: Track income, expenses, and financial history

## 🏗 Architecture

The SB Works Frontend is built on a modern React architecture with the following key components:

### Core Architectural Elements

1. **Context API for State Management**
   - GeneralContext provides authentication, user data, and global app state
   - Eliminates prop drilling and centralizes state management

2. **React Router v7**
   - Advanced routing with nested routes and route protection
   - Dynamic route parameters for resource-specific pages

3. **Protected Routes System**
   - Role-based authorization ensuring proper access control
   - Automatic redirection to appropriate dashboards based on user role

4. **API Integration Layer**
   - Axios instance with interceptors for auth token management
   - Centralized error handling and response normalization

5. **Real-time Communication**
   - Socket.IO integration for instant messaging and notifications
   - Event-based architecture for real-time updates

## 🛠 Tech Stack

### Core Technologies

- **React**: v19.1.1 - Frontend library for building user interfaces
- **React Router DOM**: v7.8.0 - Declarative routing for React
- **Axios**: v1.11.0 - Promise-based HTTP client for API requests
- **Socket.IO Client**: v4.8.1 - Real-time bidirectional event-based communication
- **React Icons**: v5.5.0 - Popular icon libraries as React components

### Development & Testing

- **React Scripts**: v5.0.1 - Scripts and configuration for React apps
- **Testing Library**: React Testing Library and Jest for component testing
- **React Testing Library**: v16.3.0 - Testing utilities
- **Jest DOM**: v6.6.4 - DOM testing utilities for Jest

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v14.x or higher [Download Node.js](https://nodejs.org/)
- **npm**: v6.x or higher (comes with Node.js)
- **Git**: For version control [Download Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```powershell
   git clone https://github.com/yourusername/sb-works-frontend.git
   cd sb-works-frontend
   ```

2. **Install dependencies**

   ```powershell
   npm install
   ```

3. **Set up environment variables (optional)**

   Create a `.env` file in the root directory with the following variables:

   ```
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

4. **Start the development server**

   ```powershell
   npm start
   ```

5. **Access the application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 🧑‍💻 Development Workflow

### Running the Development Server

The development server includes hot reloading, allowing you to see changes in real-time:

```powershell
npm start
```

### Testing

Run tests with the following command:

```powershell
npm test
```

For more specific test patterns:

```powershell
npm test -- --testPathPattern=components
```

### Code Formatting

We recommend using Prettier for consistent code formatting. Add the Prettier extension to your IDE for automatic formatting on save.

### Browser Compatibility

The application is optimized for modern browsers with the following targets:

- **Production**: >0.2% market share, not dead browsers, not Opera Mini
- **Development**: Latest Chrome, Firefox, and Safari versions

## 📂 Project Structure

```
sb-works-frontend/
├── public/                  # Static files
│   ├── favicon.ico          # App favicon
│   ├── index.html           # HTML template
│   ├── logo192.png          # App logo (small)
│   ├── logo512.png          # App logo (large)
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots file
│
├── src/                     # Source code
│   ├── components/          # Reusable components
│   │   ├── Login.jsx        # Login form component
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Register.jsx     # Registration form component
│   │
│   ├── context/             # React Context providers
│   │   └── GeneralContext.jsx  # Authentication and global state context
│   │
│   ├── pages/               # Page components
│   │   ├── freelancer/      # Freelancer-specific pages
│   │   │   └── Freelancer.jsx  # Freelancer dashboard
│   │   ├── client/          # Client-specific pages (coming soon)
│   │   ├── admin/           # Admin-specific pages (coming soon)
│   │   ├── Authenticate.jsx # Authentication page
│   │   └── Landing.jsx      # Landing page
│   │
│   ├── styles/              # CSS stylesheets
│   │   ├── Auth.css         # Authentication styles
│   │   ├── Dashboard.css    # Dashboard layout styles
│   │   ├── Landing.css      # Landing page styles
│   │   └── Navbar.css       # Navigation styles
│   │
│   ├── App.js               # Main application component
│   ├── App.css              # Main application styles
│   ├── index.js             # Application entry point
│   └── reportWebVitals.js   # Performance measurement
│
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Dependency lock file
└── README.md                # Project documentation
```

## 🔌 Backend Integration

The frontend is designed to work with a dedicated backend API. By default, the application connects to a backend server running at:

- **API Endpoint**: `http://localhost:5000/api`
- **WebSocket Endpoint**: `http://localhost:5000`

These connection points are configurable through environment variables as described in the "Getting Started" section.

### API Authentication

The application uses JWT (JSON Web Tokens) for authentication with the backend:

1. User logs in or registers, receiving a token
2. Token is stored in localStorage
3. Axios interceptors automatically include the token in all API requests
4. The backend validates the token for each protected endpoint

## 📦 Deployment

### Production Build

Create an optimized production build with:

```powershell
npm run build
```

This generates a `build` directory with production-ready assets.

### Deployment Options

#### Option 1: Static Hosting Services

Deploy to services like Netlify, Vercel, or GitHub Pages:

1. Connect your repository to the service
2. Configure build settings: `npm run build`
3. Set environment variables in the hosting platform

#### Option 2: Traditional Web Server

1. Build the project: `npm run build`
2. Transfer the `build` directory to your web server
3. Configure the server to serve `index.html` for all routes

#### Environment Configuration

For production deployments, set the following environment variables:

- `REACT_APP_API_URL`: URL to your production backend API
- `REACT_APP_SOCKET_URL`: URL to your production WebSocket server

## 🔧 Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again
   - Restart the development server

2. **Authentication issues**
   - Check browser localStorage for valid token
   - Verify backend connectivity and token validation
   - Clear browser storage and log in again

3. **WebSocket connection errors**
   - Verify the backend Socket.IO server is running
   - Check for network restrictions (firewalls, proxy settings)
   - Ensure correct Socket.IO server URL in environment variables

4. **Route access problems**
   - Verify user role matches required permissions
   - Check for proper authentication state
   - Inspect route configuration in App.js

### Development Tools

- Use React DevTools extension for component inspection
- Enable Redux DevTools for state management debugging
- Check browser console for errors and warnings

## 🤝 Contributing

We welcome contributions to improve the SB Works Frontend! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure nothing breaks
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Coding Standards

- Follow React best practices and patterns
- Use functional components with hooks
- Maintain consistent styling across components
- Write meaningful component and function names
- Include JSDoc comments for complex functions

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Contact

For questions, feedback, or support, please contact:
- Project Lead: [your-email@example.com](mailto:your-email@example.com)
- Development Team: [dev-team@example.com](mailto:dev-team@example.com)

---

<p align="center">
  Made with ❤️ using React
</p>
