import React from 'react'
import menshoes from "../assets/menshoes.png"

const Nhero = () => {
    return (
        <div className='flex flex-col lg:flex-row min-h-screen w-full justify-center items-center bg-black p-8 sm:text-5xl md:text-6xl lg:text-6xl gap-10 '>
            {/* left part */}
            <div className='w-full lg:w-1/2 flex flex-col gap-10'>

                <div className='flex flex-col gap-2'>
                    <div className='text-white text-7xl max-sm:text-4xl'>
                        <p>MEN'S HIIT CLASS SHOE</p>
                    </div>

                    <div className='text-white text-2xl max-sm:text-base'>
                        <p>Nike Air Zoom SuperReo 2</p>
                    </div>
                </div>


                <div className='text-white text-2xl'>
                    <p>The Nike Air Zoom Superrep 2 is designed for circuit training.HIIT,sprints and other fast-paced exercise. Layers of support team up with Zoom Air curshioning to keep your foot locked.</p>
                </div>

                <div>
                    <button className='bg-red-600 text-white px-5 py-2 hover:bg-red-700 rounded hover:scale-110 transition-all duration-300 ease-in-out text-4xl max-sm:text-xl' >ADD TO BAG</button>
                </div>


            </div>



            {/* right part */}
            <div className='w-full lg:w-6/12 flex items-center justify-center '>
                <img src={menshoes} alt="Nike shoes" className=' w-[280px] sm:w-[350px] md:w-[450px] lg:w-auto hover:scale-105 transition-all duration-500 ease-in-out' />
            </div>
        </div>
    )
}

export default Nhero