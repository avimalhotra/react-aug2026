import { Routes, Route } from "react-router-dom";

import HomeComp from "./Home";
import AboutComp from "./About";
import ContactComp from "./Contact";
import Blogs from "./Blogs";

export default function MyRoutes(){
     return (
          <Routes>
               <Route path="/" element={<HomeComp/>} />
               <Route path="/about" element={<AboutComp/>}/>
               <Route path="/blog" element={<Blogs/>}/>
               <Route path="/contact" element={<ContactComp/>}/>
          </Routes>
     )
}