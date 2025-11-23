import { Header } from '../HeaderComponents/Header';
import { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';
import { Ordergrid } from './Order-grid';
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
                 <Ordergrid orderitem={orderitem}/>
               </div>
        </>
     )
}