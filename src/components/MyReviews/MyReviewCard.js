import React, { useEffect, useState } from "react";
const MyReviewCard=({review,handleDelete})=>{
  const {img,serviceId,_id}=review
  const [myReview, setMyReview]=useState({});
  useEffect(()=>{
    fetch(`https://assignment-server-ochre.vercel.app/allServices/${serviceId}`)
    .then(res=>res.json())
    .then(data=>setMyReview(data))
  },[serviceId])
  console.log(review)
    return(
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
 <div className="avatar">
<div className="w-24 rounded-full">
<img src={myReview.img} alt="" />
</div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{review.customerName}</h2>
    <h2>{myReview.title}</h2>
    <p>{review.message}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete Now</button>
   
    </div>
    
  </div>
</div>
        </div>
    )
}
export default MyReviewCard