import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import useQueryHook from '../hooks/useQueryHook'
import Pagination from './Pagination'


export default function Products({ currentProducts}) {

  return (
    <>
      <div className='h-5/6 pb-20'>
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-auto'>
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

