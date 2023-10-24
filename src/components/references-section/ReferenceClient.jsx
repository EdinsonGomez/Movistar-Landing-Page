import 'src/styles/reference-section/reference-client.scss';

const ReferenceClient = ({ data }) => {
  return (
    <div className="reference-client">
      <div className="reference-client__perfil-content">
        <div className="reference-client__perfil">
          <div className="reference-client__name">
            <p>{data.name}</p>
            <p>{data.lastName}</p>
          </div>
          <p className="reference-client__plan">{data.plan}</p>
        </div>
      </div>
      <div className="reference-client__image">
        <img src={data.srcImage} alt={`image-${data.name}`} />
      </div>
      <div className="reference-client__testimony">
        {data.testimony.map((t, idx) => (
          <p key={`testimony-${idx}`}>{t}</p>
        ))}
      </div>
    </div>
  )
}

export default ReferenceClient