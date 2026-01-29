import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', size = 'medium', ...props }) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500",
    outline: "bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-500"
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
