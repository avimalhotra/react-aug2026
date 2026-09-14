import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import CardComponent from "./Card";
import {useState} from "react";

function App(){

  const [counter,setCounter]=useState(0);
  const [user,setUser]=useState({name:"",age:"",email:"", city:""});
  const [cars,setCars]=useState([]);


  function changeUser(e){
    const {name,value}=e.target;
    setUser(prev=>({...prev, [name]:value}));
  }

  function addCar(){
      setCars(e=>[...e,"dzire"]);
  }

  function removeSwift(){
    setCars(cars.filter(i=>i!="swift"));
  }

   function updateCars(){
    setCars(cars.map(i=>i.toUpperCase()));
   }

   function addCarData(e){
      e.preventDefault();
      const car=e.target.car.value;
      if(!cars.includes(car)){ setCars( e=>[...e,car] ) }  
   }


   function callMe(x){
    console.log(`hello ${x}`);
   }

  
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        {/* <h2 title="avi" onClick={callMe}>Main </h2> */}
        <h2 title="avi" onClick={()=>callMe("avi")}>Main 1</h2>
        <h2 title="avi" onClick={()=>callMe("isha")}>Main 2</h2>
        <p>Paragrapgh</p>
       
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter+1)}>Increment</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(0)}>Reset</button>
        <output className="me-2">Counter : {counter}</output>
        
      <hr />

      <label>Name: <input type="text" placeholder="name" name="name" value={user.name} onChange={changeUser} /></label>
      <label>Age: <input type="number" placeholder="age" name="age" value={user.age} onChange={changeUser} /></label>
      <label>Email: <input type="email" placeholder="Email" name="email" value={user.email} onChange={changeUser} /></label>
      <label>City: <input type="text" placeholder="city" name="city" value={user.city} onChange={changeUser} /></label>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
      
      <hr />

      <button className="btn btn-primary me-3" onClick={addCar}>Add </button>
      <button className="btn btn-primary me-3" onClick={removeSwift}>Remove</button>
      <button className="btn btn-primary me-3" onClick={updateCars}>Update</button>
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

        <h2>Todo List</h2>
        <form className="row align-items-center mb-3" onSubmit={addCarData}>
        <div className="col-auto">
          <label className="form-label m-0">Add Car:</label>
        </div>
        <div className="col-auto">
          <input type="text" name="car" required className="form-control"/>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary">Add</button>
        </div>
        </form>
      <ol>
          { cars.map((elem,ind)=>(
            <li key={ind}>{elem}</li>
          )) }
      </ol>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
