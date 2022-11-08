import React from "react";
import { Link } from "react-router-dom";
const HomeServiceCard = ({ service }) => {
    const { img, title ,_id} = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions justify-center">
                       <button className="btn btn-primary">

                       <Link to={`/allServices/${_id}`}>details</Link>
                       </button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}
export default HomeServiceCard;