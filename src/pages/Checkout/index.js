import React from 'react'
import UserInfo from '../../components/UserInfo'
import Carrito from '../../components/Carrito'
import '../Checkout/style.scss'

class Checkout extends React.Component {
  render(){
    return(
      <>
      <div className="general-wrapper">
        <UserInfo />
        <Carrito />
      </div>
      </>
    )
  }
}

export default Checkout