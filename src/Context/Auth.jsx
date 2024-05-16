import React, { createContext, useState } from 'react'
import { useContext } from 'react'

let AuthContext = createContext() ;

function AuthProvider({children}){
    let [loggedIn , setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")) || false) ;
    let [dataArr , setdataArr] = useState(JSON.parse(localStorage.getItem("FoodItemList"))||[]) ;
    let [count,setCount] = useState(0) ;
    let [dataItems , setDataItems] = useState([]) ;

    return (
        <AuthContext.Provider value={{loggedIn, setIsLoggedIn, dataItems , setDataItems , dataArr , setdataArr, count,setCount}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext ;
export {AuthProvider} ;