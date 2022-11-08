import React from "react";
import Banner from "./banner/Banner";
import {useLoaderData} from 'react-router-dom'
import HomeServiceCard from "./HomeServiceCard";
const Home=()=>{
    const services= useLoaderData()
    return(
        <div>
            
            <Banner></Banner>
          <div>
            {
                services.map(service=><HomeServiceCard
                key={service._id}
                service={service}
                ></HomeServiceCard>)
            }
          </div>
        </div>
    )
}
export default Home;