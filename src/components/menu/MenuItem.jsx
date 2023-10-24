import 'src/styles/menu/menu-item.scss';

const MenuItem = ({ className, children }) => {
  return (
    <li className={`menu-item ${className ?? ''}`}>
      {children}
    </li>
  )
}

export default MenuItem