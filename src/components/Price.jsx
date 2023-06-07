import React from 'react'

export default function Price({text, price}) {
  const editprice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className='bg-gray-100 text-center text-lg md:text-xl '>
      <p>{text}</p>
      <p className='font-bold text-logo text-xl'>₩{editprice}</p>
    </div>
  )
}