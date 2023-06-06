import { createContext, useState, useEffect } from 'react';
import { login, logout} from '../../api/firebase';
import { userStateChange } from '../../api/firebase';

export const UserContext = createContext()

// user의 정보를 필요로 하는 컴포넌트는 navbar와 protected route등 하나가 아니므로 context를 사용하여 전역적으로 사용할 수 있도록 해준 것
export function UserContextProvider({children}) {
  const [user, setUser] = useState()
  useEffect(() => {
    userStateChange((user) => {
      setUser(user)
    })
  },[])
  return(
    // Provider의 자식 컴포넌트에서 사용할 수 있는 값들을 value로 내려주는 것
    <UserContext.Provider value={{user, login: login, logout: logout}}>
      {children}
    </UserContext.Provider>
  )
}