import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menus = () => (
    <Fragment>
      <ul>
        <li className="current">
          <a href="#beranda">Beranda</a>
        </li>
        <li>
          <a href="#hobi">Hobi</a>
        </li>
        <li>
          <a href="#pelajaran">Pelajaran</a>
        </li>
        <li>
          <a href="#sosialmedia">Sosial Media</a>
        </li>
      </ul>
    </Fragment>
  );
  return (
    <Fragment>
      <header className="header desktop-menu">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#beranda">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
            </div>
            {/* Nav */}
            <nav className="nav">{menus()}</nav>
          </div>
        </div>
      </header>
      <header className={`header mobileNav `}>
        <div className={`container ${toggle ? "active" : ""}`}>
          <div className="row justify-content-between align-items-center">
            <div className="brand-name-toggle d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="brand-name">
                <a href="#beranda">
                  <img src="images/logo.png" alt="brand_logo" />
                </a>
              </div>
              {/* Toggle */}
              <div className="toggle" onClick={() => setToggle(!toggle)}>
                <span />
                <span />
                <span />
              </div>
            </div>
            {/* Nav */}
            <nav className="nav" style={{ display: toggle ? "block" : "none" }}>
              {menus()}
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
