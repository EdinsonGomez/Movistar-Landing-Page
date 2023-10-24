import { useRef, useState } from 'react';
import { useArrowBtn, arrowDirections } from '../../hooks/useArrowBtn';
import Card from '../card/Card';
import Section from '../section/Section';
import ArrowButton from '../button/ArrowButton';
import PaginationButtons from '../button/PaginationButtons';
import 'src/styles/connection-section/connection-section.scss';

const connectionConfig = {
  title: "¿Quieres navegar a máxima velocidad?",
  subtitle: "6 tips para optimizar la conexión de tu fibra óptica",
  cards: [
    { desciption: <><b>No flexiones ni enrolles</b> el cable de fibra.</> },
    { desciption: <><b>No dobles el cable</b> que va conectado al router.</> },
    { desciption: <><b>No aplastes el cable</b> con muebles o cualquier otro equipo.</> },
    { desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { desciption: <><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit.</> },
    { desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { desciption: <><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit.</> },
    { desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { desciption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ]
}

const ConnectionSection = () => {
  const desktopPagesNumber = 3;
  const listRef = useRef(null);
  const { onClickArrow } = useArrowBtn(listRef);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentPageMobile, setCurrentPageMobile] = useState(1);

  const onClickPageDesktop = (newPage) => {
    const listElement = listRef.current;
    if (!listElement) return

    const newLeftPositionRef = Math.round(listElement.children.length / desktopPagesNumber) * (newPage - 1);
    const newLeftPosition = listElement.children[newLeftPositionRef].offsetLeft;

    listElement.scrollTo({
      left: newLeftPosition,
      behavior: "smooth"
    })

    setCurrentPage(newPage);
  }

  const onClickPageMobile = (newPage) => {
    const listElement = listRef.current;

    if (!listElement) return

    const child = listElement.children[newPage - 1];
    listElement.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth"
    });
    setCurrentPageMobile(newPage);

  }
  
  return (
    <Section className="connection-section">
      <h4 className="connection-section__title">{connectionConfig.title}</h4>
      <p className="connection-section__subtitle">{connectionConfig.subtitle}</p>
      <div className="connection-section__list" ref={listRef}>
        {connectionConfig.cards.map((c, idx) => (
          <Card key={`tip-${idx}`} className="connection-section__card">
            <img src="src/assets/router-icon.png" alt={`tip-icon-${idx}`} />
            <p className="connection-section__tip-number">Tip {idx + 1} de {connectionConfig.cards.length}</p>
            <p className="connection-section__tip">{c.desciption}</p>
          </Card>
        ))}
      </div>
      <div className="connection-section__arrow connection-section__arrow--left">
        <ArrowButton variant="outline" onClick={() => onClickArrow(arrowDirections.left)} />
      </div>
      <div className="connection-section__arrow connection-section__arrow--right">
        <ArrowButton onClick={() => onClickArrow(arrowDirections.right)} />
      </div>
      <PaginationButtons
        className="connection-section__pagination connection-section__pagination--desktop"
        pageNumber={desktopPagesNumber}
        currentPage={currentPage}
        onClick={onClickPageDesktop}
      />
      <PaginationButtons
        className="connection-section__pagination connection-section__pagination--mobile"
        pageNumber={connectionConfig.cards.length}
        currentPage={currentPageMobile}
        onClick={onClickPageMobile}
      />
    </Section>
  )
}

export default ConnectionSection