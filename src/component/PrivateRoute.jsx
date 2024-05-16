import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/Auth'
import { Login } from './Login';

export const PrivateRoute = ({children}) => {
    let {loggedIn , setIsLoggedIn} = useContext(AuthContext) ;
    if(loggedIn==false){
        alert("Please login to see or create reciepes...") ;
    }
  return (
    loggedIn?
    children : <Login/>
  )
}
