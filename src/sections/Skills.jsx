import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, Box } from '@react-three/drei'

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'CSS', level: 85, color: '#1572b6' },
    { name: 'HTML', level: 90, color: '#e34f26' }
  ]

  const SkillIcon = ({ skill, index }) => {
    return (
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <group position={[index * 3 - 7.5, 0, 0]}>
          <Sphere args={[0.5, 32, 32]}>
            <meshStandardMaterial color={skill.color} />
          </Sphere>
          <Box args={[1, 0.1, 0.1]} position={[0, -0.8, 0]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
        </group>
      </Float>
    )
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 blob"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Skills & Technologies</h2>
          <p className="text-xl text-white/80">My technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="glass rounded-3xl p-8 card-3d"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-semibold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Proficiency Levels
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#CFCFCF] font-medium">{skill.name}</span>
                    <span className="text-[#9CA3AF]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-orange-500/20 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="h-96 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 glass rounded-3xl"></div>
            <Canvas className="rounded-3xl">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 1, 1]} />
              {skills.map((skill, index) => (
                <SkillIcon key={skill.name} skill={skill} index={index} />
              ))}
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
