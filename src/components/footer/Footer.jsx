import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Menu from 'src/components/menu/Menu';
import MenuItem from 'src/components/menu/MenuItem';
import menuConfig from "./menuConfig.json";
import 'src/styles/footer/footer.scss';

const complaintLinks = [
  { label: "Reclamos y solicitudes en linea" },
  { label: "Consultas de reclamos" },
  { label: "Información abonados y usuarios" },
  { label: "Libro de Reclamaciones" }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <p className="footer__title">
          Una marca de <strong>Telefónica</strong>
        </p>
        <div className="divider" />
        <div className="footer__menu-container">
          {Object
            .keys(menuConfig)
            .map((key) => (
              <div key={key.replaceAll('', '-')} className="footer__menu">
                <p className="footer__menu-title">{key}</p>
                <ul className="footer__menu-list">
                  {menuConfig[key].map((menu) => (
                    <li key={menu.label.replaceAll(' ', '-')}>
                      <a href="" className="footer__menu-item">{menu.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
        <div className="footer__menu-container--mobile">
          {Object
            .keys(menuConfig)
            .map((key) => (
              <Menu
                key={key.replaceAll(' ', '-')}
                label={key}
              >
                {menuConfig[key].map((menu) => (
                  <MenuItem key={menu.label.replaceAll(' ', '-')}>
                    <a href="" className="footer__menu-item">{menu.label}</a>
                  </MenuItem>
                ))}
              </Menu>
            ))
          }
        </div>
        <div className="divider" />
        <div className="footer__complaint-section">
          <span className="footer__copyright">
            &copy; 2022 Movistar. Todos los derechos reservados
          </span>
          <div className="footer__complaint-container">
            <div className="footer__complaint-links">
              {complaintLinks.map((c) => (
                <a key={c.label} href="" className="footer__link footer__link--complaint">
                  {c.label}
                </a>
              ))}
            </div>
            <div className="footer__social-media">
              <FontAwesomeIcon icon={faSquareFacebook} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer