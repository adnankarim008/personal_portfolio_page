import AWS from "../assets/img/aws.png";
import Terraform from "../assets/img/terraform.png";
import Docker from "../assets/img/docker.png";
import Kubernetes from "../assets/img/kubernetes.png";
import Gitlab from "../assets/img/gitlab.png";
import Java from "../assets/img/java.png";
import React from "../assets/img/React.webp";
import Python from "../assets/img/Python.png";
import PostgreSQL from "../assets/img/PostgreSQL.png";
import Splunk from "../assets/img/Splunk_logo1.png";
import CSS from "../assets/img/css.png";
import Flutter from "../assets/img/flutter.png";
import PowerBI from "../assets/img/powerbi.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                        <p>Get ready to be impressed by our expert's tech stack, with expertise in a range of programming languages, frameworks, databases, and cloud computing services.<br></br>  From Java and React to SQL and AWS, they've got you covered..</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={AWS} />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={Terraform} alt="" />
                                <h5>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={Docker} alt="" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={Kubernetes} alt="" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={Gitlab} alt="" />
                                <h5>Gitlab</h5>
                            </div>
                            <div className="item">
                                <img src={PostgreSQL} alt="" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Splunk} alt="" />
                                <h5>Splunk</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Flutter} alt="" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={PowerBI} alt="" />
                                <h5>PowerBI</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
