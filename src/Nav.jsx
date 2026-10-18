import { Link } from "react-router-dom";

export default function NavBar(){
     return (
          <nav className="bg-danger-subtle">
               <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/blog">Blogs</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
               </ul>
          </nav>
     )
}