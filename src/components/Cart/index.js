// Write your JS code here

import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

const Cart = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="products">
        <img
          alt="cart"
          className="cartImg"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        />
      </div>
    </>
  )
}
export default withRouter(Cart)
