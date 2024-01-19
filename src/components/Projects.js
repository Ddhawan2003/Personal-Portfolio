import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import NomNomsImg from "../assets/img/nomnoms.png";
import MyShellImg from "../assets/img/myshell.png";
import QMImg from "../assets/img/QuizMaster.png";
import projImg2 from "../assets/img/calc.png";
import projImg3 from "../assets/img/foodtruck.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NomNoms",
      description: "Collaborative Restaurant Selection",
      imgUrl: NomNomsImg,
    },
    {
      title: "MyShell",
      description: "Custom Shell Project",
      imgUrl: MyShellImg,
    },
    {
      title: "QuizMaster",
      description: "Quiz Management Tool",
      imgUrl: QMImg,
    },
    {
      title: "BiteGuide",
      description: "Food Truck Tracker",
      imgUrl: projImg3,
    },
    {
      title: "Planlytic",
      description: "Retirement Calculator",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
