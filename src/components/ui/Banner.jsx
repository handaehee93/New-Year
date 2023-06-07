import React from 'react'

export default function Banner() {
  return (
    <div className='z-10 h-96 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-70' />
      <div className='absolute w-full top-32 text-center text-logo '>
        <h2 className='text-6xl '>Enjoy your Shopping</h2>
      </div>
    </div>
  )
}