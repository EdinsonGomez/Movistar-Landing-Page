
import Section from '../section/Section';
import referencesConfig from "./referencesConfig.json";
import ReferenceClient from './ReferenceClient';
import 'src/styles/reference-section/references-section.scss';

const ReferencesSection = () => {
  return (
    <Section className="references-section">
      <p className="section__title references-section__title">
        ¿Qué opinan los clientes de nuestros Planes Postpago?
      </p>
      <div className="references-section__list">
        {referencesConfig.map((reference, idx) => (
          <ReferenceClient key={`reference-${idx}`} data={reference} />
        ))}
      </div>
    </Section>
  )
}

export default ReferencesSection