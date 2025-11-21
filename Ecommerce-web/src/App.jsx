import {Homepage} from './Ecommerce pages/Homepage'
import './App.css'
import { Route, Routes } from 'react-router'
import { Checkout } from './Ecommerce pages/Checkout'

function App() {
  //Routes is the collection of pages in a website.
  //Route is basically a page in the website.
  //Route path tells the url of the page in the website.
  return (
    <>
      <Routes>         
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="checkout" element={<Checkout/>}></Route>
     </Routes>
    </>
     
    
  )
}

export default App
