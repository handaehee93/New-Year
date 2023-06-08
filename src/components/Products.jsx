import React from 'react'
import ProductCard from './ProductCard'
import useQueryHook from '../hooks/useQueryHook'


export default function Products() {


  const {productData} = useQueryHook()
  const {isLoading, error, data: products} = productData
  return (
    <>
      {isLoading && <p>로딩중</p>}
      {error && <p>데이터 불러오기 실패</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products && products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </ul>
    </>
  )
}

