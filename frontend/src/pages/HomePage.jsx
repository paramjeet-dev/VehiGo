import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AutoFixHomepage = () => {
  return (
    <motion.div
      className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white/80 px-10 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-gray-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tighter text-gray-900">AutoFix</h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600" href="#">How it Works</a>
          <a className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600" href="#">For Customers</a>
          <a className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600" href="#">For Pros</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login"><button className="hidden rounded-lg px-4 py-2 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-100 sm:block">Log In</button></Link>
          <Link to="/signup"><button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-primary-600">
            <span className="truncate">Sign Up</span>
          </button></Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCOeHXdZx9BwahHd96h_086JWoThLpDpZc04yy7f_WHUtr9n0vYS4wz5Or-E-jocAZJu-fOUaiHZ6MKMmEv7ncuRdJDSm4TFz76vYTDUXwRD_qFpPvETSbdW5qfJfB4YDF0FqzcPvUX8s9XQCKI87EV2Bb5bnb8bmOIPfC9Y7ifE8iTbB0E8hE-UA3uqaeXJQ8kKWi5XMuecPcEb08FV1un3ktnivmdGF2AhtDefTn8kGQtNikUZcX8p53iE-q1r74-81nV3W_qVdV")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-48">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Get Your Car Fixed, Fast</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">Connect with top-rated mechanics and auto repair shops in your area. Request a quote and get your car back on the road quickly and efficiently.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/login"><button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary-500 px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-600">
              <span className="truncate">Post a Request</span>
            </button></Link>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3 text-base font-bold text-primary-600 shadow-lg transition-all hover:bg-gray-100">
              <span className="truncate">Find a Pro</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose AutoFix?</h2>
            <p className="mt-4 text-lg text-gray-600">AutoFix connects car owners with skilled mechanics and repair shops, ensuring quality service and efficient repairs.</p>
          </div>
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <div className="transform rounded-xl bg-gray-50 p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path>
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">For Car Owners</h3>
              <p className="mt-2 text-base text-gray-600">Find trusted mechanics, compare quotes, and schedule repairs easily.</p>
            </div>

            {/* Feature 2 */}
            <div className="transform rounded-xl bg-gray-50 p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">For Mechanics</h3>
              <p className="mt-2 text-base text-gray-600">Connect with customers, manage appointments, and grow your business.</p>
            </div>

            {/* Feature 3 */}
            <div className="transform rounded-xl bg-gray-50 p-8 shadow-sm transition-transform hover:-translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">Fast & Reliable</h3>
              <p className="mt-2 text-base text-gray-600">Get your car fixed quickly with our network of experienced professionals.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="bg-gray-50 py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">A simple, four-step process to get your car back on the road.</p>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-1/2 top-4 hidden w-px -translate-x-1/2 bg-gray-300 md:block" style={{ height: 'calc(100% - 2rem)' }}></div>
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl font-bold text-primary-500">1</div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">Post a Request</h3>
                <p className="mt-2 text-base text-gray-600">Describe your car's issue and your location.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl font-bold text-primary-500">2</div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">Receive Quotes</h3>
                <p className="mt-2 text-base text-gray-600">Compare quotes from local mechanics and shops.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl font-bold text-primary-500">3</div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">Choose a Pro</h3>
                <p className="mt-2 text-base text-gray-600">Select the best pro based on reviews and pricing.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl font-bold text-primary-500">4</div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">Get It Fixed</h3>
                <p className="mt-2 text-base text-gray-600">Schedule the repair and get back on the road.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600">Real stories from satisfied customers and thriving mechanics.</p>
          </div>
          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img className="h-12 w-12 rounded-full bg-gray-200 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_tVXKm1pyxnKIr_l3u7myUNiRBqHrNx2AM__uRJje9FlJjCzi_byV0b2hbRgFpmOTjXlZ9a5I2FGhJHOTOOrAD2o86Wu6KYbHdLRkHoMspGRNL7SkNNZYqd151yOWnwvdBE6giGFK0F6cjNw2TPCKMY2kZ4srNndrt2WtLV-8EQBmSMGNFZ6286C8u2eox9b1X7hk1R33R_LuoXoIjERmqp6cayXt3Y4xqVZwXVai8lGGUHMAo3FGc4l-DT2SGZalfEssLNFODpe1" alt="Sophia Clark" />
                <div>
                  <p className="font-bold text-gray-900">Sophia Clark</p>
                  <p className="text-sm text-gray-500">Car Owner</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">"AutoFix made it so easy to find a reliable mechanic. I got quotes quickly and my car was fixed in no time!"</p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img className="h-12 w-12 rounded-full bg-gray-200 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_tVXKm1pyxnKIr_l3u7myUNiRBqHrNx2AM__uRJje9FlJjCzi_byV0b2hbRgFpmOTjXlZ9a5I2FGhJHOTOOrAD2o86Wu6KYbHdLRkHoMspGRNL7SkNNZYqd151yOWnwvdBE6giGFK0F6cjNw2TPCKMY2kZ4srNndrt2WtLV-8EQBmSMGNFZ6286C8u2eox9b1X7hk1R33R_LuoXoIjERmqp6cayXt3Y4xqVZwXVai8lGGUHMAo3FGc4l-DT2SGZalfEssLNFODpe1" alt="Ethan Carter" />
                <div>
                  <p className="font-bold text-gray-900">Ethan Carter</p>
                  <p className="text-sm text-gray-500">Mechanic</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p className="mt-4 text-gray-600">"I've been using AutoFix for my shop, and it's been great for getting new customers. The platform is easy to use."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img className="h-12 w-12 rounded-full bg-gray-200 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_tVXKm1pyxnKIr_l3u7myUNiRBqHrNx2AM__uRJje9FlJjCzi_byV0b2hbRgFpmOTjXlZ9a5I2FGhJHOTOOrAD2o86Wu6KYbHdLRkHoMspGRNL7SkNNZYqd151yOWnwvdBE6giGFK0F6cjNw2TPCKMY2kZ4srNndrt2WtLV-8EQBmSMGNFZ6286C8u2eox9b1X7hk1R33R_LuoXoIjERmqp6cayXt3Y4xqVZwXVai8lGGUHMAo3FGc4l-DT2SGZalfEssLNFODpe1" alt="Olivia Bennett" />
                <div>
                  <p className="font-bold text-gray-900">Olivia Bennett</p>
                  <p className="text-sm text-gray-500">Car Owner</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">"I was hesitant, but AutoFix connected me with a fantastic mechanic who fixed my car at a fair price. Highly recommend!"</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-primary-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600">Join AutoFix today and experience hassle-free car repairs.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/signup"><button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary-500 px-5 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-primary-600">
              <span className="truncate">Sign Up</span>
            </button></Link>
            <Link to="/login"><button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white px-5 py-3 text-base font-bold text-primary-600 shadow-md transition-all hover:bg-gray-100">
              <span className="truncate">Post a Request</span>
            </button></Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">About Us</a>
            <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">Contact</a>
            <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">Terms of Service</a>
            <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">Privacy Policy</a>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">© 2024 AutoFix. All rights reserved.</p>
        </div>
      </footer>

    </motion.div>
  );
};

export default AutoFixHomepage;