import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            News Channel
            <span className="bg-gradient-to-r from-blue-900 to-red-800 text-transparent bg-clip-text">
              {" "}
              for developers
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
          Stay ahead in the world of development with our dedicated news channel for coders. We bring you the latest updates, trends, and insights from the coding universe, ensuring you’re always in the know. From programming languages and frameworks to industry news and developer tools, we've got you covered.
          </p>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
            >
              Read Todays News
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
              Documentation
            </a>
          </div>
          <div className="flex mt-10 justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
}

export default HeroSection