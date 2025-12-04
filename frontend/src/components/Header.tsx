function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-circle">CO₂</div>
        <div>
          <h1 className="site-title">Global CO₂ Transparency</h1>
          <p className="site-subtitle">Fiktive NGO zur Visualisierung von Emissionen</p>
        </div>
      </div>

      <nav className="global-nav">
        <a href="#overview">Übersicht</a>
        <a href="#data">Daten</a>
        <a href="#legal">Rechtliches</a>
      </nav>
    </header>
  );
}

export default Header;
