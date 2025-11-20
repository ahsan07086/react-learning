import { useState } from 'react'
import './App.css'
import { LoginInput } from './inputcomponent/loginInput'
import { Button1 } from './b1component/Button1'

function App() {
  const [isBoolean,setisBoolean] = useState(false)
  return (
    <div>
       <h1 className="header">Hello, welcome to my website</h1>
       <LoginInput
       isBoolean = {isBoolean}
       setisBoolean = {setisBoolean}
       />
       <br></br>
       <br></br>
       <Button1/>
       
    </div>
  )
}

export default App
