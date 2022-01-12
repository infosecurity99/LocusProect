import React from 'react'
import {Container} from './style'
import Navbar from '../Componenta/Navbar/Navbar'
import Baner from '../Componenta/Baner/Baner'
import Work from '../Componenta/Works/Work'
import Project from '../Componenta/Project/Project'
import Testimonial from '../Componenta/Testimonial/Testimonial'
import Contact from '../Componenta/Contact/Contact'
const App = () => {
  return (
   <Container>
           <Navbar/>
           <Baner/>
           <Work/>
           <Project/>
           <Testimonial/>
           <Contact/>
   </Container>
  )
}

export default App
