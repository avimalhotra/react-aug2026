// import React, { Suspense } from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

// import { useState } from "react";
// import FetchAPI from "./FetchData";
// const Lazy=React.lazy(()=>import("./FetchData"));
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routess";
import NavBar from "./Nav";

function App(){

  return (
     <BrowserRouter>
      <div className="container">
      
      <HeaderComponent />
      
      <NavBar />
      
      <main className="p-3 bg-primary-subtle">

        <MyRoutes></MyRoutes>

      </main>
     
        <FooterComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;