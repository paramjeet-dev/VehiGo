import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AutoFixHomepage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import UserDashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AutoFixHomepage />,
  },{
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/signup',
    element:<SignUpPage/>
  },
  {
    path:'/dashboard',
    element:<UserDashboard/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
