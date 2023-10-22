import { useState } from "react";
import 'src/styles/header/header.scss';

const Header = () => {
  const [clientLink, setClientLink] = useState('person');

  const ClientLink = ({ value, text }) => (
    <a
      href=""
      className={`header__link ${clientLink === value ? 'header__link--active' : ''}`}
      onClick={() => setClientLink(value)}
    >
      {text}
    </a>
  )

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <div className="header__clients-links">
            <ClientLink value="person" text="Personas" />
            <ClientLink value="company" text="Empresas" />
          </div>
          <a href="#" className="header__link">Información a Abonados y Usuarios</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
