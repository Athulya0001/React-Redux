import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import PrivatePage from './pages/Private-Page/PrivatePage';


const App = () => {
  return (
    <div className='bg-slate-100 h-screen'>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/private' element={<PrivatePage/>}/>

      </Routes>
    </div>
  )
}

export default App