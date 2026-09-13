import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import CardComponent from "./Card";
import {useState} from "react";

function App(){

  const [counter,setCounter]=useState(0);
  // const [name,setName]=useState("");
  // const [age,setAge]=useState(0);
  const [user,setUser]=useState({name:"",age:"",email:"", city:""});

  function changeUser(e){
    const {name,value}=e.target;
    setUser(prev=>({...prev, [name]:value}))
  }

  // console.log( counter );

  function handleClick(){ 
    // setCounter(counter+1);
    // setCounter(counter+2);
    // setCounter(counter+3);
    // setCounter(counter=>counter+1);
    // setCounter(counter=>counter+2);
    // setCounter(counter=>counter+3);
  }
  
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main 1</h2>
        <p>Paragrapgh</p>
       
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter+1)}>Increment</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(0)}>Reset</button>
        <output className="me-2">Counter : {counter}</output>
        <button className="btn btn-outline-danger me-2" onClick={handleClick}>Handle Click</button>
       
      <hr />

      {/* <input type="text" placeholder="name" value={name} onChange={e=>setName(e.target.value)} /> */}
      {/* <input type="number" placeholder="age" value={age} onChange={e=>setAge(e.target.valueAsNumber)} /> */}
      
      <label>Name: <input type="text" placeholder="name" name="name" value={user.name} onChange={changeUser} /></label>
      <label>Age: <input type="number" placeholder="age" name="age" value={user.age} onChange={changeUser} /></label>
      <label>Email: <input type="email" placeholder="Email" name="email" value={user.email} onChange={changeUser} /></label>
      <label>City: <input type="text" placeholder="city" name="city" value={user.city} onChange={changeUser} /></label>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
      
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
