import { useState, useEffect } from "react";

export default function useFetch(url){

     const [data,setData]=useState([]);
     const [error,setError]=useState(false);
     const [loading,setLoading]=useState(true);

     useEffect(()=>{

          async function fetchData(){
              try{
                    const x=await fetch(url);
                    if(!x.ok){ throw new Error(x.status) }
                    const y=await x.json();
                    setData(y);
              }
              catch(err){
                    setError(err);
              }
              finally{
               setLoading(false);
              }
          }

          fetchData();

     },[url]);

     return { data, loading, error }

}