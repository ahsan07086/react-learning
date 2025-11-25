import './Checkout.css'
import axios from 'axios'
import { monocent } from '../utilities/monocent.js'
export function OrderCart({item,loadcart}){
  const DeleteCartItem=async ()=>{
    await axios.delete(`http://localhost:3000/api/cart-items/${item.productId}`);
    await loadcart();
  }
    return(
        <div className="cart-item-details">
                        <div className="product-name">
                          {item.product.name}
                        </div>
                        <div className="product-price">
                          {monocent(item.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity: <span className="quantity-label">{item.quantity}</span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary" onClick={DeleteCartItem}>
                            Delete
                          </span>
                        </div>
        </div>
    )
}