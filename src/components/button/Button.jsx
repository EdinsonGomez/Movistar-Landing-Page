import 'src/styles/button/button.scss';

const Button = ({ onClick, outline, children }) => {
  return (
    <button
      className={`btn ${outline ? 'btn--outline' : ''}`}
      type="button"
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  )
}

export default Button