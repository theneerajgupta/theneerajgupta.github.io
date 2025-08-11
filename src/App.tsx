// import components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// import pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'

import { Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
