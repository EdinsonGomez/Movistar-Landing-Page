const PackageTextFeature = ({ className, text, subText }) => (
  <div className={`package-item__text-feature ${className ?? ''}`}>
    <p>{text}</p>
    {subText ? <small>{subText}</small> : null}
  </div>
)

export default PackageTextFeature;