import "./loginInput.css"
import { useState } from "react"
import PasswordUnLock from "../assets/password-44.svg"
import PasswordLock from "../assets/password-26.svg"
export function LoginInput({isBoolean,setisBoolean}){
  let [Count,setCount] = useState(0);
  function sendHidePass(){
    setCount(Count+1);
    if(Count%2!==0)
    {
     setisBoolean(
      true
    )
    }
    else{
       setisBoolean(
        false
     )
    }
  }
  return(
    <div className="inputs">
       <img src={isBoolean===true?PasswordUnLock:PasswordLock} className="img-pos" onClick={sendHidePass}/>
       <input type="text" className="input1" placeholder="Email" />
       <input type={isBoolean===true?"text":"password"} className="input1" placeholder="Password" />
    </div>
  )
   
}