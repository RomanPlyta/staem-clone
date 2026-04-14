import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">STEAM CLONE</Link>
      </div>
      
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Store</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
