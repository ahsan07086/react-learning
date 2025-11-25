import './Checkout.css'
import { OrderCart } from './Order-cart.jsx';
import dayjs from 'dayjs'
import { Orderdelivery } from './Order-delivery.jsx';
export function Ordersummary({cartitem,cartdelivery,loadcart}){
    return(
        
         <div className="order-summary">
          {cartdelivery.length>0 && cartitem.map((item)=>
          { 
           let deliverydate = cartdelivery.find((delivery)=>{
             return delivery.id===item.deliveryOptionId;
           });
           return(
              <div key={item.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(deliverydate.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={item.product.image} />

              <OrderCart item={item}/>

              <Orderdelivery 
              cartdelivery = {cartdelivery} 
              item = {item}
              loadcart = {loadcart}
              />
            </div>
          </div>
           )
          })
        }
        </div>
        
    )
}