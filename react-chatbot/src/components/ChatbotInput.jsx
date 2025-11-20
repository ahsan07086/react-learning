import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import   Spinner from '../assets/loading-spinner.gif'
import './ChatbotInput.css'


export function ChatbotInput({chatMessages,setChatMessage,setisLoading}){  
    const [val,setval] = useState('');
    function sendInput(event){
          setval(
            event.target.value
           )
      }  
       async function sendKey(event){
         if(event.key=="Enter"){
         const newchatMessages12=[   
            ...chatMessages,
            {
                id: crypto.randomUUID(),
                message: val,
                sender: 'user'
            }
         ]
         setChatMessage(newchatMessages12);
          setval('');
          setisLoading(true);
          event.preventDefault();
          setChatMessage([
            ...newchatMessages12,
            {
                id: crypto.randomUUID(),
                message: <img className="spinner" src={Spinner} alt="image.gif" />,
                sender: 'robot'
            }   
          ]);
         //const response1=Chatbot.getResponse(val);
         const response=await Chatbot.getResponseAsync(val);
         
         setisLoading(false);
         
         
         setChatMessage([
            ...newchatMessages12,
            {
                id: crypto.randomUUID(),
                message: response,
                sender: 'robot'
            }   
          ])
       
         }
        }                  
        return (
        <div> 
          <h3 className={chatMessages.length===0?"titlechatbox":"visibility"}>Welcome to the chatbot project! Send a message using the textbox below.</h3>                                         
           <input 
              type="text" 
              className={chatMessages.length===0?"label1":"label2"}
              placeholder="Send a message to Chatbot" 
              size="72"
              onChange = {sendInput}
              onKeyDown = {sendKey}
              value = {val}
          />                          
        </div>
        );                              
      }