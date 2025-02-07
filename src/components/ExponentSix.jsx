const ExponentSix = ({etCount}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{etCount}⁶</p>
    <p className="exponent-result">{etCount} * {etCount} * {etCount} * {etCount} * {etCount} * {etCount} = <span className="total">{etCount**6}</span></p>
  </div>
);

export default ExponentSix;