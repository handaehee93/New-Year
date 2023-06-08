import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { UserContext } from '../context/UserContext'
import useQueryHook from '../hooks/useQueryHook'


export default function ProductDetail() {
  const {upadateCart} =useQueryHook()
  const navigate = useNavigate()
  // useLoacation을 활용하여 useParam으로 전달된 state를 받아 옴
  const {state: {
    product: { id, image, title, category,price, description, options }
  }} = useLocation()
  
  const [selected, setSelected] = useState(options && options[0])
  
  const handleSelect = (e) => setSelected(e.target.value)
  
  const { user } = useContext(UserContext)
  
  const handleClick = () => {
    if(!user) {
      alert('로그인이 필요합니다.')
      navigate('/')
      return
    }
    const cart = {id, image, title,  price, option: selected, quantity: 1 }
    upadateCart.mutate( cart)
    const answer = window.confirm(`상품이 장바구니에 담겼습니다.
    장바구니로 이동시하겠습니까?`)
    if( answer === true ) {
      navigate('/carts')
    }
  }

    const editprice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (

      <section className='flex flex-col md:flex-row p-4'>
        <img className='w-full px-4 basis-4/12' src={image} alt={title} />
        <div className='basis-5/12 flex flex-col p-4'>
          <p className=' text-gray-700'>{category}</p>
          <h2 className='text-3xl font-bold py-2 border-b border-gray-300'>{title}</h2>
          <p className='text-2xl font-bold py-2'> ₩{editprice} </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center  mb-2'>
            <label htmlFor='size' className='mr-3 text-lg font-bold'>사이즈 : </label>
            <select className='p-2 m-4 flex-2 border-2 border-dashed border-logo outline-none' id='size' onChange={handleSelect} value={selected}>
              {options && options.map((option,idx) => <option  key={idx}>{option}</option>)}
            </select>
          </div>
          <Button text='장바구니에 추가' onClick={handleClick}/>
        </div>
      </section>
  )
}


