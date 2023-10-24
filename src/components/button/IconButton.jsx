import 'src/styles/button/icon-button.scss';

const iconButton = ({
  onClick,
  className,
  srcIcon,
  width = "20",
  children
}) => {
  return (
    <button
      className={`icon-btn ${className ?? ''}`}
      type="button"
      onClick={onClick}
    >
      {srcIcon ? <img className="icon-btn__icon" src={srcIcon} alt={srcIcon} width={width} /> : null}
      {children}
    </button>
  )
}

export default iconButton