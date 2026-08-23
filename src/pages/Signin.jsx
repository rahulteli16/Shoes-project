import React from 'react'
import nikeimg2 from "../assets/nikeimg2.jpg"
import { SiNike } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";


const Signin = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen bg-right text-black justify-end pr-50 p-3' style={{backgroundImage : `url(${nikeimg2})`}}>



        {/* form part */}
        <div className='w-[540px]  text-black bg-amber-50 rounded-4xl'>
          <div className='flex flex-col  items-center sm:p-10'>


            <div className='flex flex-col gap-8'>


              <div className='flex flex-col items-center justify-center gap-5'>
                <SiNike className='size-12' />
                <h1 className='text-3xl'>Sign in with email</h1>
                <p className='text-sm sm:text-xl text-center'>Create your Nike account to unlock exclusive access to the latest shoes, member-only benefits, and personalized experiences.</p>
              </div>


              <div className='flex flex-col gap-5'>
                <input type="text" placeholder='Email' className='border p-2' />
                <div className='relative w-full'>
                  <input type="text" placeholder='Password' className='border p-2 w-full' />
                  <BiSolidHide className='absolute right-3 top-1/2 -translate-y-1/2 ' />
                </div>

                <p className='text-red-600 hover:text-red-400'>Forgot Password ?</p>
                <button className='w-full bg-blue-500 py-2 hover:scale-105 duration-300 ease-in-out transition-all text-white'>Get Started</button>
              </div>


              <div className='flex flex-col items-center justify-center gap-6 mt-5'>
                <p>Or sign in with</p>
                <div className='flex gap-10 text-2xl'>

                  <button className='bg-black px-5 rounded-xl  py-2 hover:scale-110 duration-300 ease-in-out transition-all ' >
                    <FcGoogle />
                  </button>


                  <button className='bg-black px-5 rounded-xl  py-2 text-blue-600 hover:scale-110 duration-300 ease-in-out transition-all '>
                    <FaFacebook />
                  </button>

                  <button className='bg-black px-5 rounded-xl  py-2 text-white hover:scale-110 duration-300 ease-in-out transition-all '>
                    <FaApple />
                  </button>



                </div>
              </div>



            </div>



          </div>
        </div>



      </div>
    </div>
  )
}

export default Signin