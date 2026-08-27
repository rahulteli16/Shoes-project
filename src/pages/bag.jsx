import React from 'react'

const Bag = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center gap-20 bg-amber-100 p-5 max-lg:p-10'>
            <div className='text-3xl font-bold'>
                Your Bag Is Empty
            </div>

            <div className='text-3xl max-sm:text-2xl    '>
                You haven’t added anything to your bag yet. Explore our latest styles and find something you’ll love
            </div>


            <div className='md:text-xl bg-red-600 px-3 py-2 rounded-2xl'>
                <button>
                    CONTINUE SHOPPING
                </button>

            </div>
        </div>
    )
}

export default Bag