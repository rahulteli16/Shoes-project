import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import NikeSymbol from "../assets/nikeSymbol.png"
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nnavbar = () => {

    const [open, setOpen] = useState(false);




    return (
        <div className='fixed w-full z-50 flex justify-between bg-black text-white px-4 '>
            {/* left part */}
            <div className='flex items-center  gap-10'>
                <div>
                    <Link to="/"     onClick={() => window.scrollTo(0, 0)}>
                        <img src={NikeSymbol} alt="symbol" className='size-22' />
                    </Link>

                </div>



                <div className='relative bg-white text-black flex items-center  rounded-2xl w-120 '>
                    <input type="text" name="" id="" placeholder='Search Result' className='px-10 w-full py-2 rounded-2xl outline-none ' />
                    <CiSearch className='absolute left-4' />
                    <FaMicrophone className='absolute right-5 hover:scale-110 transition-all duration-300 ease-in-out' />
                </div>

            </div>


            {/* right part */}
            <div className='flex gap-15 items-center justify-center'>
                {/* menu */}
                <div className='flex gap-10 text-xl'>

                    <Link to="/"     onClick={() => window.scrollTo(0, 0)}>
                        <a href="#" className='hover:text-red-400'>Home</a>
                    </Link>


                    <Link to="/Men">
                        <a href="#" className='hover:text-red-400'>Men</a>
                    </Link>


                    <Link to="/women">
                        <a href="#" className='hover:text-red-400'>Women</a>
                    </Link>


                    <Link to="/kids">
                        <a href="#" className='hover:text-red-400'>Kids</a>
                    </Link>


                    <Link to="/contact">
                        <a href="#" className='hover:text-red-400'>Contact</a>
                    </Link>

                </div>



                {/* icon */}
                <div className='flex  gap-7'>

                    <div className='relative'>
                        <ShoppingCart className='size-8 hover:scale-110' />
                        <p className='absolute  -top-2 -right-2 bg-red-600 rounded-full size-5 flex justify-center items-center text-xs text-white'>2</p>
                    </div>





                    <div className='relative'>
                        <button onClick={() => setOpen(!open)}>
                            <MdAccountCircle className='size-8 hover:scale-110' />
                        </button>




                        {open && (
                            <div className="absolute right-0 w-[200px] top-full  mt-2 bg-white text-red-600 shadow-lg rounded-lg p-4  flex justify-center items-center gap-6">

                                <Link to="/signin" onClick={() => setOpen(false)} className='hover:scale-110 transition-all duration-300 ease-in-out font-semibold '>Sign In</Link>
                                <p>|</p>
                                <Link to="/signup" onClick={() => setOpen(false)} className='hover:scale-110 transition-all duration-300 ease-in-out font-semibold'>Sign Up</Link>


                            </div>
                        )}









                    </div>












                </div>
            </div>
        </div>
    )
}

export default Nnavbar