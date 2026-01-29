import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma']
    },
    {
      title: 'Junior Developer',
      company: 'Startup Co.',
      period: '2019 - 2020',
      description: 'Built and maintained web applications, learned modern development practices, and contributed to open-source projects.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP']
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
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
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Experience</h2>
          <p className="text-xl text-white/80">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <motion.div
                  className="ml-16 glass rounded-3xl p-6 card-3d"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    y: -5
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-white/90 font-medium mb-2">{exp.company}</h4>
                  <p className="text-white/70 text-sm mb-4">{exp.period}</p>
                  <p className="text-white/90 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/20 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
