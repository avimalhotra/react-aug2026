import { useState } from "react";

export default function useCounter( state=0 ){

     const [counter,setCounter]=useState(state);

     const increment = () => setCounter(count=>count+1);
     const decrement = () => setCounter(count=>count-1);
     const reset = () => setCounter(state);
     
     return {counter, state, increment, decrement, reset };
}