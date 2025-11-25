import './Checkout.css'
import { monocent } from '../utilities/monocent.js'
export function OrderCart({item}){
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
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
        </div>
    )
}