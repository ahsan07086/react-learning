import './Checkout.css'
import { Checkoutheader } from './Checkout-header.jsx'
import dayjs from 'dayjs'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { monocent } from '../utilities/monocent.js'
export function Checkout({cartitem}){
 let [cartdelivery,setcartdelivery] = useState([]);
 let [paymentsummary,setpaymentsummary] = useState(null);
 useEffect(()=>{
    axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime')
    .then((response)=>{
          setcartdelivery(response.data)
    });
  },[]);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/payment-summary')
    .then((response)=>{
          setpaymentsummary(response.data)
    });
  },[]);
return(
   <>
     <title>Checkout</title>
     <link rel="icon" href="cart-favicon.png" />
      <Checkoutheader/>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
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

              <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
                {
                  cartdelivery.map((delivery)=>{
                    let PriceTag="FREE-Shipping";
                    if(delivery.priceCents>0)
                    {
                      PriceTag=`${monocent(delivery.priceCents)}-Shipping`;
                    }
                    return(
                    <div key={delivery.id} className="delivery-option">
                    <input type="radio" checked={delivery.id==item.deliveryOptionId}
                      className="delivery-option-input"
                      name={`delivery-option-${item.productId}`}/>
                    <div>
                    <div className="delivery-option-date">
                      {dayjs(delivery.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                      
                    </div>
                    <div className="delivery-option-price">
                      {PriceTag}
                    </div>
                  </div>
                </div>
                    )
                  })
                }
                
              
              </div>
            </div>
          </div>
           )
          })
        }
        </div>

        <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items {paymentsummary?.totalItems}:</div>
              <div className="payment-summary-money">{monocent(paymentsummary?.productCostCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">{monocent(paymentsummary?.shippingCostCents)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">{monocent(paymentsummary?.totalCostBeforeTaxCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">{monocent(paymentsummary?.taxCents)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">{monocent(paymentsummary?.totalCostCents)}</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
        </div>
      </div>
    </div>
   </>
)}