import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputOtp } from '@heroui/react';

const BACKEND = import.meta.env.VITE_BACKEND;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SignUpPage = () => {
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      role: '',
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpStep(true);
    toast.success(`OTP generated: ${otp}`);
    console.log('Generated OTP:', otp);
  };

  const handleOtpSubmit = async () => {
    if (otp === generatedOtp) {
      try {
        const values = getValues();
        await axios.post(`${BACKEND}/auth/signup`, values);
        toast.success('Signup successful!');
        reset();
        setOtp('');
        setOtpStep(false);
      } catch (error) {
        const message =
          error?.response?.data?.message || 'Signup failed. Please try again.';
        toast.error(message);
      }
    } else {
      toast.error('Invalid OTP');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900">
      <ToastContainer />

      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 48 48">
              <path
                d="M24 45.81C19.69 45.81 15.47 44.53 11.88 42.13 8.3 39.74 5.5 36.33 3.85 32.35 2.2 28.36 1.77 23.98 2.61 19.75 3.45 15.51 5.53 11.63 8.58 8.58 11.63 5.53 15.51 3.45 19.75 2.61 23.98 1.77 28.36 2.2 32.35 3.85 36.33 5.5 39.74 8.3 42.13 11.88 44.53 15.47 45.81 19.69 45.81 24H24V45.81Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight">AutoFix</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/services" className="text-sm font-medium text-gray-500 hover:text-gray-900">Services</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900">Contact</Link>
          </nav>
          <Link
            to="/login"
            className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 md:block"
          >
            Login
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-white/40 backdrop-blur-lg">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
              <p className="mt-2 text-sm text-gray-600">
                {otpStep ? 'Enter the OTP to complete signup' : 'Choose your role to get started.'}
              </p>
            </div>

            <form onSubmit={handleSubmit(generateOtp)} className="space-y-5">
              {/* Role */}
              <div>
                <select
                  {...register('role', { required: 'Please select a role' })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 pl-3 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 ${errors.role ? 'border-red-500' : ''}`}
                >
                  <option value="">Select your role</option>
                  <option value="user">Customer</option>
                  <option value="provider">Service Provider</option>
                </select>
                {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
              </div>

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: 'Enter a valid phone number',
                    },
                  })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                  })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === password || 'Passwords do not match',
                  })}
                  className={`w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
              </div>

              {/* OTP input section */}
              {otpStep && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">Enter the 6-digit OTP</div>
                  <div className="flex justify-center">
                    <InputOtp
                      length={6}
                      value={otp}
                      onValueChange={setOtp}
                      variant="bordered"
                      color="success"
                      className="border border-gray-300 rounded-md p-2"
                      inputClassName="w-10 h-12 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    OTP: <span className="font-semibold">{otp}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleOtpSubmit}
                    className="w-full rounded-md bg-green-600 py-3 px-4 text-white font-semibold shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Verify & Sign Up
                  </button>
                </div>
              )}

              {!otpStep && (
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 py-3 px-4 text-white font-semibold shadow-md transition-transform hover:scale-[1.01] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send OTP
                </button>
              )}
            </form>

            {/* Social */}
            <div className="my-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="h-px w-20 bg-gray-300" />
              <span>or continue with</span>
              <div className="h-px w-20 bg-gray-300" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-md bg-white py-2 px-4 text-gray-800 shadow-sm hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-md bg-white py-2 px-4 text-gray-800 shadow-sm hover:bg-gray-50">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88V15.5H8.31v-3.5h2.13V9.69c0-2.12 1.28-3.28 3.19-3.28.9 0 1.83.17 1.83.17v3h-1.5c-1.04 0-1.38.62-1.38 1.34v1.56h3.33l-.53 3.5h-2.8V21.88C18.34 21.13 22 16.99 22 12z" />
                </svg>
                Facebook
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?
              <Link to="/login" className="ml-1 font-medium text-blue-600 hover:text-blue-500">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SignUpPage;