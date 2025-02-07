const ExponentFive = ({etCount}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{etCount}⁵</p>
    <p className="exponent-result">{etCount} * {etCount} * {etCount} * {etCount} * {etCount} = <span className="total">{etCount**5}</span></p>
  </div>
);

export default ExponentFive;