import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import mirajIMG from "../assets/img/miraj.jpg";

import { useState, useEffect } from "react";

const Banner = () => {
  const [loop, setLoop] = useState(0);
  const [delta, setDelta] = useState(100);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const rotateText = ["welcome", "Web Dev", "Software Engineer"];
  let period = 2000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loop % rotateText.length;
    let fullText = rotateText[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
      setDelta(100);
    }
  };
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hasnain Ahmed Miraj`}
              <span className="h2"> {text}</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt.
            </p>
            <button
              onClick={() => {
                console.log("hi");
              }}
            >
              Lets connect<ArrowRightCircle></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={mirajIMG} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;