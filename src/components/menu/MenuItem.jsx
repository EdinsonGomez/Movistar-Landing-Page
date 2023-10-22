import 'src/styles/menu/menu-item.scss';

const MenuItem = ({ children }) => {
  return (
    <li className="menu-item">
      {children}
    </li>
  )
}

export default MenuItem