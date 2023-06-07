
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import { getCart } from '../api/firebase'
export default function Cart() {
  const { user } = useContext(UserContext)
  const {data: products} = useQuery(['carts'], () => getCart(user.uid))

  return (
    <div className='relative'>
      장바구니
      {products && <p className='w-6 h-6 text-center bg-logo text-white font-bold rounded-full absolute -top-5 -right-1 '>{products.length}</p>}
    </div>
  )
}