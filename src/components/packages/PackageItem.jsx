import { useState } from 'react';
import Card from 'src/components/card/Card';
import Button from 'src/components/button/Button';
import PackageTag from './PackageTag';
import PackageTextFeature from './PackageTextFeature';
import PackageApps from './PackageApps';
import BonusFeature from './BonusFeature';
import TikTokFeature from './TikTokFeature';
import PrimeFeature from './PrimeFeature';
import PackageItemFooter from './PackageItemFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'src/styles/packages/package-item.scss';

const apps = [
  { type: 'whatsApp' },
  { type: 'facebook', description: 'Fotos' },
  { type: 'messenger' },
  { type: 'instagram', description: 'Fotos' },
  { type: 'waze' },
  { type: 'spotify' },
];

const PackageItem = ({ packageData }) => {
  const price = packageData?.price?.split('.');

  const [openMore, setOpenMore] = useState(false);

  return (
    <Card className='package-item'>
      {packageData.bestSeller ? <PackageTag /> : null}
      <PackageTextFeature
        className='package-item__header'
        text={packageData.title}
        subText={packageData?.subtitle}
      />
      <div className='package-item__section'>
        <PackageTextFeature
          className='package-item__speed'
          text={packageData.speed}
          subText={packageData.speedCharacteristic}
        />

        <div className="package-item__divider" />
        <div className='package-item__text-feature'>
          <p>
            <span className='package-item__price-before'>S/</span>
            <span className='package-item__price-unity'>
              {price?.[0] ?? ''}
            </span>
            <span className='package-item__price-tenths'>
              .{price?.[1] ?? ''} x 2 meses
            </span>
          </p>
          <small className='package-item__regular-price'>
            Precio regular S/{packageData.regularPrice}
          </small>
        </div>
      </div>
      {packageData.installFree ? (
        <PackageTextFeature
          className='package-item__install'
          text='Instalación gratis'
          subText='Previa evaluación crediticia'
        />
      ) : null}
      <div className="package-item__actions">
        <Button size='medium'>Comprar en línea</Button>
        <Button size='medium' outline>
          Llámame ahora
        </Button>
      </div>
      <PackageApps className={`${openMore ? 'package-item__apps-container--mobile-open' : ''}`} apps={apps} />
      {packageData?.bonusIncluded ? <BonusFeature className={`${openMore ? 'package-item__feature--mobile-open' : ''}`} /> : null}
      {packageData?.tiktokIncluded ? <TikTokFeature className={`${openMore ? 'package-item__feature--mobile-open' : ''}`} /> : null}
      <PrimeFeature className={`${openMore ? 'package-item__feature--mobile-open' : ''}`} />
      <div className={`divider ${openMore ? 'divider--mobile-open' : ''}`} />
      <PackageItemFooter
        className={`${openMore ? 'package-item__footer--mobile-open' : ''}`}
        uploadSpeed={packageData.uploadSpeed}
        downloadSpeed={packageData.downloadSpeed}
      />
      <div className={`package-item__more-btn ${openMore ? 'package-item__more-btn--open' : ''}`}>
        <button type="button" onClick={() => setOpenMore(!openMore)}>
          {openMore ? 'Ver menos' : 'Ver más beneficios'}
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </Card>
  );
};

export default PackageItem;
