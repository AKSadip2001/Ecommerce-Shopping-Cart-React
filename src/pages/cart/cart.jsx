import React, { useContext, useEffect } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-Item'
import "./cart.css"
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('cart').className = "active";
    return () => {
        document.getElementById('cart').className = "";
    }
  }, []);

  return (
    <div className='cart'>
      <div>
        <h1>CART ITEMS</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
          return <></>
        })}
      </div>

      {totalAmount>0 ?
      <div className='checkout'>
        <p>Subtotal: <b>TK {totalAmount} /-</b></p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div> :
      <div className='emptyCart'>
        <h2>Your cart is empty...</h2>
        <button onClick={()=>navigate("/")}>Start Shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart
