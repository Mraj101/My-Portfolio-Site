import React from 'react'

import  Container  from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'


const Banner = () => {
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='tagline'>
                <Col xs={12} md={6}>
                    <span>Welcome to my portfolio</span>
                    <h1>{`Hasnain Ahmed Miraj`} <span>Web Dev</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, nesciunt.</p>
                    {/* <button onClick={()=>{}}></button> */}
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner