import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import Component1 from "./Comp1";
import Component2 from "./Comp2";
import useCounter from "./UseCounter";
import useFetch from "./useFetch";

function App(){

  const {counter,state, increment, decrement, reset }=useCounter(0);
  const {data, loading, error}=useFetch("https://techaltum.com/node/api");

  if(loading){ return  <p>Loading Data</p> }
  if(error){ return  <p>Error</p> }
    
  return (
      <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>
       
        <hr />

        <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
        <button className="btn btn-primary mx-3" onClick={decrement}>Decrement</button>
        <button className="btn btn-primary mx-3" onClick={reset}>Reset</button>

          Counter: <span>{counter}</span>,
          Initial Value: <span>{state}</span>

        <hr />
        <h3>Custom Hook</h3>
        <p>{loading}</p>
        <p>{error}</p>
        <table className="table table-border">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map(((i,j)=>(
              <tr key={i.name}>
                <td>{++j}</td>
                <td>{i.name}</td>
                <td>{i.type}</td>
                <td>{i.price}</td>
              </tr>
            )))
          }
          </tbody>
        </table>
       
        <hr />

       

      <div className="row">

          <div className="col">
            <Component1 />
          </div>
          <div className="col">
            <Component2 />
          </div>

      </div>

      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
