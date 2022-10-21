import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import Currency from 'react-currency-formatter';
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < .5);


    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
            <p className='absolute t-2  r-2  text-xs italic'>{category}</p>

            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(rating).fill().map(() => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img src="http://links.papareact.com/fdw" alt="" className='w-12' />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}

            <button className='mt-auto button'>Add to basket</button>
        </div>
    )
}

export default Product