import React, { createContext,useContext } from 'react'
const UserDataContext = createContext();
const UserContextProvider = ({children}) => {
  return (
    <UserDataContext.Provider value={{}}>
        {children}
    </UserDataContext.Provider>
  )
}
export const useUserDataContext = () => useContext(UserDataContext);
export default UserContextProvider    ;  