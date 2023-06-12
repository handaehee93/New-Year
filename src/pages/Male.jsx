import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getProducts } from '../api/firebase'
import Banner from '../components/ui/Banner'
import ProductCard from '../components/ProductCard'
import useQueryHook from '../hooks/useQueryHook'
import Pagination from '../components/Pagination'
import { PaginationHooks } from '../hooks/PaginationHooks'

export default function Male() {
  const {productData} = useQueryHook()
  const {data: products} = productData
  const maleProduct = products && products.filter(product => product.category === '남성')
  const {currentProducts, setCurrentPage, currentPage, postPerPage} = PaginationHooks(maleProduct)


  return (
    <>
    <div className='h-auto min-h-full'>
      <Banner />
      <div className='h-5/6 pb-20'>
        <ul className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {currentProducts && currentProducts.map((product) => {
                  return <ProductCard key={product.id} product={product} />
                })
              }
        </ul>
      </div>
    </div>
    <Pagination 
      totalData={maleProduct && maleProduct.length} 
      postPerPage={postPerPage} 
      setCurrentPage={setCurrentPage}
    />

    </>
  )
}
