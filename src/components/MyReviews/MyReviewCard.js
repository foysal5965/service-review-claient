import React, { useEffect, useState } from "react";
const MyReviewCard=({review})=>{
  const {img,serviceId}=review
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
  <figure><img src={myReview.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{review.customerName}</h2>
    <p>{review.message}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Delete Now</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default MyReviewCard