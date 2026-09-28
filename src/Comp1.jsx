import { } from "react";

export default function Component1( {counter} ){

     return (
          <>
               <div className="card">
                    <div className="card-body">
                         <h2>Component 1</h2>
                         <p>{counter}</p>
                    </div>
               </div>
          </>
     )
}