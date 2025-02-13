import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/Redux/authSlice';

const Navbar = ({user}) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }


  return (
    <div className='bg-black p-2 flex justify-between items-center'>
            <h1 className='text-3xl text-white'> Welcome {user.username}</h1>
            <div>
                <button className='bg-red-700 hover:bg-red-500 p-2 rounded-md' onClick={handleLogout}>Logout</button>
            </div>
    </div>
  )
}

export default Navbar
