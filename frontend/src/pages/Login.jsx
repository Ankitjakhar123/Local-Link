import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.success("Signup successful! You can now log in.");
      setIsLogin(true); // stay on page and switch to login form
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-6">
        <div className="flex justify-center">
          <img src={assets.logo} alt="Local Link" className="w-36" />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-sm text-gray-500">
          {isLogin ? "Login to continue using Local Link" : "Signup to get started"}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              required
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <p className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white font-medium py-2 rounded-lg"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 hover:underline font-medium cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
