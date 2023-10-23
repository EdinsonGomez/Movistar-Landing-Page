const appIcons = {
	whatsApp: 'src/assets/whatsApp-icon.png',
	facebook: 'src/assets/facebook-icon.png',
	messenger: 'src/assets/messenger-icon.png',
	instagram: 'src/assets/instagram-icon.png',
	waze: 'src/assets/waze-icon.png',
	spotify: 'src/assets/spotify-icon.png',
};

const PackageApps = ({ apps = [] }) => {
	return (
		<div className='package-item__apps-container'>
			<small className='package-item__apps-text'>App ilimitadas x 12 meses*</small>
			<div className='package-item__apps'>
				{apps.map((app, idx) =>
					appIcons[app?.type] ? (
						<div key={`${app.type}-${idx}`} className='package-item__app-item'>
              <img src={appIcons[app.type]} alt={app.type} width={22} />
              {app.description ? <small>{app.description}</small> : null}
            </div>
					) : null
				)}
			</div>
		</div>
	);
};

export default PackageApps;
