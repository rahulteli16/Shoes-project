import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";


const FAQ = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='h-full w-full border-5 p-10 flex flex-col gap-10 bg-amber-100'>
            <div>
                <h1 className='flex justify-center text-4xl font-bold'>FAQ </h1>
            </div>


            <div className='relative group flex flex-col gap-1'>
                <button
                    onClick={() => setOpen(!open)}
                    className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>
                    <span>How can I track my Nike order?</span>
                    <FaChevronDown />
                </button>

                <div
                    className={`overflow-hidden transition-all duration-500 
                ${open ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <p className='px-5 py-2 bg-mist-200  '>You can track your order by visiting the Order Status section and entering your order number and email address. Once your order is shipped, you'll also receive tracking information via email.</p>
                </div>
            </div>



            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>How long does Nike delivery take? <FaChevronDown /> </p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>Can I return or exchange my Nike products?<FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>How do I find the right shoe size?<FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>Can I cancel or change my order after placing it?<FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>What payment methods do you accept?<FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>How can I contact Nike customer support?<FaChevronDown /></p>

            <p className='border p-2 bg-mist-200 rounded-xl flex justify-between items-center px-5'>Are Nike products authentic?<FaChevronDown /></p>
        </div>

    )
}

export default FAQ;










