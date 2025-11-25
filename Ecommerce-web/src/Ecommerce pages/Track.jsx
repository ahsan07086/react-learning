import { Header } from '../HeaderComponents/Header'
import { clampval } from '../utilities/clampvalue'
import dayjs from 'dayjs'
import { useParams } from 'react-router'
import axios from 'axios'
import './Track.css'
import '../HeaderComponents/header.css'
import { useEffect, useState } from 'react';
export function Track({cartitem}){
// useParams is a React hook that used to replace a variable value with the url value.
    let {orderId,productId} = useParams();
    let [orderTrack,setOrder] = useState(null);
    useEffect(()=>{
        const  getOrder=async ()=>{
          const response = await axios.get(`http://localhost:3000/api/orders/${orderId}?expand=products`);
               setOrder(response.data);
        }
        getOrder();
    },[orderId])
    useEffect(() => {
     console.log(orderTrack);
   }, [orderTrack]);

    if(!orderTrack)
    {
        return null;
    }
    const orderElem=orderTrack.products.find((orderElem)=>{
        return orderElem.productId===productId;
    });
     const totalDeliveryTimeMs = orderElem.estimatedDeliveryTimeMs - orderTrack.orderTimeMs;
     const timePassedMs = dayjs().valueOf() - orderTrack.orderTimeMs; //dayjs().valueOf returns the current value of the day time in MS.

     let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
     if (deliveryPercent > 100) {
       deliveryPercent = clampval(deliveryPercent,0,100);
  }
   let pstatus = ""
   if(deliveryPercent===100)
   {
       pstatus = "Delivered On";
   }
   else
   {
      pstatus = "Arriving On";
   }
   let isPreparing = false;
   let isShipped = false;
   let isDelivered = false;
   if(deliveryPercent<33)
   {
     isPreparing =true;
   }
   else if(deliveryPercent>=33 && deliveryPercent<100)
   {
    isShipped = true;
   }
   else
   {
    isDelivered =true;
   }
    
    return(
        <>
            <title>Tracking</title>
             <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
                    <Header cartitem={cartitem}/>
                    
                    <div className="tracking-page">
                    <div className="order-tracking">
                        <a className="back-to-orders-link link-primary" href="/order">
                        View all orders
                        </a>

                        <div className="delivery-date">
                        {pstatus} {dayjs(orderElem?.estimatedDeliveryTimeMs).format('MMMM D')}
                        </div>

                        <div className="product-info">
                          
                          {orderElem?.product?.name}
                        </div>

                        <div className="product-info">
                        Quantity:  {orderElem?.quantity}
                        </div>

                        <img className="product-image" src={orderElem?.product?.image ? `http://localhost:3000/${orderElem.product.image}` : ""}
                         alt={orderElem?.product?.name}/>
                        {console.log(orderElem?.product.image)}

                        <div className="progress-labels-container">
                        <div className={`Progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`Progress-label ${isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`Progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                        </div>

                        <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width:`${deliveryPercent}%` }}></div>
                        </div>
                    </div>
                    </div>
        
        </>
    )
}