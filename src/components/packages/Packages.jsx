import { useRef } from 'react';
import { useArrowBtn, arrowDirections } from '../../hooks/useArrowBtn';
import PackagesTypes from './PackagesTypes';
import packagesConfig from './packages.json';
import PackageItem from './PackageItem';
import ArrowButton from '../button/ArrowButton';
import PackagesFooter from './PackagesFooter';
import 'src/styles/packages/packages.scss';

const Packages = () => {
	const listRef = useRef(null);

	const { onClickArrow } = useArrowBtn(listRef);

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
