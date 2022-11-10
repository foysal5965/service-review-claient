import React from "react";
import {Link} from 'react-router-dom'

import './allservice.css'
const AllServicesCard=({services})=>{
    const {title,img, detail,_id}=services
    
    
    return(
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" className="zoom" /></figure>
  
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{detail.slice(0,200)+'...'}</p>
    <div className="card-actions justify-center">
      <Link to={`/allServices/${_id}`}>
      <button className="btn btn-primary">Details</button>
      </Link>
    </div>
  </div>
</div>
    )
}
export default AllServicesCard