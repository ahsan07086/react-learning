import { useState } from 'react'
import { ChatbotInput } from './components/ChatbotInput'
import { ChatbotMessages } from './components/ChatbotMessages'
import './App.css'

function App() {
  const [isLoading,setisLoading]=useState(false);
      const [chatMessages,setChatMessage]=useState([]);
      // const chatMessages=arrays[0];           //The React.useState() always return an array.
      // const setChatMessage=arrays[1];        //chatMessage = This function holds the initial value of the array which is the current value of the array.                                    
       return(
        <div className="body">
           <ChatbotMessages
           chatMessages = {chatMessages}
           
           />
           <br></br>
           <br></br>
            <ChatbotInput  
           chatMessages = {chatMessages}
           setChatMessage = {setChatMessage}
           isLoading = {isLoading}
           setisLoading = {setisLoading}
           />
        </div>
       );
}
export default App
