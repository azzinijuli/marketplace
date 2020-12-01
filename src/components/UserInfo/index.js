import React from 'react';
import '../UserInfo/style.scss'

class UserInfo extends React.Component{
  render() {
    return (
      <>
          <div className="userinfo-wrapper">
          <h1 className="title">Checkout</h1>
          <h2 className="contact-info">Contact information</h2>
          <label className="label">E-mail
            <input type="email" placeholder="Enter your email..." className="input"/>
          </label>
          <label className="label">Phone
            <input type="tel" placeholder="Enter your phone..." className="input"/>
          </label>
              
          <h2 className="contact-info shipping">Shipping address</h2>
          <label className="label">Full name
            <input type="text" placeholder="Enter your name..." className="input"/>
          </label>
          <label className="label">Address
            <input type="text" placeholder="Your address..." className="input"/>
          </label>
          <label className="label">City
            <input type="text" placeholder="Your city..." className="input"/>
          </label>

          <div className="country-wrapper">
            <label className="label-country">Country
            <select className="select"> 
              <option className="option" selected>Your country...</option>
              <option className="option">Argentina</option>
              <option className="option">Brasil</option>
              <option className="option">Uruguay</option>
              <option className="option">Chile</option>
              <option className="option">Egipto</option>
            </select>
            </label>
            <label className="label-postal">Postal code 
              <input type="text" placeholder="Your postal code..." className="input postal"/>
            </label>
          </div>
            
          <label className="label checkbox">Save this information for next time
            <input type="checkbox" className="input checkbox" /> 
          </label>
      </div>
      </>
    )
  }
}

export default UserInfo