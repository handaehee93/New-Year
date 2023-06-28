import React, { useContext, useEffect, useRef, useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineCaretUp } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import UserInfo from './UserInfo'
import Button from './ui/Button';
import Cart from './Cart'



export default function Navbar() {
  const { user, login, logout } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [menuBar, setMenubar] = useState(false)

  const dropdownRef = useRef()
  useEffect(() => {
    const clickOutSide = (e) => {
      if (isOpen && !dropdownRef.current?.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener("mousedown", clickOutSide)
    return () => document.removeEventListener("mousedown", clickOutSide)
  }, [isOpen])

  return (
    <>
      <header className='flex justify-between border-b border-gray-300 p-2'>
        <Link to='/' className='flex items-center font-semibold text-4xl  text-logo '>
          <HiOutlineShoppingBag className='max-sm:hidden' />
          <h1 className='max-sm:text-xl font-semibold' >NewYear</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
          <Link to='/products' className='hidden sm:block'>상품</Link>
          <div className='relative flex flex-col items-center cursor-pointer'>
            <div className='sm:flex items-center hidden' onClick={() => setIsOpen((prev) => !prev)}>
              카테고리
              {!isOpen ? (
                <AiOutlineCaretDown />
              ) : (
                <AiOutlineCaretUp />
              )}
            </div>
            {isOpen && (
              <div ref={dropdownRef} className='z-20 flex flex-col absolute top-6 bg-logo w-full text-white text-center p-2'>
                <Link to='/products/male' className='hover:bg-blue-400'>남성</Link>
                <Link to='/products/female' className='hover:bg-blue-400'>여성</Link>
              </div>
            )}
          </div>
          {user && <Link to='/carts' ><Cart /></Link>}
          <div className='relative p-2' onClick={() => setMenubar((prev) => !prev)}>
            <GiHamburgerMenu className='w-10 h-10 ml-auto  sm:hidden' />
            {menuBar && (
            <div ref={dropdownRef} className='sm:hidden z-20 flex flex-col absolute top-11 bg-logo w-full text-white text-center p-2'>
            <Link to='/products' className='hover:bg-blue-400'>상품</Link>
            <Link to='/products/male' className='hover:bg-blue-400'>남성</Link>
            <Link to='/products/female' className='hover:bg-blue-400'>여성</Link>
            </div>
            )}
          </div>
          <Link to='/products/new' className='text-3xl'>
            {user && user.isAdmin && <AiFillEdit />}
          </Link>
          {/* 로그인된 사용자의 정보는 user라는 state에 담기고, 따라서 user에 값이 있으면 로그인이 된 상태, user에 값이 없으면 로그 아웃 상태 이므로 각각의 상태에 따라 보여지는 ui가 다르게 설정 한 것 */}
          {user && <UserInfo  user={user} />}
          {!user && <Button text={'Login'} onClick={login} />}
          {user && <Button text={'Logout'} onClick={logout} />}
        </nav>
      </header>
      {/* <div className='relative p-2' onClick={() => setMenubar((prev) => !prev)}>
        <GiHamburgerMenu className='w-10 h-10 ml-auto mr-4 sm:hidden' />
        {menuBar && (
          <div ref={dropdownRef} className='sm:hidden z-20 flex flex-col absolute top-11 bg-logo w-full text-white text-center p-2'>
            <Link to='/products' className='hover:bg-blue-400'>상품</Link>
            <Link to='/products/male' className='hover:bg-blue-400'>남성</Link>
            <Link to='/products/female' className='hover:bg-blue-400'>여성</Link>
          </div>
        )}
      </div> */}




    </>
  )
}