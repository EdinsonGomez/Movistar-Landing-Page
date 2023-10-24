import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PackageTag = () => {
  return (
    <div className="package-item__tag">
      <FontAwesomeIcon icon={faStar} size="2xs" />
      <p>MÁS VENDIDO</p>
    </div>
  )
}

export default PackageTag