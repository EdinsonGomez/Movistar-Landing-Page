import 'src/styles/card/card.scss';

const Card = ({ className, children }) => {
  return (
    <div className={`card ${className ?? ''}`}>
      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

export default Card