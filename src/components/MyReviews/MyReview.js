import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import swal from "sweetalert";
const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://assignment-server-ochre.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email]);
    const handleDelete=id=>{
        const procced = window.confirm('are you sure to delete the review');
        if (procced) {
            fetch(`https://assignment-server-ochre.vercel.app/myreviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                      swal('delete succesfully')
                        const remaining = reviews.filter(rev=>rev._id!==id)
                        setReviews(remaining)
                    }
                })
    }
}
    return (
        <div className="grid grid-cols-3 gap-6 mt-12">
           {
    reviews.map(review=><MyReviewCard
    key={review._id}
    review={review}
    handleDelete={handleDelete}
    ></MyReviewCard>)
}
        </div>
    )
}
export default MyReview;
