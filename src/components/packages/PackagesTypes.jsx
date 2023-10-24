import { useState } from 'react';
import Card from 'src/components/card/Card';
import 'src/styles/packages/packages-types.scss';

const types = {
	fibra: 'Internet Fibra',
	fibra_tv: 'Internet Fibra + TV',
	fibra_phone: 'Internet Fibra + Fijo',
	trio: 'Planes trío',
};

const PackagesTypes = () => {
	const [typeActive, setTypeActive] = useState('fibra');

	return (
		<Card className='packages-types'>
			{Object.keys(types).map(key => (
				<div
					key={key}
					className={`packages-types__item ${
						key === typeActive ? 'packages-types__item--active' : ''
					}`}
					onClick={() => setTypeActive(key)}
				>
					<p>{types[key]}</p>
				</div>
			))}
		</Card>
	);
};

export default PackagesTypes;
