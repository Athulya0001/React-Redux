import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import PrivatePage from './pages/Private-Page/PrivatePage';
import { useSelector } from 'react-redux';


const App = () => {
  // const[user,setUser]=useState()
  const navigate=useNavigate()

  const currentUser = useSelector((state) => state.auth.currentUser);
  
    useEffect(() => {
      if (currentUser) {
        navigate("/");
      }
    }, [currentUser, navigate]);
    // const parseUser = JSON.parse(currentUser)
    // console.log(parseUser.username,"parse")

  // useEffect(() => {
  //     const currentUser=localStorage.getItem('currentlyActiveUser')
  //     setUser(currentUser)
  //     if(user) {
  //       navigate('/')
  //     }
  //   },[user]);

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className='bg-slate-100 h-screen'>
      <Routes>
        {currentUser ?<Route path='/' element={<PrivatePage currentUser={currentUser}/>}/>:<Route path='/' element={<Signin/>}/>}
        <Route path='/register' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App