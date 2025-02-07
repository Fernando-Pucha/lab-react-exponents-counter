const ExponentTwo = ({etCount}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{etCount}²</p>
    <p className="exponent-result">{etCount} * {etCount} = <span className="total">{etCount**2}</span></p>
  </div>
);

export default ExponentTwo;