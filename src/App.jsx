import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import PrivatePage from './pages/Private-Page/PrivatePage';
import { useSelector } from 'react-redux';


const App = () => {
  const[user,setUser]=useState()
  const navigate=useNavigate()
  useEffect(() => {
      const currentUser=localStorage.getItem('currentlyActiveUser')
      setUser(currentUser)
      if(user) {
        navigate('/')
      }
    },[user]);

  // const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className='bg-slate-100 h-screen'>
      <Routes>
        {user ?<Route path='/' element={<PrivatePage currentUser={user}/>}/>:<Route path='/' element={<Signin/>}/>}
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App