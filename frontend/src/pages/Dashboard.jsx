import { useState } from 'react';
import { motion } from 'framer-motion';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [activeNavLink, setActiveNavLink] = useState('requests');

  const requests = [
    {
      id: '12345',
      title: '2018 Sedan, Engine Trouble',
      price: '$250',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCADc_rOCF-dH5nxjX5e1Q10llLzioHT_AmNvOtDB5cHl2xLNwd22CmHUp5OaX_4kakYjlo2oytjVaGX5Br3caYBfdd6ytM5ZoE3Uc8i2WVddCB9vfSRNIMM-Io86iJsuBY8IcLsNxaoVhlft-wvR2Ts1bDXwBvVYw23TpyCFL2y515XlBkr5GarLcdmEUwLpVoij2fURObEqXzJtEeD90Q6URsf05bE6a-kbvfupa8MnGU0D676bRNYy5STosyERhwp5wZaT0u8hUy'
    },
    {
      id: '67890',
      title: '2020 SUV, Brake Repair',
      price: '$300',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbD6SQNvcEqA5ll7Muh0V1S9qGG7Nq1YECudVMK6UEXVxQ5TQX2c7QWG4_fPWuhWiB89MhMnt-oSTjykhlVIsYaT-jS3Jw5Tqd9EHioeuVT9-IXy5cyN3BzCVfN1zoJubLR5-h3j6_5Ivc0kgLpM_jxFxPGLph0BVp45oGrLzvJvd-JEwUZ6GRqRpvH0fqJ4WbkKGeV9BtHUawDCA5y-UnfL-jlAP2jaAA9YfA-fdewK2-jM_bDXwS0QaYFDfd1lX6TAmjbSP530xE'
    },
    {
      id: '11223',
      title: '2015 Truck, Transmission Issue',
      price: '$400',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2msu36j5FEXEFqlWy2EZQLEPhgjLQec1H5i09xmm21yb1HKef1oO2oAwLckyZVtHN7zhBmjVMeLvd5_bOnEv0eZMh2eK4dAh7nz1F0ndcbWly5-OvGyM8z9eDK3ZQdN0MMyMaJOHSpt7pnsU2SlUphhuIv2CSEYOl38Vln5-jkW16rAneWcCwx58ssPzH3GfIiHymsfAbU3nFyh291xjiZspX5PtwmMCbG45Hw519PdY9K-mWOCW3v-gt8KGJ6VJlo1PpxEpyWH5A'
    }
  ];

  const notifications = [
    {
      title: 'Request Claimed',
      message: 'Service Provider A has claimed your request #12345',
      time: '2h ago'
    },
    {
      title: 'Request Claimed',
      message: 'Service Provider B has claimed your request #67890',
      time: '4h ago'
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white border-r border-gray-200 flex flex-col"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">AutoRepair</h1>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4 px-6 py-4 border-t border-gray-200">
          <img
            alt="User avatar"
            className="rounded-full w-12 h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyc3OxrkVfDY5XfkxeT3FoNDrRt6VsXzSuL8xkYjrt49NGFE7fLN5KHGq1t9y2n1A29xYsjDkHSoEtxx3FQpZmUbJq0oc93gYFHmvLVDNrlFRh9LRlFUfWYdOKRTyZa0Z3BpS-g_xI9tnx4lbnb4j-9b_sEOhEjtxJ-27tpHmi7fl1Lf1iUAywBP-vg-A0Q9RLizU1z-QjjDbWZQBBt6I7rwPQy1KkJ8J5iVcCkDJIQUHwZXEOxxtMG5SjfDGqUk4IfEdN-r4QnQwx"
          />
          <div>
            <p className="font-semibold text-gray-800">Sophia</p>
            <p className="text-sm text-gray-500">Customer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-2">
          {['dashboard', 'requests', 'payments', 'profile'].map((nav) => (
            <button
              key={nav}
              onClick={() => setActiveNavLink(nav)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md w-full text-left ${
                activeNavLink === nav
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <span className="w-6 h-6">{/* Replace with icons if needed */}</span>
              <span className="capitalize">{nav}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 p-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Requests</h1>
            <button className="px-5 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500">
              + Post New Request
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-8 -mb-px">
              {['pending', 'inProgress', 'completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-1 py-4 text-sm ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                      : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </nav>
          </div>

          {/* Request List */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {requests.map((req) => (
              <motion.div
                key={req.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt="Car"
                    className="w-16 h-16 rounded-lg object-cover"
                    src={req.img}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Request #{req.id}</p>
                    <p className="text-sm text-gray-500">{req.title}</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-800">{req.price}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Notifications */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Notifications</h2>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {notifications.map((note, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
                >
                  <div className="flex items-center justify-center p-3 bg-blue-100 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{note.title}</p>
                    <p className="text-sm text-gray-500">{note.message}</p>
                  </div>
                  <p className="text-sm text-gray-400">{note.time}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default UserDashboard;
