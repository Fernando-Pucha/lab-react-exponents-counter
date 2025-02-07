const ExponentThree = ({etCount}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{etCount}³</p>
    <p className="exponent-result">{etCount} * {etCount} * {etCount} = <span className="total">{etCount**3}</span></p>
  </div>
);

export default ExponentThree;