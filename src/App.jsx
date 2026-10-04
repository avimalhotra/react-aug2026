import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import { useState, useReducer } from "react";
import Component1 from "./Comp1";
import Component2 from "./Comp2";

import UserContext from "./contextapi";

function App(){

  // const [count,setCount]=useState(0);
  const data = { name: "Avinash", role: "Trainer" };
  const initialState={count:0}

  function reducer(state,action){
    switch(action.type){
      case "increment": return { count:state.count+1 };
      case "decrement": return { count:state.count-1 };
      case "reset": return { count: initialState.count };
      default : return state;
    }
  }

  const [ state, dispatch] =useReducer(reducer, initialState)
  
    
  return (
    <UserContext.Provider value={data}>
      <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>
      

      <hr />
        {/* <button onClick={()=>setCount(count+1)} className="btn btn-info">Counter</button> <output>{count}</output> */}

          <button className="btn btn-success me-3" onClick={()=>dispatch({type:"increment"})}>Add</button>
          <button className="btn btn-danger me-3" onClick={()=>dispatch({type:"decrement"})}>Subtract</button>
          <button className="btn btn-primary me-3" onClick={()=>dispatch({type:"reset"})}>Reset</button>
          Current: <output className="me-3">{state.count}</output>,
          Initial: <output>{initialState.count}</output>
        
        <hr />

      <div className="row">

          <div className="col">
            <Component1/>
          </div>
          <div className="col">
            <Component2 />
          </div>

      </div>

      </main>
      <FooterComponent />
    </div>
    </UserContext.Provider>
  );
}

export default App;
