import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import NomNomsImg from "../assets/img/nomnoms.png";
import MyShellImg from "../assets/img/myshell.png";
import QMImg from "../assets/img/QuizMaster.png";
import projImg2 from "../assets/img/calc.png";
import projImg3 from "../assets/img/foodtruck.jpg";
import logoWhite from "../assets/img/logo-white.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NomNoms",
      description: "Collaborative Restaurant Selection",
      imgUrl: NomNomsImg,
      link: "https://nom-noms.vercel.app/"
    },
    {
      title: "MyShell",
      description: "Custom Shell Project",
      imgUrl: MyShellImg,
      link: "https://example.com/myshell"
    },
    {
      title: "QuizMaster",
      description: "Quiz Management Tool",
      imgUrl: QMImg,
      link: "https://example.com/quizmaster"
    },
    {
      title: "BiteGuide",
      description: "Food Truck Tracker",
      imgUrl: projImg3,
      link: "https://github.com/Ddhawan2003/BiteGuide/tree/main"
    },
    {
      title: "Planlytic",
      description: "Retirement Calculator",
      imgUrl: projImg2,
      link: "https://example.com/planlytic"
    },
    {
      title: "Sportify",
      description: "Centralized Sports & Fitness Platform",
      imgUrl: logoWhite,
      link: "https://github.com/aniketmohanty82/Sportify"
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
                      onClick={() => window.open(project.link, "_blank")}
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
  );
}