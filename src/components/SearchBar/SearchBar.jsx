import { searchData } from '../../data/siteData';
import './SearchBar.css';

function SearchBar() {
  const handleSubmit = (event) => {
    // No search backend in this build — prevent a real page navigation
    // so the console and URL stay clean.
    event.preventDefault();
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <span className="search-bar__icon" aria-hidden="true">
        🔍
      </span>
      <input
        className="search-bar__input"
        type="text"
        placeholder={searchData.placeholder}
        aria-label="Search events"
      />
      <span className="search-bar__divider" aria-hidden="true" />
      <span className="search-bar__location-icon" aria-hidden="true">
        📍
      </span>
      <input
        className="search-bar__location"
        type="text"
        defaultValue={searchData.location}
        aria-label="Location"
      />
      <button className="search-bar__submit" type="submit" aria-label="Search">
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
