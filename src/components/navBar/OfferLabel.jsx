import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import 'src/styles/navBar/offer-label.scss';

const OffersLabel = () => (
  <p className="offer-label">
    <FontAwesomeIcon icon={faFire} />
    Ofertas
  </p>
)

export default OffersLabel;