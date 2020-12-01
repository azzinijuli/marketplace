import React from "react";
import "../Total/style.scss";

class Total extends React.Component {
  render() {
    const { totalPrice } = this.props;
    return (
      <>
        <div className="total-wrapper">
          <div className="shipping-wrapper">
            <span className="total">Shipping</span>
            <span>Free</span>
          </div>
          <div className="totalprice-wrapper">
            <span className="total">Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Total;
