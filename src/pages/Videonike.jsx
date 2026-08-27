import React from 'react'
import NikeVideo from "./video/NikeVideo.mp4"
import { Link } from "react-router-dom"

const Videonike = () => {
    return (
        <div>
            <div className="relative w-full overflow-hidden">

                {/* Video */}
                <video
                    src={NikeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[80vh] sm:h-[85vh] lg:h-screen object-cover"
                />


                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>


                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end
                                px-5 sm:px-10 lg:px-20
                                pb-10 sm:pb-14 lg:pb-20">



                    <p className="text-white font-bold
                                  text-lg sm:text-3xl lg:text-5xl
                                  mb-4 sm:mb-6">
                        MOVE WITH PURPOSE
                    </p>



                    <div className="text-white font-bold
                                    text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                                    leading-[0.85]
                                    mb-8 sm:mb-10">

                        <p>JUST</p>
                        <p>DO</p>
                        <p>IT</p>

                    </div>



                    <div className="flex flex-wrap gap-3 sm:gap-5">

                        <Link
                            to="/Men"
                            className="bg-white text-black
                                       px-4 sm:px-6 py-2 sm:py-3
                                       rounded-xl
                                       text-sm sm:text-lg
                                       font-semibold
                                       hover:bg-amber-100
                                       hover:scale-105
                                       transition-all duration-300"
                        >
                            SHOP MEN
                        </Link>


                        <Link
                            to="/women"
                            className="bg-white text-black
                                       px-4 sm:px-6 py-2 sm:py-3
                                       rounded-xl
                                       text-sm sm:text-lg
                                       font-semibold
                                       hover:bg-amber-100
                                       hover:scale-105
                                       transition-all duration-300"
                        >
                            SHOP WOMEN
                        </Link>


                        <Link
                            to="/kids"
                            className="bg-white text-black
                                       px-4 sm:px-6 py-2 sm:py-3
                                       rounded-xl
                                       text-sm sm:text-lg
                                       font-semibold
                                       hover:bg-amber-100
                                       hover:scale-105
                                       transition-all duration-300"
                        >
                            SHOP KIDS
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Videonike