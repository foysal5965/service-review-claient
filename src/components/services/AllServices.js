import React from "react";
import{useLoaderData} from 'react-router-dom'
import AllServicesCard from "./AllServicesCard";
const AllServices=()=>{
    const allServices= useLoaderData()
    return(
        <div>
            <h1 className="text-2xl mt-6 font-bold text-center">All Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    allServices.map(services=><AllServicesCard
                    key={services._id}
                    services={services}
                    >

                    </AllServicesCard>)
                }
            </div>
        </div>
    )
}
export default AllServices;