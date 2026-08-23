import React from 'react'
import { ShoppingCart } from 'lucide-react'
import NikeSymbol from "../assets/nikeSymbol.png"
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nnavbar = () => {
    return (
        <div className='flex justify-between bg-black text-white px-4 py-2'>
            {/* left part */}
            <div className='flex items-center  gap-10'>
                <div>
                    <img src={NikeSymbol} alt="symbol" className='size-22' />
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

                    <Link to="/">
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


                    <a href="#" className='hover:text-red-400'>Shop</a>

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

                    <MdAccountCircle className='size-8 hover:scale-110' />
                </div>
            </div>
        </div>
    )
}

export default Nnavbar