import BendigoBank from "../assets/img/BendigoBank.jpeg";
import ABB from "../assets/img/ABB.png";
import FinXL from "../assets/img/finxl.png";
import Costco from "../assets/img/costco.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Experience = () => {
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
    <section className="skill" id="experience">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Experience</h2>
                        <p>With experience in various industries such as information technology, aerospace engineering,trades and retail, <br></br> I have gained a unique perspective on how technology can improve business operations and customer satisfaction..</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={BendigoBank} alt="" />
                                <h5>Bendigo Bank</h5>
                            </div>
                            <div className="item">
                                <img src={ABB} alt="" />
                                <h5>ABB</h5>
                            </div>
                            <div className="item">
                                <img src={FinXL} alt="" />
                                <h5>FinXL</h5>
                            </div>
                            <div className="item">
                                <img src={Costco} alt="" />
                                <h5>Costco</h5>
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
