import logoAwesome from '../images/logo-awesome-profile-cards.svg';

function Header() {
  return (
    <>
      <header>
        <img
          className="logohead"
          src={logoAwesome}
          alt="Logo of Application"
        />
      </header>
    </>
  );
}

export default Header;
