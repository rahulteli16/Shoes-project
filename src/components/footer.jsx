import React from 'react'
import { Zap } from 'lucide-react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import nikeSymbol from "../assets/nikeSymbol.png"
import { Link } from "react-router-dom";

const Nfooter = () => {
    return (
        <div className='flex flex-col bg-black text-white gap-10 p-8'>
            <div className='grid  grid-cols-4 justify-items-end max-lg:grid-cols-1 max-lg:gap-15 max-lg:place-items-center'>

                <div className='flex flex-col  gap-10 max-lg:gap-6 max-lg:items-center'>
                    <div className='flex max-lg:justify-center items-center'>
                        <img src={nikeSymbol} alt="logo" className='size-20' />
                        <h2 className='text-2xl '>Nike</h2>
                    </div>

                    <div className='text-2xl'>
                        <p>Preminum footwear for every step of your journey. From athletic performance to everyday comfort.</p>
                    </div>


                    <div className='flex gap-3 '>
                        <IoLogoInstagram className='size-5 hover:scale-125 transition-all duration-300' />
                        <FaFacebook className='size-5 hover:scale-125 transition-all duration-300' />
                        <FaLinkedin className='size-5 hover:scale-125 transition-all duration-300' />
                        <FaSquareXTwitter className='size-5 hover:scale-125 transition-all duration-300' />
                        <FaYoutube className='size-5 hover:scale-125 transition-all duration-300' />

                    </div>

                </div>

                <div className='flex flex-col gap-5 '>
                    <div>
                        <h1 className='text-red-400 text-2xl'>Shop</h1>
                    </div>
                    <div className='flex flex-col gap-2 text-xl'>
                        <a href="#" className='hover:text-red-300'>Running</a>
                        <a href="#" className='hover:text-red-300'>Sneakers</a>
                        <a href="#" className='hover:text-red-300'>Basketball</a>
                        <a href="#" className='hover:text-red-300'>Casual</a>
                        <a href="#" className='hover:text-red-300'>Boots</a>
                        <a href="#" className='hover:text-red-300'>Sandals</a>
                    </div>
                </div>



                <div className='flex flex-col gap-5  max-lg:items-center'>
                    <div>
                        <h1 className='text-red-400 text-2xl'>Help</h1>
                    </div>

                    <div className='flex flex-col gap-2 max-lg:items-center text-xl'>

                        <Link to="/faq">
                            <a href="#" className='hover:text-red-300'>FAQ</a>
                        </Link>


                        <a href="#" className='hover:text-red-300'>Shipping </a>
                        <a href="#" className='hover:text-red-300'>Size Guide</a>
                        <a href="#" className='hover:text-red-300'>Contact Us</a>
                        <a href="#" className='hover:text-red-300'>Track Order</a>
                    </div>
                </div>


                <div className='flex flex-col gap-5 lg:mr-8'>
                    <div>
                        <h1 className='text-red-400 text-2xl'>About</h1>
                    </div>

                    <div className='flex flex-col gap-2 text-xl'>
                        <a href="#" className='hover:text-red-300'>Our Story</a>
                        <a href="#" className='hover:text-blue-300'>Sustainblilty</a>
                        <a href="#" className='hover:text-red-300'>Athletes</a>
                        <a href="#" className='hover:text-red-300'>Careers</a>
                        <a href="#" className='hover:text-red-300'>Store Locator</a>
                    </div>
                </div>
            </div>


            <div className='flex justify-between items-center max-lg:flex-col  gap-4'>
                <div className='flex gap-2  items-center'>
                    <FaRegCopyright />
                    <p>2026 Nike.All rights reserved</p>
                </div>



                <div className='flex gap-6 max-sm:flex-col max-sm:items-center'>
                    <div className='flex gap-5 items-center'>
                        <a href="#" className='hover:text-red-400'>Privacy Policy</a>
                        <a href="#" className='hover:text-red-400'>Terms & Conditions</a>
                    </div>

                    <div className='flex gap-3'>
                        <FaCcVisa className='size-8 hover:scale-125 transition-all duration-300' />
                        <FaGooglePay className='size-8 hover:scale-125 transition-all duration-300' />
                        <FaCcPaypal className='size-8 hover:scale-125 transition-all duration-300' />
                        <FaApplePay className='size-8 hover:scale-125 transition-all duration-300' />
                        <FaCcMastercard className='size-8 hover:scale-125 transition-all duration-300' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nfooter