import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 blob"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <p className="text-white/70 mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
              { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
              { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
              { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="glass rounded-2xl p-4 text-white/80 hover:text-white transition-all duration-200 card-3d"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
