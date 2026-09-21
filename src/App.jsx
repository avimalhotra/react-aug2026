import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
// import CardComponent from "./Card";
import Component1 from "./Comp1";
import Component2 from "./Comp2";
import {useState, useEffect} from "react"

function App(){

    const [counter, setCounter]=useState(0);
    const [counter2, setCounter2]=useState(0);
    const [terms,setTerms]=useState(false);

    
    // useEffect(()=>{
    //     console.log("use effect");           // always run on change
    // });

    // useEffect(()=>{
    //     console.log("use effect with dep");
    // },[counter2]);

    // useEffect(()=>{
    //     setInterval(()=>console.log(new Date()),1000);
    // });

  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>

        <button className="btn btn-primary me-3" onClick={()=>setCounter(counter+1)}>Counter 1</button>
        <output>{counter}</output>
        <button className="btn btn-primary mx-3" onClick={()=>setCounter2(counter2+1)}>Counter 2</button>
        <output>{counter2}</output>

        <hr />

        <div className="form-check form-switch p-0">
          <label className="form-check-label" htmlFor="switchCheckDefault">Comp 1</label>
          <input className="form-check-input float-none mx-3" type="checkbox" role="switch" id="switchCheckDefault" onChange={e=>setTerms(e.target.checked)} />
          <label className="form-check-label" htmlFor="switchCheckDefault">Comp 2</label>
        </div>

        { !terms && <Component1></Component1>}
        { terms && <Component2></Component2>}
        

  
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
