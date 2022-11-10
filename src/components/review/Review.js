import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import ReviewCard from "./ReviewCard";
const Review=({_id})=>{
    const [reviews, setReviews]= useState([]);
   
   
   

    useEffect(()=>{
        fetch(`https://assignment-server-ochre.vercel.app/review`)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            setReviews(data)
          
        })
    },[])
    return(
        
      <div>
        <h2 className="mt-6 text-2xl font-bold text-orange-400 text-center">Customer Reviwes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                reviews.map(rev=><ReviewCard
                key={rev._id}
                rev={rev}
                ></ReviewCard>)
            }
        </div>
      </div>
    )
}
export default Review;