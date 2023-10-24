const PrimeFeature = ({ className }) => {
  return (
    <div className={`package-item__feature package-item__feature--prime ${className ?? ''}`}>
      <img src="src/assets/prime-logo.png" alt="primer-logo" width={50} />
      <div className="package-item__feature-text">
        <p>Incluido</p>
        <small>3 meses gratis</small>
      </div>
    </div>
  )
}

export default PrimeFeature