import background1 from '../assets/background1.jpg'
import screenshort from '../assets/screenshort.png'
import article4 from '../assets/article4.jpg'
import technology from '../assets/technology.jpg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import activeStates from '../assets/activeStates.jpg';
import mobileSuccess from '../assets/mobileSuccess.jpg'
import cardActive1 from '../assets/cardActive1.jpg'
import cardActive2 from '../assets/cardActive2.jpg'
import adviceDesign1 from '../assets/adviceDesign1.jpg'
import adviceDesign2 from '../assets/adviceDesign2.jpg'
import screenshort1 from '../assets/Screenshort1.png';
import screenshort2 from '../assets/Screenshort2.png'
import screenshort3 from '../assets/Screenshort3.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import Project from "./Project.jsx";
const Home = () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    return (
        <div className="container">
            <nav className=" navbar navbar-expand bg-light navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold" href='/#'>
                        <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Eveline</span>Fotso
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#evelinefotso">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact details">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id='evelinefotso' className="my-5">
                <div className="container">
                    <div className="row gy-4 gy-md-0">
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                            <h1 className="fw-bold">I'm Sylvette Eveline Fotso, Web Developer</h1>
                            <h2 className="fw-light">Welcome to my universe</h2>
                            <a href="#skills" className='btn btn-primary mt-5'>My web skills</a>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <img src={background1} alt="My profile picture" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <section id='skills' className='py-5 bg-light'>
                <div className="container">
                    <h2 className="fw-normal fs-4 mb-0 ">My skills</h2>
                    <h3 className="fw-light fs-5">Web Developer</h3>
                    <div className='row gy-4 mt-4'>
                        <div className=" col-12 col-md-8 my-2">
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <FaHtml5 color='red' fontSize={20} />
                                            <p className="fw-bold m-0">HTML5</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='90%'>
                                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <FaCss3Alt color='blue' fontSize={20} />
                                            <p className="fw-bold m-0">CSS3</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='80%'>
                                            <div className="progress-bar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <FaJs color='yellow' fontSize={20} />
                                            <p className="fw-bold m-0">Js</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='75%'>
                                            <div className="progress-bar" style={{ width: '75%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <GrReactjs color='blue' fontSize={20} />
                                            <p className="fw-bold m-0">ReactJs </p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='50%'>
                                            <div className="progress-bar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" col-12  col-md-4">
                            <img src={screenshort} className='w-100' />
                        </div>
                    </div>
                    <div className=' row my-3'>
                        <div className="col-12 col-md-4">
                            <img src={article4} className='w-100' />
                        </div>
                        <div className="col-12 col-md-8" >
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <FaFigma fontSize={20} />
                                            <p className="fw-bold m-0">figma</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='0%'>
                                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-white p-3 my-2">
                                <div className="row">
                                    <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                                        <div className="d-flex justify-items-center">
                                            <SiAdobexd color='violet' fontSize={20} />
                                            <p className="fw-bold m-0">Adobe xd</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress" data-bs-toggle="tooltip" title='40%'>
                                            <div className="progress-bar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='portfolio' className='py-5'>
                <div className="container">
                    <div className='mb-0 row text-center'>
                        <h2 className="fw-normal fs-4">My portfolio</h2>
                        <h3 className="fw-light fs-5">Personal and professional projects</h3>
                    </div>
                    <div className='row gy-4 mt-4'>
                        <Project
                            imgProject={adviceDesign1}
                            title="Advice generator"
                            text="Introducing Api"
                            number='1'
                            article1={article4}
                            article2={adviceDesign1}
                            article3={adviceDesign2}
                            key={1}
                        />
                        <Project
                            imgProject={project1}
                            title="Form"
                            text="Html and css review"
                            number='2'
                            article1={project1}
                            article2={activeStates}
                            article3={mobileSuccess}
                            key={2}
                        />
                        <Project
                            imgProject={project2}
                            title="Bank card"
                            text="HTML, CSS,and Js review"
                            number='3'
                            article1={project2}
                            article2={cardActive1}
                            article3={cardActive2}
                            key={3}
                        />
                        <Project
                            imgProject={screenshort2}
                            title="E-commerce"
                            text="ReactJs, Api's,"
                            number='4'
                            article1={screenshort2}
                            article2={screenshort1}
                            article3={screenshort3}
                            key={4}
                        />
                    </div>
                </div>
            </section>

            <section className=' py-5 bg-light'>
                <div className="row my-2">
                    <div className='mb-0 row text-center'>
                        <h2 className="fw-normal fs-4 ">Have a web design project in mind?</h2>
                        <h3 className="fw-light fs-5">Let's discuss it over a coffee!</h3>
                    </div>
                    <div className="col-12 col-md-5 mt-4 gy-4" >
                        <img src={technology} className='w-100' />
                    </div>
                    <div className=" col-12 col-md-7 text-start">
                        <form action='' className='row gy-4'>
                            <div className='col-6'>
                                <label for="firstName" className='form-lable'>First Name</label>
                                <input type='text' className='form-control' name="firstName" id='firstName' />
                            </div>
                            <div className='col-6'>
                                <label for="lastName" className='form-lable'>Last Name</label>
                                <input type='text' className='form-control' name="lastName" id='lastName' />
                            </div>
                            <div className="mb-12">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' id="email" placeholder='name@example.com' aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-12">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" name='message' id="message" rows="3" />
                            </div>
                            <div className='col-12'>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section id='contact details'>
                <div className=" row d-flex justify-content-between">
                    <div className="col-12 col-md-4 ">
                        <a className="navbar-brand text-uppercase fw-bold" href='/#'>
                            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Eveline</span>Fotso
                        </a>
                    </div>
                    <div className="col-12  col-md-4">
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#' className='text-decoration-none text-dack' data-bs-toggle='modal'
                                    data-bs-target='legalNotice'>
                                    Legal notice
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12  col-md-4  text-md-end">
                        <ul className="list-inline mb-0">
                            <li className='list-inline-item'>
                                <a href="#" className='text-decoration-none text-dack' data-bs-toggle="tooltip" title='Instagram'>
                                    <FaInstagram color='orange' fontSize={25} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='text-decoration-none text-dack' data-bs-toggle="tooltip" title='Linkedin'>
                                    <FaLinkedin color='blue' fontSize={25} />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='text-decoration-none text-dack' data-bs-toggle="tooltip" title='twitter'>
                                    <FaTwitter color='blue' fontSize={25} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="modal fade" id="legalNotice" tabindex="-1" aria-labelledby="legalNotice" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div Name="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Legal Notice</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                                    </p>
                                    <p>
                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
