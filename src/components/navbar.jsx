import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import NikeSymbol from "../assets/nikeSymbol.png"
import { MdAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Nnavbar = () => {

    const [accountOpen, setAccountOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <div className='fixed w-full z-50 flex justify-between bg-black text-white px-4 max-lg:gap-5'>
                {/* left part */}
                <div className='flex items-center  gap-10'>
                    <div>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={NikeSymbol} alt="symbol" className='size-22' />
                        </Link>

                    </div>



                    <div className='relative bg-white text-black flex items-center  rounded-2xl w-[180px] sm:w-[280px] md:w-[400px] lg:w-[480px] '>

                        <input type="text" name="" id="" placeholder='Search Result' className='px-10 w-full py-2 rounded-2xl outline-none ' />
                        <CiSearch className='absolute left-4 sm:left-4' />
                        <FaMicrophone className='absolute right-5 hover:scale-110 transition-all duration-300 ease-in-out' />
                    </div>

                </div>


                {/* right part */}
                <div className='flex gap-15 items-center justify-center max-lg:hidden'>
                    {/* menu */}
                    <div className='flex gap-10 text-xl'>

                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            Home
                        </Link>


                        <Link to="/men">
                            Men
                        </Link>


                        <Link to="/women">
                            Women
                        </Link>


                        <Link to="/kids">
                            Kids
                        </Link>


                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>




                    <div className='flex  gap-7'>


                        <Link to="/bag">
                            <div className='relative'>
                                <ShoppingCart className='size-8 hover:scale-110' />
                                <p className='absolute  -top-2 -right-2 bg-red-600 rounded-full size-5 flex justify-center items-center text-xs text-white'>2</p>
                            </div>
                        </Link>






                        <div className='relative'>
                            <button onClick={() => setAccountOpen(!accountOpen)}>
                                <MdAccountCircle className='size-8 hover:scale-110' />
                            </button>




                            {accountOpen && (
                                <div className="absolute right-0 w-[200px] top-full  mt-2 bg-white text-red-600 shadow-lg rounded-lg p-4  flex justify-center items-center gap-6">

                                    <Link to="/signin" onClick={() => setAccountOpen(false)} className='hover:scale-110 transition-all duration-300 ease-in-out font-semibold '>Sign In</Link>
                                    <p>|</p>
                                    <Link to="/signup" onClick={() => setAccountOpen(false)} className='hover:scale-110 transition-all duration-300 ease-in-out font-semibold'>Sign Up</Link>
                                </div>
                            )}
                        </div>












                    </div>
                </div>

                {/* mobile hamburger */}
                <div className="lg:hidden flex items-center p-5">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl"
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>

                {/* mobile menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-black text-white lg:hidden border-t border-gray-700">
                        <div className="flex flex-col items-center gap-6 py-8 text-lg">

                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>

                            <Link to="/men" onClick={() => setMenuOpen(false)}>
                                Men
                            </Link>

                            <Link to="/women" onClick={() => setMenuOpen(false)}>
                                Women
                            </Link>

                            <Link to="/kids" onClick={() => setMenuOpen(false)}>
                                Kids
                            </Link>

                            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>

                            <div className="flex gap-8 items-center">
                                <Link to="/bag" onClick={() => setMenuOpen(false)}>
                                    <div className="relative">
                                        <ShoppingCart className="size-7" />
                                        <span className="absolute -top-2 -right-2 bg-red-600 rounded-full size-5 flex justify-center items-center text-xs">
                                            2
                                        </span>
                                    </div>
                                </Link>


                                <div className=' relative group'>
                                    <MdAccountCircle className='size-8' />
                                    <div className='absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white text-black p-5  rounded-xl'>
                                        <div className='flex gap-5'>
                                            <Link to="/signin" onClick={() => setMenuOpen(false)}>
                                                <p>Signin</p>
                                            </Link>
                                            <p>|</p>
                                            <Link to="/signup" onClick={() => setMenuOpen(false)}>
                                                <p>SignUp</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>






                            </div>

                        </div>
                    </div>
                )}


            </div >
        </>
    )
}

export default Nnavbar