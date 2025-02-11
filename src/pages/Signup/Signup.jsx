import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../app/Redux/authSlice";

const Signup = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);

  const handleChange = (event) => {
  setFormData({
    ...formData,[event.target.name]:event.target.value,
  });
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(registerUser(formData));
    console.log(formData, "form")
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="name"
              name="username"
              type="text"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
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
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <Link to={"/"}>
          <p className="text-md text-center mt-4">
            Already have an account?{" "}
            <span className="text-amber-500">Signin</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
