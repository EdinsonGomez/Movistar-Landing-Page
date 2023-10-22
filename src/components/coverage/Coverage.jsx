import Button from "src/components/button/Button";
import Card from "src/components/card/Card";
import IconButton from 'src/components/button/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import 'src/styles/coverage/coverage.scss';

const Coverage = () => {
  return (
    <div className="coverage">
      <Card className="coverage__card-container">
        <div className="coverage__card">
          <div className="coverage__image" />
          <div className="coverage__text">
            <div className="coverage__message">
              <b>¡Hazlo fácil!</b> Consulta tu cobertura y descubre las ofertas que tenemos para ti
            </div>
            <small>*Aplica en localidades seleccionadas</small>
          </div>
          <Button className="coverage__btn" size="medium">
            Consultar cobertura
          </Button>
          <div className="coverage__actions">
            <IconButton className="coverage__icon-btn coverage__icon-btn--phone">
              <FontAwesomeIcon icon={faPhone} size="2xl" />
            </IconButton>
            <IconButton className="coverage__icon-btn coverage__icon-btn--robot" srcIcon="src/assets/robot-image.png" />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Coverage