import meter1 from "../assets/img/meter1.svg";
import JavaIcon from "../assets/img/java.svg"
import CIcon from "../assets/img/c.svg"
import PythonIcon from "../assets/img/python.svg"
import JSIcon from "../assets/img/javascript.svg"
import HTMLIcon from "../assets/img/html.svg"
import CSSIcon from "../assets/img/css.svg"
import CPPIcon from "../assets/img/c++.svg"
import TSIcon from "../assets/img/typescript.svg"
import ReactIcon from "../assets/img/react.svg"
import FirebaseIcon from "../assets/img/firebase.svg"
import AndroidIcon from "../assets/img/android.svg"
import AzureIcon from "../assets/img/azure.svg"
import MySQLIcon from "../assets/img/mysql.svg"
import PBIIcon from "../assets/img/New_Power_BI_Logo.svg"
import TableauIcon from "../assets/img/tableau-software.svg"
import PostmanIcon from "../assets/img/postman-icon-svgrepo-com.svg"
import ConfluenceIcon from "../assets/img/confluence-svgrepo-com.svg"
import RIcon from "../assets/img/r-svgrepo-com.svg"
import RustIcon from "../assets/img/rust-svgrepo-com.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={JavaIcon} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={CIcon} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={PythonIcon} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={JSIcon} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={TSIcon} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={HTMLIcon} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSSIcon} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={RIcon} alt="Image" />
                                <h5>R</h5>
                            </div>
                            <div className="item">
                                <img src={CPPIcon} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={RustIcon} alt="Image" />
                                <h5>Rust</h5>
                            </div>
                            <div className="item">
                                <img src={ReactIcon} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={FirebaseIcon} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={PBIIcon} alt="Image" />
                                <h5>PowerBI</h5>
                            </div>
                            <div className="item">
                                <img src={AndroidIcon} alt="Image" />
                                <h5>Android</h5>
                            </div>
                            <div className="item">
                                <img src={ConfluenceIcon} alt="Image" />
                                <h5>Confluence</h5>
                            </div>
                            <div className="item">
                                <img src={AzureIcon} alt="Image" />
                                <h5>Microsoft Azure</h5>
                            </div>
                            <div className="item">
                                <img src={MySQLIcon} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={PostmanIcon} alt="Image" />
                                <h5>POSTman</h5>
                            </div>
                            <div className="item">
                                <img src={TableauIcon} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
