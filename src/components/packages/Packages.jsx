import { useRef } from 'react';
import PackagesTypes from './PackagesTypes';
import packagesConfig from './packages.json';
import PackageItem from './PackageItem';
import ArrowButton from '../button/ArrowButton';
import PackagesFooter from './PackagesFooter';
import 'src/styles/packages/packages.scss';

const arrowDirections = {
	left: 'LEFT',
	right: 'RIGHT',
};

const Packages = () => {
	const listRef = useRef(null);

	const onClickArrow = (direction) => {
		const listElement = listRef.current;
    const step = 200;

    if (!listElement) return

    const scrollLeftPosition = listElement.scrollLeft;
    let newLeftPosition = scrollLeftPosition;

    if (direction === arrowDirections.left) {
      newLeftPosition -= step;
    }

    if (direction === arrowDirections.right) {
      newLeftPosition += step;
    }

    listElement.scrollTo({
      left: newLeftPosition,
      behavior: "smooth"
    })

	};

	return (
		<div className='wrapper packages'>
			<PackagesTypes />
			<div ref={listRef} className='packages__list'>
				{packagesConfig.map((pack, idx) => (
					<PackageItem key={`package-${idx}`} packageData={pack} />
				))}
			</div>
			<div className='packages__actions'>
				<ArrowButton
					className='packages__arrow--left'
					variant='outline'
					onClick={() => onClickArrow(arrowDirections.left)}
				/>
				<ArrowButton onClick={() => onClickArrow(arrowDirections.right)} />
			</div>
      <PackagesFooter />
		</div>
	);
};

export default Packages;
