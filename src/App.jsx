import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import CardComponent from "./Card";
import {useState} from "react";

function App(){

  function sayHi(){ console.log("hello");}

  function greet(x){ 
      if(x<12){ console.log("morning") }
      else if(x<16){ console.log("afternoon") }
      else if(x<24){ console.log("evening") }
      else{ console.log("no argument");
      }
  }

  function sendForm(e){
      e.preventDefault();
      console.log( e.target.name.value );
      console.log( e.target.email.value );
  }


  const [name,setName]=useState("");
  const [chk,setChk]=useState(false);
  const [gender,setGender]=useState("");
  const [day,setDay]=useState("");

  
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>

        <button className="btn btn-primary me-3" onClick={sayHi}>Hello</button>
        <button className="btn btn-primary me-3" onClick={ ()=> greet(new Date().getHours() ) }>Greet</button>

        <hr />

        <form action="" className="row align-items-center" onSubmit={sendForm}>
          <div className="col-auto"><label htmlFor="name">Name:</label></div>
          <div className="col-auto"> <input className="form-control" type="text" name="name" id="name" required /></div>
          <div className="col-auto"><label htmlFor="email">Email:</label></div>
          <div className="col-auto"><input className="form-control" type="email" name="email" id="email" required /></div>
          <div className="col-auto"><button className="btn btn-info">Check</button></div>
          
        </form>

        <hr />

        <input type="text" value={name} onChange={e=>setName(e.target.value)} /> <output>{name}</output>
         <hr />

         <hr />
          <label className="me-3"><input type="radio" name="gender" value="female" checked={gender==="female"}  onChange={e=>setGender(e.target.value)}/> Female</label>
          <label className="me-3"><input type="radio" name="gender" value="male" checked={gender==="male"} onChange={e=>setGender(e.target.value)} /> Male</label>
          <output>{gender}</output>
        <hr />
         <label className="me-3"><input type="checkbox" name="chk" checked={chk} onChange={e=>setChk(e.target.checked)} /> Terms</label>
          { chk && <b>I Agree</b> }
          { !chk && <b>Not Agree</b> }
         <hr />

        <select value={day} onChange={e=>setDay(e.target.value)}>
          <option disabled value="">--Choose Day--</option>
          <option>Sunday</option>
          <option>Monday</option>
        </select>
        <output>{day}</output>
    
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
