import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'src/styles/button/arrow-btn.scss';

const ArrowButton = ({ onClick, variant, className }) => {
	return (
		<IconButton
			className={`arrow-btn ${variant ? `arrow-btn--${variant}` : ''} ${className ?? ''}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faChevronRight} size='1x' />
		</IconButton>
	);
};

export default ArrowButton;
