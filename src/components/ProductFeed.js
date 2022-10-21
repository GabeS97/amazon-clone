import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
    return (
        <div>
            {products?.map(({ id, title, price, description, category, image, rating }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} rating={rating} />
            ))}
        </div>

    )
}

export default ProductFeed
