import { Header } from '../HeaderComponents/Header';
import { products } from '../../Javascriptfile/products';
import axios from 'axios'
import './Homepage.css'
export function Homepage(){
   //fetch is a built in function provided by Javascipt.
  //We can not save the data returned by fetch function in a variable.
  //Here the fetch function takes some time to complete its excecution.It does not excecute right away.This type of function is called asynchronous function.
  //fetch returns a promise.Promise helps us wait for asynchronous code to finish.
  //The Backend can run on the frontend computer.
  //axios is the cleaner way to make requests to the backend.
  /* fetch(`http://localhost:3000/api/products`) 
      .then((response)=>{
        response.json()           //.json() method gives us the product data.Here response.json() is asynchronous so it can not be saved in the variable.
      }).then((data)=>{
          console.log(data);      // The overall data that is fetched from the backend.
        })                                       
   */
   axios.get(`http://localhost:3000/api/products`)
       .then((response)=>{
         console.log(response.data);
       })
   return(
   <>
      <title>Homepage</title>
      <link rel="icon" href="home-favicon.png" />
      
    <Header/>
    <div className="home-page">
      <div className="products-grid">
        {products.map((product)=>{
          return(
             <div key={product.id} className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={product.image}/>
          </div>

          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars * 10}.png`}/>
            <div className="product-rating-count link-primary">
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            ৳{(product.priceCents/100).toFixed(2)}
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
          )
        })}
      </div>
    </div>
   </>
   );
}

