import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";
const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://assignment-server-ochre.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])
    return (
        <div className="grid grid-cols-3 gap-6 mt-12">
           {
    reviews.map(review=><MyReviewCard
    key={review._id}
    review={review}
    ></MyReviewCard>)
}
        </div>
    )
}
export default MyReview;
