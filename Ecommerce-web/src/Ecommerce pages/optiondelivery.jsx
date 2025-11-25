import axios from 'axios';
import dayjs from 'dayjs'
export function Optiondelivery({PriceTag,delivery,item,loadcart}){
      //The update select function will update the delivery product.
    const UpdateselectOption = async ()=>{
        await axios.put(`http://localhost:3000/api/cart-items/${item.productId}`,{
            deliveryOptionId: delivery.id                                                                     //It is the request body of the Put method.
        });
        await  loadcart();
    };
   return(
     <div key={delivery.id} className="delivery-option" onClick={UpdateselectOption}>
                    <input type="radio" checked={delivery.id===item.deliveryOptionId}
                      onChange={()=>{}}
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
}