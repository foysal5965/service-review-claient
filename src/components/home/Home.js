import React from "react";
import Banner from "./banner/Banner";
import {useLoaderData ,Link} from 'react-router-dom'
import HomeServiceCard from "./HomeServiceCard";
const Home=()=>{
    const services= useLoaderData()
    return(
        <div>
            
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-orange-300 text-center mt-6">My services</h2>
          <div className="grid grid-cols-3 mt-12">
            {
                services.map(service=><HomeServiceCard
                key={service._id}
                service={service}
                ></HomeServiceCard>)
            }
           
         
           
          </div>
          <div className="card-actions justify-center">
          <Link to='/allServices'>
          <button className="btn btn-primary mt-6 ">all services</button>
          </Link>
          </div>
        </div>
    )
}
export default Home;