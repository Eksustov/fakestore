import './Header.css'

function Header() {

  return (
    <>
        <div className="header-containter">
            <img src="../src/assets/fakestore-logo.png"/>
            <div>
                <h1 className="header-text">FakeStore</h1>
                <p className="header-undertext">Lidojošā paparde</p>
            </div>
        </div>
    </>
  )
}

export default Header
