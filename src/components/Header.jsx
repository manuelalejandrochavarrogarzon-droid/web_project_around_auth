import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__section">
      <img
        className="logo header__logo"
        src={logo}
        alt="Logotipo Around The U.S."
      />
    </header>
  );
}

export default Header;
