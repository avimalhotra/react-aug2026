import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import CardComponent from "./Card";
import {useState} from "react";
import GreetUser from "./Greet";

function App(){

  const [counter,setCounter]=useState(0);

  const cars=["swift","alto","brezza","baleno"];
  const car={name:"swift", power:82, torque:112, price:800000};
  const data=[
    {"id":1,"name":"swift","type":"hatchback","price":870000},
    {"id":2,"name":"dzire","type":"sedan","price":980000},
    {"id":3,"name":"baleno","type":"hatchback","price":880000},
    {"id":4,"name":"fronx","type":"hatchback","price":1150000},
    {"id":5,"name":"brezza","type":"suv","price":1250000},
    {"id":6,"name":"grand vitara","type":"suv","price":1990000},
    {"id":7,"name":"alto","type":"hatchback","price":380000},
    {"id":8,"name":"wagon r","type":"hatchback","price":500000},
  ];

  data.sort((x,y)=>{
      // if(x.price<=y.price){ return 1 }
      // else{ return -1 }
      return (x.price<=y.price) ? -1 : 1;
  });

  // const nums=[1,9,10,2,5,6,4];
  // const even=nums.filter(i=>i%2==0);
  // const suv=data.filter(i=>i.type=="suv");
  
  // const sum=nums.reduce((x,y)=>x+y,0);


  const t=2;
  const n="aa";
  
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main</h2>
        <p>Paragrapgh</p>
        
        <GreetUser time={10}></GreetUser>

        {/* <p> {(t%2==0) ? "even" : "odd"}</p> */}
        <p> N is : { n && "valid" }</p>
          
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter+1)}>Increment</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button className="btn btn-outline-danger me-2" onClick={()=>setCounter(0)}>Reset</button>
        <output>Counter : {counter}</output>
       
      <hr />
      <h3>Array</h3>
      <ol>
        { cars.map((elem,ind)=>(
          <li key={ind}>{elem}</li>
        )) }
      </ol>
      <h3>Object</h3>
      <ol>
        {
          Object.entries(car).map(([key,value],ind)=>(
            <li key={ind}>{key} - {value} </li>
          ))
        }
      </ol>
      <h3>JSON Array of Object</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map(elem=>(
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.type}</td>
                  <td>{elem.price}</td>
                </tr>
              ))
            }
        </tbody>
      </table>


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
