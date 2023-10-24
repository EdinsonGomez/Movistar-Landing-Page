import 'src/styles/button/pagination-buttons.scss';

const createPagesArray = (length) => {
  const pagesArray = Array.from({ length });
  
  for (let i = 0; i < length; i++) {
    pagesArray[i] = i + 1;
  }

  return pagesArray
}

const PaginationButtons = ({ className, pageNumber, currentPage, onClick }) => {
	if (!pageNumber) return null;

	return (
		<div className={`pagination-buttons ${className ?? ''}`}>
			{createPagesArray(pageNumber).map((page) => (
				<div
					key={`page-btn-${page}`}
					className={`pagination-buttons__item ${
						currentPage === page ? 'pagination-buttons__item--active' : ''
					}`}
          onClick={() => onClick && onClick(page)}
				/>
			))}
		</div>
	);
};

export default PaginationButtons;
