import React from 'react'

export default function Button({text, onClick}) {
  return (
    <button className='bg-logo py-2 px-4 text-white rounded-sm hover:brightness-125' onClick={onClick}>
      {text}
    </button>
  )
}