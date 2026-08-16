import React from 'react'
import { Menu, Scale } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import NikeSymbol from "../assets/nikeSymbol.png"


const Nnavbar = () => {
    return (
        <div className='flex justify-between bg-black text-white px-4 py-2'>
            {/* left part */}
            <div>
                <img src={NikeSymbol} alt="symbol" className='size-22' />
            </div>


            {/* right part */}
            <div className='flex gap-15 items-center justify-center'>
                {/* menu */}
                <div className='flex gap-10 text-xl'>
                    <a href="#" className='hover:text-red-400'>Home</a>
                    <a href="#" className='hover:text-red-400'>Men</a>
                    <a href="#" className='hover:text-red-400'>Women</a>
                    <a href="#" className='hover:text-red-400'>Kids</a>
                    <a href="#" className='hover:text-red-400'>Shop</a>
                    <a href="#" className='hover:text-red-400'>Contact</a>
                </div>



                {/* icon */}
                <div className='flex  gap-7'>
                                    
                <div className='relative'>
                <ShoppingCart className='size-8 hover:scale-110'/> 
                <p className='absolute  -top-2 -right-2 bg-red-600 rounded-full size-5 flex justify-center items-center text-xs text-white'>2</p>

                </div>


                    <Menu className='size-8 hover:scale-110'/>
                </div>
            </div>
        </div>
    )
}

export default Nnavbar