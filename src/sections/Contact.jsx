import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const quickLinks = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      href: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@yourhandle',
      href: 'https://twitter.com/yourhandle'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Get In Touch</h2>
          <p className="text-xl text-white/80">Let's work together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="glass rounded-2xl p-6 card-3d group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                    y: -5
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{link.title}</h4>
                      <p className="text-white/70 text-sm">{link.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 card-3d"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                y: -5
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-slate-100 font-medium mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-100 font-medium mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-slate-100 font-medium mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-100 font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              <p className="text-white/60 text-sm mt-4 text-center">
                Your information is secure and will only be used to contact you.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
