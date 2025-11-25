import './Checkout.css'
import { monocent } from '../utilities/monocent.js'
import { Optiondelivery } from './optiondelivery.jsx';
export function Orderdelivery({cartdelivery,item,loadcart}){   
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
                     <Optiondelivery 
                      PriceTag={PriceTag}
                      delivery={delivery}
                      item={item}
                      loadcart = {loadcart}
                     />
                    )
                  })
                }
              </div>
    )
}