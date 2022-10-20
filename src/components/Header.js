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
                <div className='text-white flex items-center text-xs space-x-6'>
                    <div>
                        <p>Hello Gabe S</p>
                        <p>Account & lists</p>
                    </div>
                    <div>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>

                    <div>
                        <ShoppingCartIcon className='h-10' />
                        <p>Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom nav */}
            <div></div>
        </header>
    )
}

export default Header
