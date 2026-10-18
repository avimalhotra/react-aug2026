import Component1 from "./Comp1";
import Component2 from "./Comp2";
import React, { Suspense } from "react";
const Lazy=React.lazy(()=>import("./FetchData"));

export default function HomeComp(){
     return (
     <>
     <h2>Homepage </h2>
        <p>Paragrapgh</p>

      <hr />

      <Suspense fallback={<img src="./loader.svg" alt="" />}>
        <Lazy></Lazy>
      </Suspense>

      <hr />

      <div className="row">

          <div className="col">
               <Component1 id={3} name="aaa" />
          </div>
          <div className="col">
                <Component2 />
          </div>

      </div>
     
          </>
     )
}