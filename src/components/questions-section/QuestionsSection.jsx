import Section from '../section/Section';
import Menu from '../menu/Menu';
import MenuItem from '../menu/MenuItem';
import questionsConfig from './questionsConfig.json';
import 'src/styles/questions-section/questions-section.scss';

const QuestionsSection = () => {
  return (
    <Section className="questions-section">
      <h4 className="questions-section__title">
        Preguntas Frecuentes
      </h4>
      <div className="questions-section__list">
        {questionsConfig.map((q, idx) => (
          <Menu
            key={`question-${idx}`}
            label={q.question}
            className="questions-section__menu"
          >
            <MenuItem className="questions-section__menu-item">{q.answer}</MenuItem>
          </Menu>
        ))}
      </div>
    </Section>
  )
}

export default QuestionsSection