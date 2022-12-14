import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import Head from 'next/head'
const stripePromise = loadStripe(process.env.stripe_public_key);
function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data } = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items,
            email: data.user.email
        })

        const res = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if (res.error) alert(res.error.message);

    }
    return (
        <div className='bg-gray-100 '>
            <Head>
                <title>Amazon Clone</title>
            </Head>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* Left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                        src='http://links.papareact.com/ikj' width={1020} height={250} objectFit='contain'
                    />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>{
                            items.length ? 'Shopping Basket' : ' Your Amazon Basket is empty'}</h1>

                        {items?.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):</h2>
                            <span>
                                <Currency className='ml-2' quantity={total} />
                            </span>

                            <button
                                onClick={createCheckoutSession}
                                role='link'
                                disabled={!data}
                                className={`button mt-2 ${!data && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!data ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
