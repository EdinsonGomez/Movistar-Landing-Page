const TikTokFeature = ({ className }) => {
  return (
    <div className={`package-item__feature package-item__feature--tiktok ${className ?? ''}`}>
      <div className="feature__tiktok-text">
        <span>
          <img src="src/assets/tiktok-icon.png" alt="ticktock" />
          30 GB
        </span>
        <small>de TickTock x 3 meses</small>
      </div>
      <div className="package-item__divider" />
      <div className="package-item__feature-text">
        <p>
          Duplica <b>GB</b>
        </p>
        <small>x 6 meses</small>
      </div>
    </div>
  )
}

export default TikTokFeature