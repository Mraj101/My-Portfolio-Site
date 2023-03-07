import { Circle } from "react-circle";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <Circle progress={80} lineWidth={28} bgColor="whiteSmoke"progressColor="hotpink" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                            <Circle progress={95} lineWidth={28} bgColor="whiteSmoke"progressColor="green"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <Circle progress={90} lineWidth={28} bgColor="whiteSmoke"progressColor="yellow"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <Circle progress={85} lineWidth={28} bgColor="whiteSmoke"progressColor="magenta"/>
                                <h5>python</h5>
                            </div>
                            <div className="item">
                            <Circle progress={85} lineWidth={28} bgColor="whiteSmoke"progressColor="blue"/>
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="sharp" />
    </section>
  )
}
