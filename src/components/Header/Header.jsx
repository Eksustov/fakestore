import './Header.css'
import SearchBar from "../../components/SearchBar/SearchBar.jsx"

function Header({ onSearch }) {

  return (
    <>
        <div className="header-containter">
            <img src="../src/assets/fakestore-logo.png"/>
            <div>
                <h1 className="header-text">FakeStore</h1>
                <p className="header-undertext">Lidojošā paparde</p>
            </div>
            <div className="header-search">
              <SearchBar onSearch={onSearch} />
            </div>
        </div>
    </>
  )
}

export default Header
