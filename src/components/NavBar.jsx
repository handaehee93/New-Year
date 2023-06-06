import React, { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { login, logout } from '../api/firebase'
// import UserInfo from './UserInfo';
// import Button from './ui/Button';
// import { useAuthContext } from '../context/AuthContext';
// import Cart from './Cart';




export default function Navbar() {
  // contextProvider에 전달된 props를 받아 온 것
  // const {user, login, logout} = useAuthContext()
  const [user, setUser] = useState()

  const handleLogin = () => {
    login()
      .then(user => setUser(user))
  }
  const handleLogout = () => {
    logout()
      .then(user => console.log(user))
  }

  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center font-semibold text-4xl  text-logo'>
        <HiOutlineShoppingBag />
        <h1>Shopping Mall</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>상품</Link>
        <div>카테고리</div>
        {/* {user && <Link to='/carts'><Cart /></Link>} */}
        <Link to='/products/new' className='text-3xl'>
          {/* {user && user.isAdmin && <AiFillEdit />} */}
        </Link>
        {/* 로그인된 사용자의 정보는 user라는 state에 담기고, 따라서 user에 값이 있으면 로그인이 된 상태, user에 값이 없으면 로그 아웃 상태 이므로 각각의 상태에 따라 보여지는 ui가 다르게 설정 한 것 */}
        {/* {user && <UserInfo user={user} />} */}
        {!user && <button onClick={handleLogin}>로그인</button>}
        {user && <button onClick={handleLogout}>로그 아웃</button>}
        {/* {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />} */}
      </nav>
    </header>
  )
}