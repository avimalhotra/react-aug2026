import UserContext from "./contextapi";
import {useContext} from "react";

export default function Component22( ){

     const user=useContext(UserContext);
       
     return (
          <>
               <div className="card">
                    <div className="card-body">
                         <h2>Component 22</h2>
                         <p> {user.name} as {user.role} </p>
                    </div>
               </div>
          </>
     )
}