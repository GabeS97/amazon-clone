import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
function CheckoutProduct({
    id,
    title,
    price,
    description,
    rating,
    category,
    image,
    hasPrime
}) {
    const dispatch = useDispatch();
    function addItemToBasket() {
        const product = {
            id,
            title,
            price,
            description,
            rating,
            category,
            image,
            hasPrime
        }
        dispatch(addToBasket(product));
    }

    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />

            {/* Middle */}
            <div className="cols-span-3 mx-5">
                <p>{title}</p>

                <div className="flex">
                    {Array(rating).fill().map((_, idx) => (
                        <StarIcon key={idx} className='h-5 text-yellow-500' />
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} />

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' className='w-12' src='http://links.papareact.com/fdw' alt='' />
                        <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                    </div>
                )}
            </div>

            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className="button mt-auto" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button mt-auto" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
