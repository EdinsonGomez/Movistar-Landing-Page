import Section from '../section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'src/styles/streaming-section/streaming-section.scss';

const streamingSrcList = [
  'src/assets/disney-logo.png',
  'src/assets/starplus-logo.png'
]

const StreamingSection = () => {
  return (
    <Section className="streaming-section">
      <div className="streaming-section__content">
        <div className="streaming-section__image">
          <img src="src/assets/enjoy-image.png" alt="streaming-image" />
        </div>
        <div className="streaming-section__text-content">
          <p className="streaming-section__title">Agrega servicios de streaming a tu plan de fibra óptica</p>
          <p className="streaming-section__text">
            Por contar con el <b>plan hogar Movistar tendrás acceso a Disney + y Start +</b> con precios especiales. Contrata tu plan favorito con streaming adicional
          </p>
          <a className="streaming-section__link" href="">
            Selecciona tu plan
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>
      <div className="streaming-section__list">
        {streamingSrcList.map((srcImg, idx) => (
          <img key={`streaming-${idx}`} src={srcImg} alt={`streaming-${idx}`} width={100} />
        ))}
      </div>
    </Section>
  )
}

export default StreamingSection