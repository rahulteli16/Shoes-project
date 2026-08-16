import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Nfooter = () => {
    return (
        <>




            <div className='grid grid-cols-4 py-2 px-4 bg-gray-800'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-3xl text-red-500'>Customer Service</p>
                    </div>

                    <div className='flex flex-col gap-3 text-xl text-white'>
                        <p className='hover:text-red-300'>Contact us</p>
                        <p className='hover:text-red-300'>FAQs</p>
                        <p className='hover:text-red-300'>Orders and delivery</p>
                        <p className='hover:text-red-300'>Returns and refunds</p>
                        <p className='hover:text-red-300'>Payment and pricing</p>
                        <p className='hover:text-red-300'>Cryptocurrency payments</p>
                        <p className='hover:text-red-300'>Promotion terms and conditions</p>
                        <p className='hover:text-red-300'>FARFETCH Customer Promise</p>
                    </div>
                </div>



                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-2xl text-red-500'>About FARFETCH</p>
                    </div>

                    <div className='flex flex-col gap-3 text-xl text-white'>
                        <p className='hover:text-red-300'>About us</p>
                        <p className='hover:text-red-300'>FARFETCH partner boutiques</p>
                        <p className='hover:text-red-300'>Careers</p>
                        <p className='hover:text-red-300'>FARFETCH app</p>
                        <p className='hover:text-red-300'>Modern slavery statement</p>
                        <p className='hover:text-red-300'>FARFETCH advertising</p>
                        <p className='hover:text-red-300'>sitemap</p>
                    </div>
                </div>




                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-2xl text-red-500'>Discounts and membership</p>
                    </div>
                    <div className='flex flex-col gap-3 text-xl text-white'>
                        <p className='hover:text-red-300'>Affilliate program</p>
                        <p className='hover:text-red-300'>refer a friend</p>
                        <p className='hover:text-red-300'>FARFETCH membership</p>
                        <p className='hover:text-red-300'>Student discount UNiDAYS</p>
                        <p className='hover:text-red-300'>Student and youth discount</p>
                    </div>
                </div>



                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='text-2xl text-red-500'>Content and Services</p>
                    </div>
                    <div className='text-xl text-white'>
                        <p>Fashion Feed: the latest style stories</p>
                    </div>


                    <div className='flex flex-col gap-5'>
                        <div className='text-xl text-white'>
                            <p>Follow us</p>
                        </div>

                        <div className='flex gap-5 items-center text-white'>
                            <FaInstagram className='size-9 hover:scale-125 transition-all duration-500 ease-in-out' />
                            <FaFacebook className='size-9 hover:scale-125 transition-all duration-500 ease-in-out' />
                            <FaYoutube className='size-9 hover:scale-125 transition-all duration-500 ease-in-out' />
                        </div>

                    </div>
                </div>
            </div>




            {/* bottom part */}
            <div className='py-15 pb-4 px-4 flex flex-col gap-5  bg-gray-800'>
                <div className='flex  gap-6 text-white text-xl'>
                    <a href="#" className='underline hover:text-red-300'>Privacy policy</a>
                    <a href="#" className='underline hover:text-red-300'>Terms and conditions</a>
                    <a href="#" className='underline hover:text-red-300'>Accessibility</a>
                </div>

                <div className='text-white text-xl'>
                    <p>'FARFETCH' and the 'FARFETCH' LOGO ARE TRADE MARKS OF FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</p>

                    <div className='flex gap-1 items-center'>
                        <FaRegCopyright />
                        <p>Copyright 2026 FARFETCH UK Limited. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Nfooter