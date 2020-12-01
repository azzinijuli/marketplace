import React from "react";
import Total from "../Total";
import Product from "../Product";
import "../Carrito/style.scss";

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      products: [],
    };
  }

  componentDidMount() {
    let totalPrice = 0;

    const stringifiedProducts = localStorage.getItem("cart");
    if (stringifiedProducts) {
      const products = JSON.parse(stringifiedProducts);
      products.map((product) => {
        totalPrice = totalPrice + product.price;
      });

      this.setState({
        totalPrice: totalPrice,
        products: products,
      });
    }
  }

  handleCallback(action, price) {
    const { totalPrice } = this.state;
    const newTotalPrice =
      action == "less" ? totalPrice - price : totalPrice + price;

    this.setState({
      totalPrice: newTotalPrice,
    });
  }

  render() {
    const { products, totalPrice } = this.state;
    return (
      <>
        <div className="products-wrapper">
          {products.map((product, key) => {
            return (
              <Product
                key={key}
                data={product}
                handleCallback={(action, price) =>
                  this.handleCallback(action, price)
                }
              />
            );
          })}
          <Total totalPrice={totalPrice} />
        </div>
      </>
    );
  }
}

export default Carrito;
