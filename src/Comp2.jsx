import { } from "react";

export default function Component2( {counter}){
       
     return (
          <>
               <div className="card">
                    <div className="card-body">
                         <h2>Component 2</h2>
                         <p>{counter}</p>
                    </div>
               </div>
          </>
     )
}