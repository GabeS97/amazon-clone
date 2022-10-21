import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline'
function Header() {
    return (
        <header>
            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                {/* Left */}
                <div className='mt-2 flex items-center flex-grow  sm:flex-grow-0'>
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>
                {/* Search */}
                <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                    <input type="text" className='p-2 h-full w-6 flex-grow flex-shirnk rounded-l-md focus:outline-none px-40' />
                    <MagnifyingGlassIcon className='h-12 p-4' />
                </div>

                {/* Right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link'>
                        <p>Hello Gabriel Sitorus</p>
                        <p className='font-extrabold md:text-sm'>Account & lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>

                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom nav */}
            <div></div>
        </header>
    )
}

export default Header