import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import CardComponent from "./Card";
import {useState} from "react";

function App(){

  console.log(new Date().toLocaleString());
  
  const [counter,setCounter]=useState(0);
 
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main</h2>
        <p>Paragrapgh</p>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter+1)}>Increment</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(0)}>Reset</button>
        <output>Counter : {counter}</output>
        {/* <img src="bat.svg" alt="batman" width={300} height={120} />
        <label htmlFor="name">Name</label><input type="text" name="name" id="name" /> */}
      <hr />
      <h2>Courses</h2>
        <div className="row">
            <div className="col-md-6">
              <CardComponent course="React 19 with Next.js" duration={4} des="React 19 with Next JS, TypeScript, Tailwind CSS and project"></CardComponent>
            </div>
            <div className="col-md-6">
              <CardComponent course="Angular 22" duration={3} des="Angular 22 with TypeScript, Signals, Modules, Services and Project"></CardComponent>
            </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
