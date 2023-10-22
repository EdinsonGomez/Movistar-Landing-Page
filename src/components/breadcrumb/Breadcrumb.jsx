import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "src/styles/breadcrumb/breadcrumb.scss";

const breadcrumbList = ["Inicio", "Hogar", "Fibra óptica"];

const Breadcrumb = () => {
  return (
    <div className="wrapper">
      <div className="breadcrumb">
        {breadcrumbList.map((route, idx) => (
          <>
            <a
              href=""
              className={`breadcrumb__item ${
                idx === breadcrumbList.length - 1
                  ? "breadcrumb__item--active"
                  : ""
              }`}
            >
              {route}
            </a>
            {idx !== breadcrumbList.length - 1 ? (
              <FontAwesomeIcon className="breadcrumb__arrow" icon={faChevronRight} size="xs" />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
