import { Header } from '../HeaderComponents/Header';
import { useEffect, useState, Fragment } from 'react';
import dayjs from 'dayjs';
import { monocent } from '../utilities/monocent';
import './Order.css';
import axios from 'axios';
export function Order({cartitem}){
    let [orderitem,setOrderitem] = useState([]);
    useEffect(()=>{
       axios.get('http://localhost:3000/api/orders?expand=products')
       .then((response)=>{
         setOrderitem(response.data);
       })
    },[])
     return(
        <>
           <title>Orders</title>
           <link rel="icon" href="orders-favicon.png" />
              <Header cartitem={cartitem}/>

               <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                {
                    orderitem.map((order)=>{
                    return(
                    <div key={order.id} className="order-container">

                    <div className="order-header">
                        <div className="order-header-left-section">
                        <div className="order-date">
                            <div className="order-header-label">Order Placed:</div>
                            <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
                        </div>
                        <div className="order-total">
                            <div className="order-header-label">Total:</div>
                            <div>{monocent(order.totalCostCents)}</div>
                        </div>
                        </div>

                        <div className="order-header-right-section">
                        <div className="order-header-label">Order ID:</div>
                        <div>{order.id}</div>
                        </div>
                    </div>

                <div className="order-details-grid">
                    {
                        order.products.map((orderproduct)=>{
                          return(
                            <Fragment key={orderproduct.product.id}>
                            <div className="product-image-container">
                             <img src={orderproduct.product.image} />
                            </div>

                            <div className="product-details">
                            <div className="product-name">
                                {orderproduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderproduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderproduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                            </div>

                            <div className="product-actions">
                            <a href="/track">
                                <button className="track-package-button button-secondary">
                                Track package
                                </button>
                            </a>
                            </div>
                            
                            </Fragment>
                          )
                        })
                    }
                    

 
                </div>
                </div>
                        )
                     })
                }
                    

            </div>
               </div>
        </>
     )
}