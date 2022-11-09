import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import image from '../../asserts/login/login.svg'
import { useLocation, useNavigate } from "react-router-dom";
import {FaGoogle} from 'react-icons/fa'
const Signup = () => {
    const{createUser,googleSignin}= useContext(AuthContext);
    const location =useLocation();
    const nevigate= useNavigate();
    const from=location.state?.from?.pathename || '/'
    const handleSubmit=event=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
           nevigate(from, {replace:true})
        })
        .catch(er=>console.log(er))

    }
    const handleGoogleSignin=()=>{
        googleSignin()
        .then(res=>{

        })
        .catch(err=>console.log())
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                   
                 <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl ml-6 p-6 font-bold">Signup now!</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="card-body">
                    <div className="form-control">
                        
                            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                           
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                          
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className="text-sm text-center text-blue-500 font-bold">Singup with social accounts</p>
                            <button className="d
                            flex justify-center mt-4" onClick={handleGoogleSignin}><FaGoogle></FaGoogle></button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Signup