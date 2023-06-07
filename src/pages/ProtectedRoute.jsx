import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'



// 해당 컴포넌트는 사용자가 로그인을 했는지 확인하고, 해당 사용자가 어드민 권한이 있는지 확인하는 컴포넌트다.
// props로 전달받는 requireAdmin이 true라면 로그인도 되어 있는 상태고, 어드민 권한도 갖고 있는 상태다.
// 조건에 맞지 않으면 최상위 경로로 이동한다, 조건에 맞는 경우에는 전달된 children을 보여준다.
export default function ProtectedRoute({ children, requireAdmin }) {
  // context안에 들어 있는 user를 받아와서
  const { user } = useContext(UserContext)
 // user의 정보가 없거나, requireAdmin이 true이어야 하는데 isAdmin이 false면 Admin만 볼 수 있는 컴포넌트를 렌더링 해주지 않고 home으로 보낸다. Navigate에 replace = true를 넣어 주면 해당 경로가 히스토리에 남지 않게 해준 것, 이렇게 해준 이유는 잘 못된 경로이기 때문에 뒤로가기를 눌러서 잘못된 경로에 다시 들어오게 할 필요가 없기 때문
  if(!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />
  }
// user의 정보가 있거나, 사용자가 admin이면 자식 컴포넌트를 렌더링 해준 것
  return children

}