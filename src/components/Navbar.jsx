import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Your_Name_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/60 backdrop-blur-xl border border-orange-500/20 m-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-[#FFFFFF]">Portfolio</h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CFCFCF] hover:text-[#FB923C] px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-orange-500/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 hover:shadow-orange-500/40 transition duration-300 card-3d"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Resume
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="glass inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-[#0D0D0D]/90 backdrop-blur-xl border border-orange-500/20 m-4 rounded-xl"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 pt-2 pb-3 space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CFCFCF] hover:text-[#FB923C] block px-3 py-3 rounded-xl text-base font-medium hover:bg-orange-500/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                handleDownloadResume()
                setIsOpen(false)
              }}
              className="w-full bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-3 py-3 rounded-xl text-base font-medium hover:scale-105 hover:shadow-orange-500/40 transition duration-300 card-3d"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
