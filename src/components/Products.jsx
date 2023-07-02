import React from 'react'
import ProductCard from './ProductCard'


export default function Products({ currentProducts}) {

  return (
    <>
      <div className='h-5/6 pb-20'>
        <ul className='grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-auto'>
          {currentProducts && currentProducts.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
                )
              })
            }
          </ul>
      </div>

      </>
    )
              
            

            





}

