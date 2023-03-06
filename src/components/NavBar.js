import React from 'react'
import { useState,useEffect } from 'react'


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'
import gitIcon from '../assets/img/iconmonstr-github-1.svg'
import logo from "../assets/img/logo.svg"

const NavBar = () => {
  const [activeLink,setActiveLink]=useState('home')
  const [scrolled,setScrolled]=useState('false')

  useEffect(() => {
    const onScroll=()=>{
      if(window.scrollY>50)
        setScrolled(true)
      else
        setScrolled(false)
    }

    window.addEventListener('scroll',onScroll)

    return ()=>window.removeEventListener('scroll',onScroll)
  }, [])


  const onUpdateActivaLink=(value)=>{
    setActiveLink(value)
  }



  return (
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActivaLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActivaLink('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActivaLink('projects')}}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/hasnain-miraj-74b097237/" target="_blank"><img src={navIcon1} alt="Linked in Icon" /></a>
                {/* <a href=""><img src={navIcon2} alt="" /></a> */}
                <a href="https://github.com/Mraj101" target="_blank"><img src={gitIcon} alt="this is git icon" /></a>
            </div>
            <button className='vvd' onClick={()=>{console.log('connect')}}>Lets Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar