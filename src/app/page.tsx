'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { useRef } from 'react'


export default function Home() {

  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar
       portfolioRef = {portfolioRef}
       aboutRef = {aboutRef}
       projectRef = {projectRef}
       skillsRef = {skillsRef}
       contactRef = {contactRef}
      />
      <div ref={portfolioRef} id='portfolio-section'>
        <Portfolio/>
      </div>
      <div ref={aboutRef} id='about-section'>
        <About/>
      </div>
      <div ref={projectRef} id='project-section'>
        <Projects/>
      </div>
      <div ref={skillsRef} id='skills-section'>
        <Skills/>
      </div>
      <div ref={contactRef} id='contact-section'>
        <Contact/>
      </div>

      <Footer/>
    </div>
  )
};
