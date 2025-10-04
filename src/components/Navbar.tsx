import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          <span className="brand-icon">🏠</span>
          <span className="brand-text">HomeLink</span>
        </div>

        <div className="nav-links">
          <Link to="/profile" className={isActive('/profile')}>
            <span className="link-icon">👤</span>
            <span className="link-text">Profile</span>
          </Link>

          <Link to="/my-communities" className={isActive('/my-communities')}>
            <span className="link-icon">👥</span>
            <span className="link-text">My Communities</span>
          </Link>

          <Link to="/explore" className={isActive('/explore')}>
            <span className="link-icon">🔍</span>
            <span className="link-text">Explore</span>
          </Link>
        </div>

        <div className="nav-user">
          <div className="user-avatar">JD</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;