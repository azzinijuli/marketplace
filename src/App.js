import React from "react";
import "./App.css";
import Slider from "react-slick";
import products from "./data/products.json";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
    };
  }

  handleClick(product) {
    const stringifiedCart = localStorage.getItem("cart");
    if (stringifiedCart) {
      const parsedCart = JSON.parse(stringifiedCart);
      parsedCart.push(product);
      const newCart = JSON.stringify(parsedCart);
      localStorage.setItem("cart", newCart);
    } else {
      const parsedCart = [product];
      const newCart = JSON.stringify(parsedCart);
      localStorage.setItem("cart", newCart);
    }

    this.props.history.push("/checkout");
  }

  render() {
    return (
      <>
        <div className="carousel-wrapper">
          <h1 className="carousel-title">Pastel store</h1>
          <h2 className="carousel-subtitle">
            Click on a product and add it to your cart!
          </h2>
          <Slider {...this.settings}>
            {products.map((product, key) => {
              return (
                <div onClick={() => this.handleClick(product)} key={key}>
                  <img className="picture" src={product.img} alt="product" />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default App;
