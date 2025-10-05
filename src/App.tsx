// import { createElement } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Profile from './pages/Profile';
// import MyCommunities from './pages/MyCommunities';
// import Explore from './pages/Explore';
// import './App.css';

// function App() {
//   return createElement(
//     BrowserRouter,
//     null,
//     createElement(
//       'div',
//       { className: 'app' },
//       createElement(Navbar),
//       createElement(
//         'main',
//         { className: 'main-content' },
//         createElement(
//           Routes,
//           null,
//           createElement(Route, {
//             path: '/',
//             element: createElement(Navigate, { to: '/profile', replace: true })
//           }),
//           createElement(Route, {
//             path: '/profile',
//             element: createElement(Profile)
//           }),
//           createElement(Route, {
//             path: '/my-communities',
//             element: createElement(MyCommunities)
//           }),
//           createElement(Route, {
//             path: '/explore',
//             element: createElement(Explore)
//           })
//         )
//       )
//     )
//   );
// }

// export default App;

import { createElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MyCommunities from './pages/MyCommunities';
import Explore from './pages/Explore';
import './App.css';

/**
 * App Component
 *
 * This is the main entry point of the application.
 * It sets up the navigation structure using React Router
 * and includes the global layout shared across all pages (Navbar + content area).
 *
 * The app consists of three main pages:
 *  - Profile: Displays the user’s profile and customizable house visualization.
 *  - My Communities: Shows the user’s joined communities.
 *  - Explore: Allows users to browse and join new communities.
 *
 * The application uses `createElement` instead of JSX for a functional,
 * element-based React structure.
 */

function App() {
  return createElement(
    // ---------- BrowserRouter wraps the entire app ----------
    // It enables client-side routing without full page reloads.
    BrowserRouter,
    null,

    // ---------- Application Container ----------
    createElement(
      'div',
      { className: 'app' },

      // ---------- Persistent Navigation Bar ----------
      // The Navbar component appears on all pages and provides quick navigation links.
      createElement(Navbar),

      // ---------- Main Content Area ----------
      createElement(
        'main',
        { className: 'main-content' },

        // ---------- Route Definitions ----------
        createElement(
          Routes,
          null,

          // Redirects root path '/' to '/profile' by default
          createElement(Route, {
            path: '/',
            element: createElement(Navigate, { to: '/profile', replace: true })
          }),

          // Route for the user profile page
          createElement(Route, {
            path: '/profile',
            element: createElement(Profile)
          }),

          // Route for viewing the user's joined communities
          createElement(Route, {
            path: '/my-communities',
            element: createElement(MyCommunities)
          }),

          // Route for exploring new communities
          createElement(Route, {
            path: '/explore',
            element: createElement(Explore)
          })
        )
      )
    )
  );
}

export default App;
