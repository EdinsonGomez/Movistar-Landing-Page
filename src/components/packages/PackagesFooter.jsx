import Card from 'src/components/card/Card';

const benefits = [
  { title: "Módem Smart WiFi", description: '2.4GHz y 5Ghz' },
  { title: "Sigue tu instalación", description: "Puedes seguir tu instalación en linea" }
]

const PackagesFooter = () => {
  return (
    <div className="packages__footer">
      <p className="packages__footer-title">
        Todos nuestros planes de Internet Fibra Óptica
        <strong> también incluyen</strong>
      </p>
      <div className="packages__footer-list">
        {benefits.map((b) => (
          <Card className="packages__card" key={b.title.replaceAll(' ', '-')}>
            <img src="src/assets/smartwifi-icon.png" alt="smartwifi-icon" width={30} />
            <div className="packages__card-text">
              <p className="packages__card-title">{b.title}</p>
              <p className="packages__card-description">{b.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PackagesFooter