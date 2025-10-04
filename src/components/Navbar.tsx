import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { createElement } from 'react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return createElement(
    'nav',
    { className: 'navbar' },
    createElement(
      'div',
      { className: 'navbar-container' },
      createElement(
        'div',
        { className: 'nav-brand' },
        createElement('span', { className: 'brand-icon' }, '🏠'),
        createElement('span', { className: 'brand-text' }, 'HomeLink')
      ),
      createElement(
        'div',
        { className: 'nav-links' },
        createElement(
          Link,
          { to: '/profile', className: isActive('/profile') },
          createElement('span', { className: 'link-icon' }, '👤'),
          createElement('span', { className: 'link-text' }, 'Profile')
        ),
        createElement(
          Link,
          { to: '/my-communities', className: isActive('/my-communities') },
          createElement('span', { className: 'link-icon' }, '👥'),
          createElement('span', { className: 'link-text' }, 'My Communities')
        ),
        createElement(
          Link,
          { to: '/explore', className: isActive('/explore') },
          createElement('span', { className: 'link-icon' }, '🔍'),
          createElement('span', { className: 'link-text' }, 'Explore')
        )
      ),
      createElement(
        'div',
        { className: 'nav-user' },
        createElement('div', { className: 'user-avatar' }, 'JD')
      )
    )
  );
};

export default Navbar;