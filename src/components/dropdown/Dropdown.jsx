import { useEffect, useRef, useState } from "react";
import 'src/styles/dropdown/dropdown.scss';

const Dropdown = ({ label, labelComponent, className, children }) => {
  const summaryRef = useRef(null);
  const [open, setOpen] = useState(false);

  const hasArrayChildren = Array.isArray(children);

  useEffect(() => {
    const listener = (e) => {
      if (e.target !== summaryRef.current && open) {
        setOpen(false);
      }
    }

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    }
  }, [open]);

  return (
    <div className={`dropdown ${className ?? ''}`}>
      <button
        className={`dropdown__summary ${hasArrayChildren ? 'dropdown__summary--with-menu' : ''} ${open ? 'dropdown__summary--open' : ''}`}
        type="button"
        onClick={() => setOpen(!open)}
        ref={summaryRef}
      >
        {labelComponent ? labelComponent : label}
      </button>
      {hasArrayChildren ? (
        <ul className={`dropdown__menu ${open ? 'dropdown__menu--open' : ''}`}>
          {children}
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown