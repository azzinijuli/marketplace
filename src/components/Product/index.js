import React from 'react'
import '../Product/style.scss'

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      qty: 1,
    }
  }

  handleClick(action){
    const { qty } = this.state
    const newQty = action == 'less' ? qty-1 : qty+1
    const { price } = this.props.data

    if (newQty>0) {
      this.props.handleCallback(action, price)
      this.setState({
        qty: newQty  
      })
    }
  }

  render(){
    const { img, title, price } = this.props.data;
    const { qty } = this.state
    return(
      <>
        <div className="product-wrapper">
          <img className="product-image"src={img} />
          <div className="product-info">
            <p className="product-title">{title}</p>
            <p className="product-price">${price * qty}</p>
            <div className="product-counter">
              <button onClick={()=>this.handleClick('less')}>−</button>
              <span>{qty}</span>
              <button onClick={()=>this.handleClick('more')}>+</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Product