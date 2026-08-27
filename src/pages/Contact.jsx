import React from 'react'
import nikeimg2 from "../assets/nikeimg2.jpg"
import { FaArrowRight } from "react-icons/fa6";

const ContactNike = () => {
    return (
        <div>

            <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 min-h-screen justify-center bg-center bg-cover  items-center lg:px-5 py-10 sm:px-10 text-white' style={{ backgroundImage: `url(${nikeimg2})` }}>
                {/* left part     */}
                <div className='w-full flex flex-col lg:w-1/2 justify-center gap-5 px-4'>
                    <div className='text-5xl font-bold'>
                        <p>Get in ---</p>
                        <p>touch with us</p>
                    </div>
                    <div className='text-2xl'>We're hero to help!Whether you have a question about our services,need assistance with your account, or want to provide feedback,our team is ready to assist you.</div>
                    <div>
                        <p>Email:</p>
                        <a href="#" className='font-bold'>hello@nikepro.com</a>
                    </div>
                    <div>
                        <p>Phone: </p>
                        <p className='font-bold'>+1 234 567 78</p>
                        <p>Available Monday to friday, 9 AM - 6 PM GMT</p>

                    </div>
                    <div className='bg-black text-white rounded-2xl px-5 py-3 w-40 gap-5 items-center flex border border-yellow-100'>
                        <FaArrowRight className='bg-white text-black rounded-2xl text-xl p-1' />
                        <button>Live Chat</button>
                    </div>
                </div>

                {/* right part */}
                <div className='w-full lg:w-1/2 flex justify-center px-4'>

                    <div className='flex flex-col gap-8 border rounded-2xl p-10  sm:p-10 lg:p-10 w-full max-w-[550px] border-yellow-100 '>


                        <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p>First Name</p>
                                <input type="text" name="" id="" placeholder='Enter your first name' className='border rounded-2xl p-2 border-yellow-100' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Last Name</p>
                                <input type="text" placeholder='Enter your last name' className='border rounded-2xl p-2 border-yellow-100' />
                            </div>
                        </div>


                        <div className='flex flex-col gap-2'>
                            <p>Email</p>
                            <input type="text" name="" id="" placeholder='Enter your email address' className='border rounded-2xl p-2 w-full border-yellow-100' />
                        </div>


                        <div className='flex flex-col gap-2'>
                            <p>How can we help you?</p>
                            <textarea name="" id="" placeholder='Enter Your message..' className='border rounded-2xl p-2 w-full border-yellow-100'></textarea>
                        </div>

                        <div className='flex justify-end'>
                            <div className='flex bg-black text-white rounded-2xl px-5  py-3 items-center gap-3  border border-yellow-100 hover:scale-105 transition-all duration-300'>
                                <FaArrowRight className='bg-white text-black rounded-2xl text-xl p-1' />
                                <button className=''>Send Message</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>


    )
}

export default ContactNike