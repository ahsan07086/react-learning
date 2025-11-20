import { useRef } from 'react'
import { useEffect } from 'react'
import { ChatbotMessage } from './ChatbotMessage';
import './ChatbotMessages.css'

export function ChatbotMessages({chatMessages}){
       
       const chatRef=useRef(null);
       useEffect(
        ()=>{
          const chatvar = chatRef.current;
          if(chatvar){
            chatvar.scrollTop=chatvar.scrollHeight;
          }
        },[chatMessages])          //here, [chatMessages] is a dependency array.It avoid running the function too often.
      
     return (
        <div className="chatbody-container"
         ref={chatRef}> 
           {
              chatMessages.map((array)=>{
              return(
               <ChatbotMessage
                key={array.id}
                message={array.message}        //The {} returns the actual value from the key:value pair in object instead of the string value.
                sender={array.sender}
               />
              )
             }) 
           }
          
        </div>  
     )  
   }