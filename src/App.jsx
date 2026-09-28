import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import {useRef, useState } from "react";
import Component1 from "./Comp1";
import Component2 from "./Comp2";

function App(){

  const [count,setCount]=useState(0);
  const data=[
    { name:"lorem", id:1, price:2 },
    { name:"ipsum", id:2, price:3 },
    { name:"dolor", id:3, price:5 },
  ];

  // const total=data.reduce((x,y)=>x+y.price,0);
  // console.log( total );

    

    const ref=useRef(0);
    const inputRef=useRef(null);

    function changeRef(){ ref.current=ref.current+1; console.log( ref );}

    function focusRef(){ inputRef.current.focus() }
    
    
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>
      <hr />

      <button onClick={changeRef} className="btn btn-info me-3">Change Ref</button>

      <span>ref: {ref.current}</span>

      <hr />
        <button onClick={()=>setCount(count+1)} className="btn btn-info">Counter</button> <output>{count}</output>

        <div className="row my-3">
          <div className="col-auto">
            <input type="text" className="form-control" ref={inputRef} />
          </div>
          <div className="col-auto">
            <button onClick={focusRef} className="btn btn-primary me-3">Focus</button>
          </div>
        </div>

        <hr />

      <div className="row">

          <div className="col">
            <Component1 counter={count} />
          </div>
          <div className="col">
            <Component2 counter={count}/>
          </div>

      </div>

      
     
    


      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
