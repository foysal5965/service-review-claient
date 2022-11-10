import React from "react";
import logo from '../../asserts/avatar.png'
const ReviewCard=({rev})=>{
    const {message,customerName,img,serviceName}=rev

    return (
        <div>
     
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <div className="avatar">
  <div className="w-24 rounded-full">
    {
        img ? <img src={img} />: <img src={logo} />
    }
  </div>
</div>
<h2 className="card-title">{serviceName}</h2>
    <h2 className="text-xl font-semi-bold ">{customerName}</h2>
    <p>{message}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    )
}
export default ReviewCard