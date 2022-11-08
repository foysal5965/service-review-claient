import React from "react";
import { useLoaderData } from 'react-router-dom'
const ServiceDetail = () => {
    const selectedService = useLoaderData()
    const{img,title,detail,fee,duration}= selectedService
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
            <h4>Reviw the service</h4>
            <form className="mt-20" >
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">

            <input type="text" name="firstname" placeholder="First Name" className="input input-ghost w-full input-bordered" />
            <input type="text" name="lastname" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
            <input type="text" name="email" placeholder="Email"  className="input input-ghost w-full input-bordered" />
            <input type="text" placeholder="Phone" name="phone"  className="input input-ghost w-full input-bordered" />
            </div>
            <textarea name="massege" className="textarea w-full textarea-bordered" placeholder="You massege"></textarea>
            <button className="btn btn-primary">Place order</button>
        </form>
        </div>
    )
}
export default ServiceDetail