import SearchBar from '../SearchBar/SearchBar';
import { navLinks } from '../../data/siteData';
import './Navbar.css';

function Navbar({ isAuthenticated, onLoginClick, onSignupClick, onAccountClick }) {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#top" className="navbar__logo" aria-label="Kulan home">
          <span className="navbar__logo-icon">k</span>
          <span className="navbar__logo-text">kulan</span>
        </a>

        <SearchBar />

        <div className="navbar__actions">
          <button
            className="navbar__lang"
            type="button"
            title="Language selection isn't available in this preview"
          >
            <span className="navbar__lang-icon" aria-hidden="true">
              🌐
            </span>
            {navLinks.language}
          </button>
          {isAuthenticated ? (
            <button className="navbar__signup" type="button" onClick={onAccountClick}>
              My account
            </button>
          ) : (
            <>
              <button className="navbar__login" type="button" onClick={onLoginClick}>
                {navLinks.login}
              </button>
              <button className="navbar__signup" type="button" onClick={onSignupClick}>
                {navLinks.signup}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
