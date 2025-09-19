import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SignupForm=({setIsLoggedIn})=>{
    const [formData,setFormData]=useState({
        firstName:"",lastName:"",email:"",
        password:"",confirmPassword:""
    })
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]=useState("student");
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
        if (formData.password!=formData.confirmPassword){
            toast.error("Password do not match");
            return;
        } 
        setIsLoggedIn(true);
        toast.success("Account Created");   
        navigate("/login");
    }
    return(
        <div>
            <div className="account-type-toggle">
                <button className={accountType==="student" ? "tab active" : "tab"} 
          onClick={()=> setAccountType("student")}>Student</button>
                <button className={accountType==="instructor" ? "tab active" : "tab"} 
          onClick={()=> setAccountType("instructor")}>Instructor</button>
            </div>
            <div className="form-container">
            <form onSubmit={submitHandler} 
            className="signup-form">
                <div className="form-row">
                    <label className="form-label">
                        <p>First Name<sup className="required">*</sup></p>
                        <input required type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        className="form-input"/>
                    </label>
                    <label className="form-label">
                        <p>Last Name<sup className="required">*</sup></p>
                        <input required type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder="Enter last name"
                        className="form-input"/>
                    </label>
                </div>
                <label className="form-label">
                    <p>Email Address<span className="required">*</span></p>
                    <input required type="email" 
                    value={formData.email} 
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter email"
                    className="form-input"/>
                </label>
                <div className="form-row">
                    <label className="form-label password-label">
                        <p>Create Password<span className="required">*</span></p>
                        <input required 
                        type={showPassword ? ("text"):("password")} 
                        value={formData.password} 
                        onChange={changeHandler}
                        name="password"
                        placeholder="Enter password"
                        className="form-input"/>
                        <span className="password-toggle" onClick={()=>
                            setShowPassword((prev)=>!prev)
                        }>
                            {showPassword?
                            (<AiOutlineEyeInvisible fontSize={24} 
                            fill="#AFB2BF"/>):
                            (<AiOutlineEye fontSize={24} 
                            fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    <label className="form-label password-label">
                        <p>Confirm Password<span className="required">*</span></p>
                        <input required 
                        type={showConfirmPassword ? ("text"):("password")} 
                        value={formData.confirmPassword} 
                        onChange={changeHandler}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-input"/>
                        <span className="password-toggle" onClick={()=>
                            setShowConfirmPassword((prev)=>!prev)
                        }>
                            {showPassword?
                            (<AiOutlineEyeInvisible fontSize={24} 
                            fill="#AFB2BF"/>):
                            (<AiOutlineEye fontSize={24} 
                            fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>
                <button className="btn-primary full-width">Create Account</button>
            </form>
            </div>
        </div>
    )
}
export default SignupForm;