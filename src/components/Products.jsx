import React from 'react'
import { getProducts } from '../api/firebase'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'


export default function Products() {
  const { isLoading, error, data:products} = useQuery(['products'], getProducts)
  // console.log('products',products)
  return (
    <>
      {isLoading && <p>로딩중</p>}
      {error && <p>데이터 불러오기 실패</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products && products.map((product) => {
            // console.log('product',product)
            return <ProductCard key={product.id} product={product} />
          })
        }
      </ul>
    </>
  )
}

