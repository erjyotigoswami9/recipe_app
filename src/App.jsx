import { useState } from 'react'
import './App.css'
import { Navbar } from './component/Navbar'
import { Routes , Route} from 'react-router-dom'
import { Home } from './component/Home'
import { Login } from './component/Login'
import { Create } from './component/Create'
import { Reciepe } from './component/Reciepe'
import { PrivateRoute } from './component/PrivateRoute'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/create' element={<PrivateRoute><Create/></PrivateRoute>} />
      <Route path='/reciepe/:id' element={<PrivateRoute><Reciepe/></PrivateRoute>} />
    </Routes>
    </>
  )
}

export default App
