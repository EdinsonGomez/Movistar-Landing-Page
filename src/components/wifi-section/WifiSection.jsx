import Card from '../card/Card';
import Section from '../section/Section';
import 'src/styles/wifi-section/wifi-section.scss';

const wifiSectionConfig = {
  title: <>Amplia tu señal de Wifi en toda tu casa con nuestro <b>repetidor Wifi plus</b></>,
  text: [
    'Instala un Repetidor Wifi Plus en un punto de baja cobertura y amplifica tu señal Wifi en todo tu hogar.',
    'Adquiérelo con tu plan o solicita un a través de la App Mi Movistar.'
  ],
  cards: [
    { icon: 'src/assets/router-icon.png', text: 'Señales Wifi: Amplificador con dos señales: Wifi (2.4GHz) y Wifi Plus (5GHz)' },
    { icon: 'src/assets/speed-icon.png', text: 'Velocidad Plus: La señal Wifi Plus te dará máxima velocidad' },
    { icon: 'src/assets/world-icon.png', text: 'Antena Wifi de alta gama: la señal Wifi Plus te permitirá distribuir y conectar más dispositivos' },
    { icon: 'src/assets/shield-icon.png', text: 'Fácil configuración: Amplificador compatible con todos los módems. Conectado por cable ethernet' }
  ],
  appSection: {
    title: <>Adquiere tu repetidor <b>desde la App Mi Movistar</b></>,
    text: 'Descarga la App y obtén tu repetidor de forma fácil en sencillos pasos'
  }
}

const WifiSection = () => {
  return (
    <Section className="wifi-section">
      <div className="wifi-section__content">
        <div className="wifi-section__text-container">
          <p className="section__title">{wifiSectionConfig.title}</p>
          {wifiSectionConfig.text.map((txt, idx) => (
            <p key={`wifi-text-${idx}`} className="wifi-section__text">
              {txt}
            </p>
          ))}
        </div>
        <div className="wifi-section__image">
          <img src="src/assets/aeroband-image.png" alt="wifi-section-image" />
        </div>
      </div>
      <Card className="wifi-section__card">
        {wifiSectionConfig.cards.map((c, idx) => (
          <div key={`wifi-card-item-${idx}`} className="wifi-section__card-item">
            <div className="wifi-section__card-icon">
              <img src={c.icon} alt={`wifi-card-icon-${idx}`} />
            </div>
            <p>{c.text}</p>
          </div>
        ))}
      </Card>
      <Card className="wifi-section__footer">
        <div className="wifi-section__app">
          <img className="wifi-section__app-logo" src="src/assets/m-logo.png" alt="wifi-m-logo" />
          <div className="wifi-section__app-content">
            <p className="wifi-section__app-title">{wifiSectionConfig.appSection.title}</p>
            <p className="wifi-section__app-text">{wifiSectionConfig.appSection.text}</p>
            <div className="wifi-section__app-icons">
              <img src="src/assets/appstore-image.png" alt="ios-store" />
              <img src="src/assets/googleplay-image.png" alt="android-store" />
            </div>
          </div>
        </div>
        <div className="wifi-section__app-img">
          <img src="src/assets/happy-illustration.png" alt="happy-illustration" />
        </div>
      </Card>
    </Section>
  )
}

export default WifiSection