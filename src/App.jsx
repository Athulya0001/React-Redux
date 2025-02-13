import React from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import PrivatePage from './pages/Private-Page/PrivatePage';
import { useSelector } from 'react-redux';


const App = () => {

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className='bg-slate-100 h-screen'>
      <Routes>
        {isAuthenticated? <Route path='/' element={<PrivatePage currentUser={currentUser}/>}/>:<Route path='/' element={<Signin/>}/>}
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App