import { useEffect} from "react";

export default function Component2(){
       useEffect(()=>{
          const timer=setInterval(()=>console.log("Comp 2"),1000);

          return ()=> clearInterval(timer);
     },[]);
     return (
          <>
               <h2>Component 2</h2>
          </>
     )
}