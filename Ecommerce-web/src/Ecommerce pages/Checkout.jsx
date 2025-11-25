import './Checkout.css'
import { Checkoutheader } from './Checkout-header.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Ordersummary } from './Order-summary.jsx'
import { PaymentSummary } from './Payment-summary.jsx'


export function Checkout({cartitem,loadcart}){
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
  },[cartitem]);       //Initially the dependency array is empty.So,whenever the value changes the useEffect will be rerun.
return(
   <>
     <title>Checkout</title>
     <link rel="icon" href="cart-favicon.png" />
      <Checkoutheader/>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
         <Ordersummary 
           cartitem = {cartitem}
           cartdelivery = {cartdelivery}
           loadcart = {loadcart}
         />
         <PaymentSummary 
         paymentsummary={paymentsummary}
         />
      </div>
    </div>
   </>
)}