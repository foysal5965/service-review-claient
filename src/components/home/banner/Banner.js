import React from "react";
import './banner.css'
const Banner = () => {
  return (

    <div>
      <div className="carousel w-full  rounded-lg mt-12">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="img">
            <img src="https://img.freepik.com/premium-photo/doctor-writing-word-mental-health-with-marker-medical-concept_132358-3770.jpg" className="" />
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4 ">
            <h4 className="text-6xl font-bold text-white">
              Take care your <br />
              mental health <br />
              for living a good life
            </h4>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Banner