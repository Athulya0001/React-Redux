import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../app/Redux/authSlice';
import { useDispatch } from 'react-redux';

const Signin = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);


  const handleChange = (event) => {
  setFormData({
    ...formData,[event.target.name]:event.target.value,
  });
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(login(formData));
    console.log(formData, "form")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col p-6 bg-white shadow-md rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name='email'
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
              placeholder="Enter Your Passwor"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <Link to={'/signup'}>
          <p className="text-md text-center mt-4">
            Don't have an account? <span className='text-amber-500'>Signup</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Signin