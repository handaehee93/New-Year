import React, { useState } from 'react'
import Products from '../components/Products'
import Banner from '../components/ui/Banner'
import Pagination from '../components/Pagination'
import useQueryHook from '../hooks/useQueryHook'
import { PaginationHooks } from '../hooks/PaginationHooks'

export default function AllProducts() {
  const {productData} = useQueryHook()
  const {data: products} = productData
  const {currentProducts, setCurrentPage, currentPage, postPerPage} = PaginationHooks(products)


  return (
    <>
    <div className='h-auto min-h-full'>
      <Products curPage={currentPage} currentProducts={currentProducts} />
    </div>
    <Pagination 
      totalData={products && products.length} 
      postPerPage={postPerPage} 
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />
    
    </>

)
}



