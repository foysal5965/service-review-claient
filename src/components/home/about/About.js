import React from "react";
const About = () => {
    return (
       <div>
         <div className="grid  lg:grid-cols-2 gap-6 mt-6 justify-items-center">
            <div className="mt-32 ml-40">
                <h2 className="text-xl font-bold">Transformative Individualized Treatment</h2>
                <h6 className="w-1/2">Our focus is always on each person’s unique experience and needs, even when therapy is conducted within a larger group context. In fact, no two treatments are ever the same.</h6>
            </div>
            <div className="p-20">
                <img src="https://img.freepik.com/free-photo/relieved-ethnic-woman-stands-lotus-pose-tries-meditate-during-quarantine-lockdown-reaches-nirvana-does-yoga-keeps-eyes-closed-dressed-sweatshirt-mental-health-relaxation-lifestyle_273609-37722.jpg?size=626&ext=jpg&ga=GA1.2.1406009564.1667614079&semt=sph" alt="" />
            </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            <div>
                <img src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg&ga=GA1.2.1406009564.1667614079&semt=sph" alt="" />
            </div>
            <div className="mt-32 ">
                <h3 className="text-xl font-bold">Hi I am doctor Branden</h3>
                <p className="text-xl">We specialize in the treatment of chronic mental illnesses such as the psychoses, thought disorders, treatment resistant depression and bipolar symptoms. We measure true change according to each patient's sense of subjective well-being as well as symptom modification.</p>
            </div>
        </div>
       </div>
    )
}
export default About