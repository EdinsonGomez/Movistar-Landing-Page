const PackageItemFooter = ({ downloadSpeed, uploadSpeed }) => {
  return (
    <div className="package-item__footer">
      <img src="src/assets/fibra-icon.png" alt="friba-icon" width={20} height={20} />
      <div className="package-item__footer-text">
        <span>Velocidad de internet Fibra</span>
        <span>Máx de descarga {downloadSpeed}</span>
        <span>Máx de subida {uploadSpeed}</span>
      </div>
    </div>
  )
}

export default PackageItemFooter