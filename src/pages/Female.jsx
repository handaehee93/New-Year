import React from 'react'
import Banner from '../components/ui/Banner'
import { getProducts } from '../api/firebase'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../components/ProductCard'


export default function Female() {
  const {data:products} = useQuery(['products'], getProducts)
  const femaleProduct = products && products.filter(product => product.category === '여성')
  return (
    <>
      <Banner />
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {femaleProduct && femaleProduct.map((product) => {
                // console.log('product',product)
                return <ProductCard key={product.id} product={product} />
              })
            }
      </ul>
    </>
  )
}
