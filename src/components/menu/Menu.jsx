import { useState } from "react";
import "src/styles/menu/menu.scss";

const Menu = ({ label, className, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <details className={`menu ${className ?? ''}`}>
      <summary
        className={`menu__label ${open ? "menu__label--open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {label}
      </summary>
      <ul className="menu__content">
        {children}
      </ul>
    </details>
  );
};

export default Menu;
