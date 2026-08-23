import React from 'react'
import NikeVideo from "./video/NikeVideo.mp4"
import { Link } from "react-router-dom";

const Videonike = () => {
    return (
        <div>
            <div className='relative'>

                <video src={NikeVideo} controls autoPlay loop muted></video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>


                <p className='absolute text-white bottom-160 left-20 font-bold text-6xl max-lg:5xl'>MOVE WITH PURPOSE</p>

                <div className='absolute text-white bottom-60 left-20 font-bold text-9xl max-lg:5xl'>
                    <p>JUST</p>
                    <p>DO</p>
                    <p>IT</p>
                </div>


                <div className='absolute text-2xl text-white flex  gap-8 bottom-35 left-20 '>



                    <Link to="/Men">
                        <button className='flex justify-center bg-white text-black p-2 px-6 py-3 rounded-xl hover:bg-amber-100 hover:scale-110 transition-all duration-300 ease-in-out '>
                            <a href="#">SHOP MEN</a>
                        </button>
                    </Link>


                    <Link to="/women">
                        <button className='flex justify-center bg-white text-black p-2 px-6 py-3 rounded-xl hover:bg-amber-100 hover:scale-110 transition-all duration-300 ease-in-out '>
                            <a href="#">SHOP WOMEN</a>
                        </button>
                    </Link>


                    <Link to="/kids">

                        <button className='flex justify-center bg-white text-black p-2 px-6 py-3 rounded-xl hover:bg-amber-100 hover:scale-110 transition-all duration-300 ease-in-out '>
                            <a href="#">SHOP KIDS</a>
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Videonike