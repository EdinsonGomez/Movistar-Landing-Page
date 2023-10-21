import Dropdown from "src/components/dropdown/Dropdown";
import DropdownItem from "src/components/dropdown/DropdownItem";
import OffersLabel from "./OfferLabel";
import Button from "../button/Button";
import IconButton from "../button/IconButton";

import "src/styles/navBar/navBar.scss";

const navConfig = [
  {
    label: "Celulares",
    children: [{ label: "Menu Item" }, { label: "Menu Item" }],
  },
  {
    label: "Hogar",
    children: [{ label: "Fibra Optica" }, { label: "Menu Item" }],
  },
  {
    label: "Plan Móvil",
    children: [{ label: "Menu Item" }, { label: "Menu Item" }],
  },
  {
    label: "Entretenimiento",
    children: [{ label: "Menu Item" }, { label: "Menu Item" }],
  },
  { label: "Atención al cliente" },
  { label: "Ofertas", component: <OffersLabel /> },
];

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="wrapper">
        <div className="navBar__container">
          <img
            className="navBar__logo"
            src="src/assets/m-logo.png"
            alt="logo"
            width={33}
          />
          {Object.values(navConfig).map((config) => (
            <Dropdown
              className="navBar__dropdown"
              key={config.label}
              label={config.label}
              labelComponent={config.component}
            >
              {config.children
                ? config.children.map((child, idx) => (
                    <DropdownItem
                      key={`${config.label}-${child.label.replaceAll(
                        " ",
                        "-"
                      )}-${idx}`}
                    >
                      {child.label}
                    </DropdownItem>
                  ))
                : null}
            </Dropdown>
          ))}
        </div>
        <div className="navBar__actions">
          <Button outline>App Mi Movistar</Button>
          <IconButton className="navBar__search-icon" srcIcon="src/assets/finder-icon.png" />
          <IconButton
            className="navBar__track-icon"
            srcIcon="src/assets/track-icon.png"
            width="28"
          >
            Tus Pedidos
          </IconButton>
          <IconButton
            className="navBar__notifications-icon"
            srcIcon="src/assets/notifications-icon.png"
            width="24"
          >
            Notificaciones
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
