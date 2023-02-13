import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"
import mirajIMG from "../assets/img/miraj.jpg"



const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>{`Hasnain Ahmed Miraj`} <span>Web Dev</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, nesciunt.</p>
                    <button onClick={()=>{console.log("hi")}}>Lets connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                        <img src={mirajIMG} alt="header img" />
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner