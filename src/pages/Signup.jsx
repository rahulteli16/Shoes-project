import React from 'react'
import nikeimg2 from "../assets/nikeimg2.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";


const Signup = () => {
    return (
        <div className='flex min-h-screen   justify-center items-center bg-black'>

            <div className='w-[540px]  flex flex-col space-y-10 p-10     items-center  border-2 shadow-2xl rounded-2xl m-6 bg-amber-50'>



                {/* top part */}
                <div className='space-y-2 w-full'>
                    <h1 className='text-4xl text-blue-600'>Create an account</h1>
                    <h4>Already have an accunt? <a href="#">Log in</a></h4>
                </div>


                {/* center part */}



                <div className='flex flex-col space-y-4 w-full'>
                    <div className='flex flex-col lg:flex-row justify-between gap-3'>
                        <div>
                            <p>First Name</p>
                            <input type="text" placeholder=' Firstname' className='border-2  rounded focus:ring-2 focus:ring-green-300 focus:outline-none ' />
                        </div>

                        <div>
                            <p>Last Name</p>
                            <input type="text" placeholder=' Lastname' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none' />
                        </div>
                    </div>

                    <div>
                        <p>Username</p>
                        <input type="text" placeholder=' Username' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none w-full' />
                    </div>


                    <div>
                        <p>Email</p>
                        <input type="text" placeholder=' Email' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none w-full ' />
                    </div>

                    <div className='relative w-full'>
                        <p>Password</p>
                        <input type="text" placeholder=' Enter your password' className='border-2 rounded focus:ring-2 focus:ring-green-700 focus:outline-none w-full' />
                        <p>Minimun length is 8 characters</p>
                        <BiSolidHide className='absolute right-3 top-1/2 -translate-y-1/2 ' />  
                    </div>


                    <div>
                        <button className='bg-blue-600 text-amber-50 w-full rounded py-1 hover:scale-105 transition-all duration-300 '>Sign Up</button>
                    </div>

                </div>



                {/* bottom part */}
                <div className='flex-col  items-center space-y-3 w-full'>
                    <p className='flex justify-center'> Register With </p>

                    <div className='flex justify-center gap-8 '>
                        <button className='hover:scale-110 duration-300 ease-in-out transition-all '>
                            <FcGoogle className='size-7' />
                        </button>

                        <button className='hover:scale-110 duration-300 ease-in-out transition-all '>
                            <FaApple className='size-7' />
                        </button>

                        <button className='hover:scale-110 duration-300 ease-in-out transition-all '>
                            <FaGithub className='size-7' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup