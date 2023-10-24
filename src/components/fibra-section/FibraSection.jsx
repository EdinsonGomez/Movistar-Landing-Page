import Card from '../card/Card';
import Section from '../section/Section';
import 'src/styles/fibra-section/fibra-section.scss';

const cardsConfig = {
  download: {
    srcIcon: 'src/assets/downloads-illustration.png',
    title: 'Descarga y sube archivos más rápido',
  },
  videogames: {
    srcIcon: 'src/assets/play-icon.png',
    title: 'Juega online sin interrupciones',
  },
  series: {
    srcIcon: 'src/assets/bicycle-illustration.png',
    title: 'Mira tus series y videos sin pausas',
  },
  calls: {
    srcIcon: 'src/assets/calls-illustration.png',
    title: 'Videollamadas sin interrupciones',
  },
};

const FibraSection = () => {
  return (
    <Section className='fibra-section'>
      <h4 className='fibra-section__title'>
        ¿Por qué elegir Fibra óptica para mi hogar?
      </h4>
      <div className='fibra-section__content'>
        <div className='fibra-section__cards-container'>
          <div className='fibra-section__cards-content'>
            {Object.keys(cardsConfig).map((key) => (
              <Card key={key} className='fibra-section__card'>
                <img
                  className='fibra-section__card-icon'
                  src={cardsConfig[key].srcIcon}
                  alt={key}
                />
                <p className='fibra-section__card-title'>
                  {cardsConfig[key].title}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="fibra-section__image">
          <img
            src='src/assets/enjoy-image.png'
            alt='fibra-section-img'
            width={50}
          />
        </div>
      </div>
    </Section>
  );
};

export default FibraSection;
