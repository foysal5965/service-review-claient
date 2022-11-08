import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import image from '../../../asserts/login/login.svg'
const Login=()=>{
    const{login}= useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault()
        const form= event.target;
        const email = form.email.value;
        const password= form.password.value
        login(email,password)
        .then(res=>{

        })
        .catch(er=>console.log(er))
    }
    return (
        <div>
            <div className="hero mt-20 p-20 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
  <img src={image} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl ml-12 p-6 font-bold">Login now!</h1>
     <form onSubmit={handleSubmit}>
     <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
     </form>
    </div>
  </div>
</div>
        </div>
    )
}
export default Login