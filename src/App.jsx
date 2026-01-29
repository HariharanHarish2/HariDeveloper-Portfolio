import React from 'react'
import Layout from './components/Layout'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
