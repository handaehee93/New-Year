import React from 'react'

export default function User({user}) {
  return (
    <div className='max-sm:hidden flex items-center shrink-0'>
      <img className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt={user.displayName}/>
      <span className='hidden md:block'>{user.displayName}</span>
    </div>
  )
}
