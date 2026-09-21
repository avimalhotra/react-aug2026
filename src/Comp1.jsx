import { useEffect} from "react";

export default function Component1(){
     
    useEffect(()=>{
             const timer=setInterval(()=>console.log("Comp 1"),1000);
   
             return ()=> clearInterval(timer);
        },[]);

     return (
          <>
               <h2>Component 1</h2>
          </>
     )
}