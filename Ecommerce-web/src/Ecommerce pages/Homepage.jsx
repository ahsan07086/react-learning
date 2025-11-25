import { Header } from '../HeaderComponents/Header';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Homepage.css'
import { Productgrid } from './Product-grid';
import { Slider } from './Slider';
export function Homepage({cartitem,loadcart}){
   //fetch is a built in function provided by Javascipt.
  //We can not save the data returned by fetch function in a variable.
  //Here the fetch function takes some time to complete its excecution.It does not excecute right away.This type of function is called asynchronous function.
  //fetch returns a promise.Promise helps us wait for asynchronous code to finish.
  //The Backend can run on the frontend computer.
  //axios is the cleaner way to make requests to the backend.
  //Strictmode helps us use useEffect twice to catch the bug and helps us development.
  /* fetch(`http://localhost:3000/api/products`) 
      .then((response)=>{
        response.json()           //.json() method gives us the product data.Here response.json() is asynchronous so it can not be saved in the variable.
      }).then((data)=>{
          console.log(data);      // The overall data that is fetched from the backend.
        })                                       
   */
    //Products and Cartitems are array of object.
    let [products,setProducts]=useState([]);
    
    //Here useEffect is used to ensure that the data is fetched only one time after reload of the Homepage.
    //Async Await is a feature in Javascript to fetch data.
    //It makes the asynchronous code works like the normal code.
    //The async await function returns a promise to the function.
    //The function getData holds the promise data.
    useEffect(()=>{
     const getData=async ()=>{
       const response = await axios.get('http://localhost:3000/api/products')  
          setProducts(response.data);                //The response will be returned in the array format since we are using axioms and get method to fetch the data.
     }
     getData();   
    },[])
   return(
   <>
      <title>Homepage</title>
      <link rel="icon" href="home-favicon.png" />
      
    <Header cartitem={cartitem}/>
    <div className="home-page">
      <Productgrid products = {products} loadcart = {loadcart}/>
    </div>
   </>
   );
}

