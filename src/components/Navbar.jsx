import React from "react";
import logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
const Navbar=(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <NavLink to="/">
                    <img src={logo} width={160} height={32} 
                    loading="lazy"/>
                </NavLink>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    {!isLoggedIn &&
                        <NavLink to="/login">
                            <button className="btn">
                                Login
                            </button>
                        </NavLink>
                    }
                    {!isLoggedIn &&
                        <NavLink to="/signup">
                            <button className="btn">
                                Sign Up
                            </button>
                        </NavLink>
                    }
                    {isLoggedIn &&
                        <NavLink to="/">
                            <button className="btn" onClick={()=>{
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                            }}>
                                Log Out
                            </button>
                        </NavLink>
                    }
                    {isLoggedIn &&
                        <NavLink to="/dashboard">
                            <button className="btn">
                                Dashboard
                            </button>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar;