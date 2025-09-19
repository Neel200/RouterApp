import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginForm=({setIsLoggedIn})=>{
    const [formData,setFormData]=useState({
        email:"",password:""
    });
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return(
        <form onSubmit={submitHandler}>
            <label className="form-label">
                <p>Email Address<span className="required">*</span></p>
                <input required type="email" 
                value={formData.email} 
                onChange={changeHandler}
                name="email"
                placeholder="Enter email"
                className="form-input"/>
            </label>
            <label className="form-label password-label">
                <p>Password<span className="required">*</span></p>
                <input required 
                type={showPassword ? ("text"):("password")} 
                value={formData.password} 
                onChange={changeHandler}
                name="password"
                placeholder="Enter password"
                className="form-input"/>
                <span className="password-toggles" onClick={()=>
                    setShowPassword((prev)=>!prev)
                }>
                    {showPassword?
                    (<AiOutlineEyeInvisible fontSize={24} 
                    fill="#AFB2BF"/>):
                    (<AiOutlineEye fontSize={24} 
                    fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
                    <p className="forgot-password">Forgot Password?</p>
                </Link>
            </label>
            <button className="btn-primary full-width">Sign In</button>
        </form>
    )
}
export default LoginForm;