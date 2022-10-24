import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import db from '../../firebase';
import Header from '../components/Header'
import moment from 'moment/moment';
import Order from '../components/Order';

const Orders = ({ orders }) => {
    const { data } = useSession();

    console.log(orders)

    return (
        <div>
            <Header />
            <main className='max-w-sceen-lg mx-auto p-10'>
                <h1 className='ƒtext-3xl border-b mb-2 pb-1 border-yellow-400' >Your Orders:</h1>

                {data ? (
                    <h1>{orders.length}Orders</h1>
                ) : (
                    <h2>Please sign in to view orders</h2>
                )}
                <div className="mt-5 space-y-4">
                    {orders?.map(({ id, amount, amountShipping, items, timestamp, images }) => (
                        <Order key={id} id={id} amount={amount} amountShipping={amountShipping} items={items} timestamp={timestamp} images={images} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

    const session = await getSession(context);
    if (!session) {
        return {
            props: {},
        }
    }
    // Fetch firebase db
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get()

    // Stripe orders
    const orders = await Promise
        .all(stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        })))
    return {
        props: {
            orders
        }
    }
}