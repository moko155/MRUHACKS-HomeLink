import { createElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MyCommunities from './pages/MyCommunities';
import Explore from './pages/Explore';
import './App.css';

function App() {
  return createElement(
    BrowserRouter,
    null,
    createElement(
      'div',
      { className: 'app' },
      createElement(Navbar),
      createElement(
        'main',
        { className: 'main-content' },
        createElement(
          Routes,
          null,
          createElement(Route, {
            path: '/',
            element: createElement(Navigate, { to: '/profile', replace: true })
          }),
          createElement(Route, {
            path: '/profile',
            element: createElement(Profile)
          }),
          createElement(Route, {
            path: '/my-communities',
            element: createElement(MyCommunities)
          }),
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