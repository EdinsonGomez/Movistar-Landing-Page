import 'src/styles/dropdown/dropdown-item.scss';

const DropdownItem = ({ children }) => {
  return (
    <li className="dropdown__item">
      {children}
    </li>
  )
}

export default DropdownItem