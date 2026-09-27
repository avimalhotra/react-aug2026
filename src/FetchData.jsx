import {useEffect, useState} from "react";

export default function FetchAPI(){

     const [cars,setCars]=useState([]);
     const [error,setError]=useState(false);
     const [loading,setLoading]=useState(true);
     const [sort,setSort]=useState("");
 

     useEffect(()=>{
          // fetch("https://www.techaltum.com/node/api").then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e));
          async function getAPI(){
               try{
                    const x=await fetch("https://www.techaltum.com/node/api");
                    if(!x.ok){ throw new Error(x.status) }
                    const y=await x.json();
                    setCars(y);
               }
               catch(err){
                    setError(true);
               }
               finally{
                    setLoading(false);
               }
          }
          getAPI();
     },[]);


     function sortBy(e){
          const srt=e.target.value;
          setSort(srt);
          cars.sort((x,y)=> (x[srt]<y[srt]) ? -1 : 1 );
     }


     return (
          <>
              
               <div className="row justify-content-between mb-3">
                    <div className="col-auto"><h2>API Data</h2></div>
                    <div className="col-auto">
                         <select value={sort} className="form-select" onChange={sortBy}>
                              <option value="" disabled>--Sort By--</option>
                              <option value="name">Name</option>
                              <option value="type">Type</option>
                              <option value="price">Price</option>
                         </select>
                    </div>
               </div>


               { loading && <img src="loader.svg" alt="" width={200} height={200} /> }
               { error && <h3>Error Found</h3> }
               <table className="table table-bordered">
                    <thead className="table-dark">
                         <tr>
                              <th>S No</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Price</th>
                         </tr>
                    </thead>
               <tbody>
                    {
                    cars.map((elem,ind)=>
                         <tr key={ind}>
                              <td>{ind+1}</td>
                              <td>{elem.name}</td>
                              <td>{elem.type}</td>
                              <td>{elem.price.toLocaleString('en-in')}</td>
                         </tr>
                    )
               }
               </tbody>
               </table>

          </>
     )

}