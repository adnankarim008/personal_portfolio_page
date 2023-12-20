import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AI.png";
import projImg2 from "../assets/img/NLP.jpeg";
import projImg3 from "../assets/img/ios.png";
import projImg4 from "../assets/img/design-patterns.jpg";
import projImg5 from "../assets/img/figmapro.png";
import projImg6 from "../assets/img/reactproject.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const GoogleDriveVideo = ({ videoIds }) => {
  return (
    <div>
      {videoIds.map((videoId, index) => (
        <iframe
          key={index}
          title={`Google Drive Video ${index + 1}`}
          width="640"
          height="360"
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

const videoIds = ['1MEZ_al1qO9CtBRqQpCQLl2ZAg831xHNe', '1rtvsxdzQBAruZuZz0CID3wIia-LfEb80', '1EMoB0YXgwnhK_O7q36u7RvM5fxqh4uwN','1jcjWCvIccgyYLXolmfGWQGtQDqZiC-fA','1jeluy33OAvBdWurJ21TZikHL3z7rww2B','1pk_VjbSuFokUV7DY1FjWGQeMudrpcFaH','14PWILl4sgI2M24oYHsRbL3IiEk1b2dEq','1G2gcvtT8b5981JFbzjxRV4vWnUWP1RWT','1W4M5KfYzF4tVZuMcLLwJ0rJPYvIzKXHE'];

export const Projects = () => {

  const projects = [
    {
      title: "Artifical Intelligence",
      description: "Moral machine decision maker",
      imgUrl: projImg1,
    },
    {
      title: "Machine Learning",
      description: "Natural language processing of tweets",
      imgUrl: projImg2,
    },
    {
      title: " iPhone Appication",
      description: "Swift Development of a geothermal app",
      imgUrl: projImg3,
    },
    {
      title: "Software Patterns",
      description: "Snakes and Ladders using GRASP and GoF patterns",
      imgUrl: projImg4,
    },
    {
      title: "Flutter Application",
      description: "A photo sharing application to store childrens art",
      imgUrl: projImg5,
    },
    {
      title: "Serverless Web Application",
      description: "AWS, React, Docker, Kubernetes and JavaScript",
      imgUrl: projImg6,
    },
  ];
  // Set the Instagram User Access Token
const accessToken = 'IGQWRNbWpVZADJLZA29acFpkaXRzTXNCaEVKRmZAUYXZALUUw5VWFPcWNIbXJGdFVLN3ctMFdvbmV3dHRFYThYMzFjVFBtMENUdEtpUFhwN0JhWHBQMjZAQMUNKUDFpUWgzX3hrWHZAvMUpNWFQ1N3NuZAXdIcFduMXgtb2sZD';

// Set the Instagram API URL
const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&filter=IMAGE`;

// Fetch the Instagram API data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Create a variable to hold the HTML code for the Instagram feed
    let html = '';
    let count = 0;
    // Loop through the Instagram media items
    data.data.forEach(item => {

      if (count === 12) {
        return;
      }
      // Add the HTML code for the media item to the variable
      if (item.media_type === "IMAGE"){

        html += `<a href="${item.permalink}" target="_blank"><img src="${item.media_url}" alt="${item.caption}" /></a>`;
        count++;
      }
      
    });

    // Insert the HTML code into the Instagram feed div
    document.getElementById('instagram-feed').innerHTML = html;
  });

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p>Here, you'll find a showcase of my best work in tech and glimpses into my hobbies and interests. Let's explore my portfolio of passion together!.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Computing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Photography</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Videography</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <div id="instagram-feed" class="instagram-grid"></div>

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="google-drive-videos row">
                    {videoIds.map((videoId, index) => (
                      <div key={index} className="col-md-4">
                        <div className="google-drive-video">
                          <div className="video-wrapper">
                            <iframe
                              title={`Google Drive Video ${index + 1}`}
                              src={`https://drive.google.com/file/d/${videoId}/preview`}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
