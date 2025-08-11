import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAuthStore } from '../store/authStore.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND = import.meta.env.VITE_BACKEND;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const { setUser, setToken } = useAuthStore();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BACKEND}/auth/login`, data, {
        withCredentials: true,
      });
      setUser(response.data.user)
      
      toast.success('Login successful!');

      // Clear the form
      reset();

      // Redirect after login
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Login error');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Header */}
      <header className="bg-white/90 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="size-8 text-blue-600">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">AutoFix</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link className="hidden text-base font-medium text-gray-500 transition-colors hover:text-gray-900 md:block" to="/about">About</Link>
            <Link className="hidden text-base font-medium text-gray-500 transition-colors hover:text-gray-900 md:block" to="/services">Services</Link>
            <Link className="hidden text-base font-medium text-gray-500 transition-colors hover:text-gray-900 md:block" to="/contact">Contact</Link>
            <Link className="flex items-center justify-center rounded-lg h-10 px-5 bg-gray-100 text-base font-semibold transition-colors hover:bg-gray-200" to="/signup">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-xl border border-white/40">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
              <p className="mt-2 text-base text-gray-600">Sign in to your account to continue</p>
            </div>

            {/* Login Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className={`block w-full rounded-lg border px-3 py-3 text-base placeholder-gray-500 transition-shadow duration-300 shadow-sm focus:shadow-md focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    className={`block w-full rounded-lg border px-3 py-3 text-base placeholder-gray-500 transition-shadow duration-300 shadow-sm focus:shadow-md focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 8 characters"
                      }
                    })}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg border border-transparent bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-base text-gray-600">Or sign in with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {/* Google */}
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md"
                >
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                  </svg>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md"
                >
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;
