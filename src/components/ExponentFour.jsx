const ExponentFour = ({etCount}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{etCount}⁴</p>
    <p className="exponent-result">{etCount} * {etCount} * {etCount} * {etCount} = <span className="total">{etCount**4}</span></p>
  </div>
);

export default ExponentFour;