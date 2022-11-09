import React from "react";
import swal from "sweetalert";
const AddReviews = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form= event.target;
        const title=form.title.value;
        const img= form.img.value;
        const fee= form.fee.value;
        const detail=form.detail.value;
        const service={
            title,
            img,
            fee,
            detail,

        }
        console.log(service)
        fetch('https://assignment-server-ochre.vercel.app/addServices',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },

            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                swal('service added successfuly')
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-6">Add A New Service </h2>
            <form onSubmit={handleSubmit}>
                <div className="mt-16">

                    <input type="text" name="title" placeholder="title"  className="input input-ghost w-full input-bordered mt-6" /><br />
                    <input type="text" name="img" placeholder="image"  className="input input-ghost w-full input-bordered  mt-6" /><br />
                    
                    <input type="text" placeholder="fee" name="fee"  className="input input-ghost w-full input-bordered mt-6" /><br />
                    <textarea name="detail"  className="textarea w-full textarea-bordered mt-6" placeholder="details"></textarea><br />
                    <input type="submit" value="add service" />
                </div>
            </form>
        </div>
    )
}
export default AddReviews