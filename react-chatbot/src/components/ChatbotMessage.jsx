import   Robot  from '../assets/robot.png'  // ../ represents the outer folder.By using ../ it will look for files outside folder components
import   User   from '../assets/user.png'   //here User is called the default export
import   Spinner from '../assets/loading-spinner.gif'
import './ChatbotMessage.css'

export function ChatbotMessage({ message, sender }) {
      /* if (sender === "user") {
          return (
           <div>
             {message}
             <img src="user.png" width="40px" />
           </div>
          );
        } else {
         return (
          <div>
           <img src="robot.png" width="40px" />
           {message}
          </div>
         );
        }
       }*/ 
      

       return (
        <div className={sender==="user"?"user-class":"robot-class"}>
           {sender==="robot" && 
           (<img className="chat-message-profile" src={Robot}
              
           />)}
           <div className="content-message">
           {message}
           </div>
           {sender==="user"  &&  
           (<img className="chat-message-profile" src={User}
             
           />)}
        </div>
       );
    }