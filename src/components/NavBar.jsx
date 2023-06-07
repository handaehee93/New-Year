import React, { useContext} from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import Button from './ui/Button';
import MyCart from '../pages/MyCart';
import { UserContext } from '../context/UserContext'
import Cart from './Cart'





export default function Navbar() {
  const {user, login, logout} = useContext(UserContext)




  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center font-semibold text-4xl  text-logo '>
        <HiOutlineShoppingBag />
        <h1>Shopping</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products' >상품</Link>
        <div>카테고리</div>
        {user && <Link to='/carts'><Cart /></Link>}
        <Link to='/products/new' className='text-3xl'>
          {user && user.isAdmin && <AiFillEdit />}
        </Link>
        {/* 로그인된 사용자의 정보는 user라는 state에 담기고, 따라서 user에 값이 있으면 로그인이 된 상태, user에 값이 없으면 로그 아웃 상태 이므로 각각의 상태에 따라 보여지는 ui가 다르게 설정 한 것 */}
        {user && <UserInfo user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  )
}