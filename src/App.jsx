import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';


const App = () => {
  return (
    <div className='bg-slate-100 max-w-5xl h-screen'>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default App