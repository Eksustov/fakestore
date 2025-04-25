import './SearchBar.css'

function SearchBar({ onSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;