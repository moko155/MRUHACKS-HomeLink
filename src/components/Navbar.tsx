// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import { createElement } from 'react';

// const Navbar = () => {
//   const location = useLocation();

//   const isActive = (path: string) => {
//     return location.pathname === path ? 'nav-link active' : 'nav-link';
//   };

//   return createElement(
//     'nav',
//     { className: 'navbar' },
//     createElement(
//       'div',
//       { className: 'navbar-container' },
//       createElement(
//         'div',
//         { className: 'nav-brand' },
//         createElement('span', { className: 'brand-icon' }, '🏠'),
//         createElement('span', { className: 'brand-text' }, 'HomeLink')
//       ),
//       createElement(
//         'div',
//         { className: 'nav-links' },
//         createElement(
//           Link,
//           { to: '/profile', className: isActive('/profile') },
//           createElement('span', { className: 'link-icon' }, '👤'),
//           createElement('span', { className: 'link-text' }, 'Profile')
//         ),
//         createElement(
//           Link,
//           { to: '/my-communities', className: isActive('/my-communities') },
//           createElement('span', { className: 'link-icon' }, '👥'),
//           createElement('span', { className: 'link-text' }, 'My Communities')
//         ),
//         createElement(
//           Link,
//           { to: '/explore', className: isActive('/explore') },
//           createElement('span', { className: 'link-icon' }, '🔍'),
//           createElement('span', { className: 'link-text' }, 'Explore')
//         )
//       ),
//       createElement(
//         'div',
//         { className: 'nav-user' },
//         createElement('div', { className: 'user-avatar' }, 'JD')
//       )
//     )
//   );
// };

// export default Navbar;

/**
 * Navbar.tsx
 * 
 * This component renders the top navigation bar for the HomeLink application.
 * It provides quick access to main pages such as Profile, My Communities, and Explore.
 * The active route is highlighted for better navigation clarity.
 */

import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { createElement } from 'react';

const Navbar = () => {
  // Access the current location path from React Router
  const location = useLocation();

  /**
   * Determines whether a navigation link should appear as active
   * based on the current URL path.
   * 
   * @param path - The route path to compare (e.g. '/profile')
   * @returns A CSS class string: 'nav-link active' if active, otherwise 'nav-link'
   */
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  // Render the navigation bar structure using createElement
  return createElement(
    'nav',
    { className: 'navbar' },
    createElement(
      'div',
      { className: 'navbar-container' },

      // Brand section (logo and app name)
      createElement(
        'div',
        { className: 'nav-brand' },
        createElement('span', { className: 'brand-icon' }, '🏠'), // Home icon
        createElement('span', { className: 'brand-text' }, 'HomeLink') // App name
      ),

      // Navigation links section
      createElement(
        'div',
        { className: 'nav-links' },

        // Profile link
        createElement(
          Link,
          { to: '/profile', className: isActive('/profile') },
          createElement('span', { className: 'link-icon' }, '👤'),
          createElement('span', { className: 'link-text' }, 'Profile')
        ),

        // My Communities link
        createElement(
          Link,
          { to: '/my-communities', className: isActive('/my-communities') },
          createElement('span', { className: 'link-icon' }, '👥'),
          createElement('span', { className: 'link-text' }, 'My Communities')
        ),

        // Explore link
        createElement(
          Link,
          { to: '/explore', className: isActive('/explore') },
          createElement('span', { className: 'link-icon' }, '🔍'),
          createElement('span', { className: 'link-text' }, 'Explore')
        )
      ),

      // User avatar section
      createElement(
        'div',
        { className: 'nav-user' },
        createElement('div', { className: 'user-avatar' }, 'JD') // Placeholder for user initials
      )
    )
  );
};

export default Navbar;
