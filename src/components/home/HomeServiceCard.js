import React from "react";
const HomeServiceCard = ({ service }) => {
    const { img, title } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
                
        </div>
    )
}
export default HomeServiceCard;