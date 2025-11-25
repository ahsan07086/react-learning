import './Homepage.css'
import { Product } from './Product'
export function Productgrid({products,loadcart}){
  //The onClick() is a evenHandler that will be used to add the element inside the cart.
  //The backend handles adding the element inside the cart.
  //In real world the backend is used to add,update and delete the data.
  //In order to add the element to the backend we can do another request.This request to add new element to the backend is done using post method.
  //.get() method is used to request to get data from backend.
  //.post() method is used to update new data to the backend.
  //****React hooks can not be defined inside a loop,condition or callback function. 
    return(
        <>
          <div className="products-grid">
        {products.map((product)=>{
          return(
             <Product 
             key={product.id}
             product={product} 
             loadcart={loadcart}/>
          )
        })}
      </div>
        
        
        </>
    )
}