// import { StrictMode, createElement } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   createElement(
//     StrictMode,
//     null,
//     createElement(App)
//   )
// )
import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entry Point of the Application
 *
 * This file initializes and renders the React application
 * into the HTML page. It uses React 18's createRoot API for
 * concurrent rendering capabilities.
 *
 * Key Concepts:
 *  - StrictMode: Helps detect potential problems in the application.
 *  - createRoot: Creates a root container for React rendering.
 *  - App: The main React component that contains all pages and routing.
 */

// Get the root DOM element where the app will be mounted
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a <div id="root"></div> in index.html');
}

// Create a React root container using the root DOM element
const root = createRoot(rootElement);

// Render the App component wrapped in StrictMode
root.render(
  createElement(
    StrictMode, // Enables additional checks and warnings in development
    null,
    createElement(App) // Render the main App component
  )
);