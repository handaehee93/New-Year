import React, { useContext } from 'react'
import Button from '../components/ui/Button';
import { UserContext } from '../context/UserContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import Price from '../components/Price';
import CartItem from '../components/CartItem';
import useQueryHook from '../hooks/useQueryHook';

export default function MyCart() {
  const { user } = useContext(UserContext)
  // const {data: products} = useQuery(['carts'], () => getCart(user.uid))
  const { cartsData }  = useQueryHook()
  const { data:products} = cartsData
  
  const hasCart = products && products.length > 0 
  const totalPrice = products && products.reduce((acc, cur) => {
    return acc + parseInt(cur.price) * cur.quantity
  }, 0)
  return (
    <div className='p-7'>
      <p className='text-center text-bold text-xl pb-5 mb-3 border-b-2'>장바구니</p>
      {!hasCart && <p>장바구니에 담겨 있는 상품이 없습니다.</p>}
      {hasCart && 
      <>
        <ul className='border-b-2 p-2'>
          {products && products.map(product => <CartItem key={product.id} product={product} />)}
        </ul>
        <div>
          <Price text='상품 총 금액' price={totalPrice} />
        </div>
        <div className='flex flex-col mt-3 '>
          <Button  text='주문하기'/>
        </div>
      </>
      }
    </div>
  )
}
