import "src/styles/button/button.scss";

const Button = ({ className, onClick, outline, size, children }) => {
  return (
    <button
      className={`btn ${outline ? "btn--outline" : ""} ${
        size ? `btn--${size}` : ""
      } ${className ?? ""}`}
      type="button"
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
