import "./SiteHeader.css";

export const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header-container">
      <h1 className="site-header-logo">Cahee</h1>
      <nav className="site-header-nav">
        <ul className="site-header-nav__menu">
          <li className="site-header-nav__menu-item nav__menu-item-active">
            <a className="site-header-nav__menu-a nav__menu--active" href="#">
              Home
            </a>
          </li>
          <li className="site-header-nav__menu-item">
            <a className="site-header-nav__menu-a" href="#about">
              About
            </a>
          </li>
          <li className="site-header-nav__menu-item">
            <a className="site-header-nav__menu-a" href="#services">
              Services
            </a>
          </li>
          <li className="site-header-nav__menu-item">
            <a className="site-header-nav__menu-a" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="site-header-nav__menu-item">
            <a className="site-header-nav__menu-a" href="#blog">
              Blog
            </a>
          </li>
          <li className="site-header-nav__menu-item">
            <a className="site-header-nav__menu-a" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
