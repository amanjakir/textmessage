import { Link } from "react-router-dom"
import nav_style from "./Navbar.module.css"
import { useState } from "react"
function Navbar(){

    const [is_authenticated,setAuth]=useState(true);
    return(
        <div>
            <nav className={nav_style.navbar}>
                <div className={nav_style.logo}>Navbar</div>
                    <ul className={nav_style["nav-links"]}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/AllMovies">All Movies</Link></li>
                        {is_authenticated?<li><Link to="/register">Register</Link></li>:<li><Link to="">Dashboard</Link></li>}
                    
                    </ul>
            </nav>
        </div>
    )
}
export default Navbar