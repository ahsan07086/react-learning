import './Checkout.css'
import { monocent } from '../utilities/monocent.js'
import dayjs from 'dayjs'
export function Orderdelivery({cartdelivery,item}){
    return(
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
                    <input type="radio" checked={delivery.id===item.deliveryOptionId}
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
    )
}