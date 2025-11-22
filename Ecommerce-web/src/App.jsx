import {Homepage} from './Ecommerce pages/Homepage'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router'
import { Checkout } from './Ecommerce pages/Checkout'
import { Order } from './Ecommerce pages/Order'
import  { Track } from './Ecommerce pages/Track'

function App() {
  //Routes is the collection of pages in a website.
  //Route is basically a page in the website.
  //Route path tells the url of the page in the website.
  let [cartitem,setCartItem]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items?expand=product')  //query expander.It is a query parameter that lets us add additional information to the backend api.
        .then((response)=>{
          setCartItem(response.data);
        })
  },[])
  
  return (
    <>
      <Routes>         
        <Route path="/" element={<Homepage cartitem={cartitem}/>}></Route>
        <Route path="checkout" element={<Checkout cartitem={cartitem}/>}></Route>
        <Route path="order" element={<Order/>}></Route>
        <Route path="track" element={<Track/>}></Route>
     </Routes>
    </>
     
    
  )
}

export default App
