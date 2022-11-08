import React, { useContext, useState } from "react";
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthProvider";
const ServiceDetail = () => {
    const selectedService = useLoaderData()
    const{user}= useContext(AuthContext)
    const{img,title,detail,fee,duration,_id}= selectedService;
    const [reviews, setReviews]= useState([])
    const handleSubmit=event=>{
        event.preventDefault()
        const form= event.target;
        const name= `${form.firstname.value} ${form.lastname.value}`;
        const email= user?.email
        const phone= form.phone.value;
        const message= form.massege.value;
        const review={
            serviceId:_id,
            sserviceName:title,
            customerName:name,
            email,
            phone,
            message
        }
        console.log(review)
        fetch('http://localhost:5000/review',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },

            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
           
            setReviews(data)
            form.reset()
        })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-12">
               <img src={img} className="w-full" alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{detail}</p>
                    <p>Duration: {duration}months</p>
                    <p className="text-2xl text-bold text-orange-400">Fee: {fee}</p>
                   
                </div>
            </div>
            {
                user?.email ?
                <>
                <h4 className="text-2xl font-bold text-center mt-6">Reviw the service</h4>
            <form className="mt-20" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-16">

            <input type="text" name="firstname" placeholder="First Name" className="input input-ghost w-full input-bordered" />
            <input type="text" name="lastname" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
            <input type="text" name="email" placeholder="Email"  className="input input-ghost w-full input-bordered" />
            <input type="text" placeholder="Phone" name="phone"  className="input input-ghost w-full input-bordered" />
            </div>
            <textarea name="massege" className="textarea w-full textarea-bordered mt-6" placeholder="Your massege"></textarea>
            <button className="btn btn-primary">Review</button>
        </form>
        {
            reviews.length
        }
                </>:
                <h5>please loging</h5>
            }
        </div>
    )
}
export default ServiceDetail