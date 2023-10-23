import 'src/styles/section/section.scss';

function Section({ className, children }) {
  return (
    <div className={`section ${className ?? ''}`}>
      <div className="wrapper">
        <div className="section__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Section