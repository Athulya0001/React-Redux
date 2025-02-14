import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import PrivatePage from './pages/Private-Page/PrivatePage';
// import { useSelector } from 'react-redux';


const App = () => {

  // const navigate = useNavigate()

  //  const [user, setUser] = useState([]);

  // const currentUser = useSelector((state=>state.auth.currentUser))

  const currentUser=JSON.parse(localStorage.getItem('currentlyActiveUser'))


  // useEffect(() => {
  //   if (currentUser) {
  //     navigate('/')
  //   }
  // }, [currentUser]);

  return (
    <div className='bg-slate-100 h-screen'>
      <Routes>
        {currentUser? <Route path='/' element={<PrivatePage currentUser={currentUser}/>}/>:<Route path='/' element={<Signin/>}/>}
        <Route path='/register' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App