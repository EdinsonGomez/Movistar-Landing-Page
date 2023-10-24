const BonusFeature = ({ className }) => {
  return (
    <div className={`package-item__feature package-item__feature--bonus ${className ?? ''}`}>
      <div className="package-item__feature-text">
        <p>¡Imperdible!</p>
        <small>
          <span className="package-item__feature-bonus">BONO 1000 Mbps</span> x 2 meses
        </small>
      </div>
    </div>
  )
}

export default BonusFeature