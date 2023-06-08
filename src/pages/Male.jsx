import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from '../api/firebase'
import Banner from '../components/ui/Banner'
import ProductCard from '../components/ProductCard'

export default function Male() {
  const {data:products} = useQuery(['products'], getProducts)
  const maleProduct =products && products.filter(product => product.category === '남성')

  return (
    <>
      <Banner />
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {maleProduct && maleProduct.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })
            }
      </ul>
    </>
  )
}
