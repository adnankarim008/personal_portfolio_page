import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/addy.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from 'framer-motion';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "DevOps", "Cloud", "Software" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my World</span>
                <h1>{`Hi! I'm Adnan, a`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "DevOps Engineer"]'><span className="wrap">{text}</span><span>{" Engineer"}</span></span></h1>
                  <p>Meet our multi-talented individual,Adnan, who has merged the worlds of engineering and computer science. With a background in Aerospace Engineering and a Master's in Computer Science, they bring a unique perspective to the table. But that's not all - our subject also has a creative side, dabbling in photography and videography as a side hustle. When not working, they can be found exploring nature, trying out the finest dining experiences, and tinkering with the latest tech gadgets and desk setups. And if that wasn't enough, they also make time for fitness. Get ready to be inspired by the ultimate jack-of-all-trades! </p>
                  <button onClick={() => window.location.href = 'mailto:adnan.munshi94@gmail.com'}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            <motion.div
className="h-25 w-25 bg-white"
animate={{
  scale: [1, 3,3, 1, 1],
  rotate: [0, 0, 180, 180, 0],
  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
}}
transition={{
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 1,
}}
/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
