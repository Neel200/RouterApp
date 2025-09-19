import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return(
        <div className="template-container">
            <div className="template-left">
                <h1 className="template-title">{title}</h1>
                <p className="template-desc">
                    <span className="desc1">{desc1}</span>
                    <span className="desc2">{desc2}</span>
                </p>
                {formtype==="signup"?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}                  
                {formtype==="login"&&
                    <div>
                        <div className="divider">
                            <div className="line"></div>
                            <p>OR</p>
                            <div className="line"></div>
                        </div>
                        <button className="google-btn full-width">
                            <FcGoogle/>
                            <p>Sign In with Google</p>
                        </button>
                    </div>
                }
            </div>
            <div className="template-right">
                <img src={frameImage} alt="Pattern" 
                width={558} height={504} loading="lazy"/>
                <img src={image} alt="Pattern" 
                width={558} height={490} loading="lazy"
                className="overlay-img"/>
            </div>
        </div>
    )
}
export default Template;