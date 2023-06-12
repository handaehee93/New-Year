import React, { useState } from 'react'
import Banner from '../components/ui/Banner'
import { getProducts } from '../api/firebase'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../components/ProductCard'
import useQueryHook from '../hooks/useQueryHook'
import Pagination from '../components/Pagination'
import { PaginationHooks } from '../hooks/PaginationHooks'


export default function Female() {
  const {productData} = useQueryHook()
  const { data: products} = productData
  const femaleProduct =products && products.filter(product => product.category === '여성')
  const {currentProducts, setCurrentPage, currentPage, postPerPage} = PaginationHooks(femaleProduct)

  
  return (
    <>
    <div className='h-auto min-h-full'>
      <Banner />
      <div className='h-5/6 pb-20'>
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
              {currentProducts && currentProducts.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                  })
                }
          </ul>
      </div>

    </div>
    <Pagination 
      totalData={femaleProduct && femaleProduct.length} 
      postPerPage={postPerPage} 
      setCurrentPage={setCurrentPage}
    />            
    </>
  )
}
