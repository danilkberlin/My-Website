import {Container, Row, Col, Button} from 'react-bootstrap';
import Doks from '../assets/Documents/28.03_Lebenslauf_neu.docx';


export default function About(){
    return(
        <>
            <section id="about" className="about">
                <Container>
                    <Row className='justify-content-end'>
                        <Col md={9}>
                            <Row>
                                <Col className="my-3">
                                    <button className='list-decor px-4 py-1 my-3'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-sign-railroad" viewBox="0 0 16 16">
                                    <path d="M11.303 6.584h1.064c.592 0 .936.334.936.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44zm-8.771-.414h1.064c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44z"/>
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L4.923 3.861 8 6.939l3.078-3.077L8.35 1.134Zm3.788 3.788L9.061 8l3.077 3.078 2.728-2.728a.495.495 0 0 0 0-.7zm-1.06 7.215L8 9.061l-3.077 3.077 2.727 2.728a.495.495 0 0 0 .7 0zm-7.216-1.06L6.939 8 3.862 4.923 1.134 7.65a.495.495 0 0 0 0 .7z"/>
                                    </svg> About Me</button>               
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className='text-title'>Turning complex problems into simple design</h1>
                                </Col>
                            </Row>
                            <Row className="my-4 align-items-center">
                                <Col xs={4}>
                                    <div className="text-center background-cards-skills py-3">
                                        <h1 className='text-title'>40+</h1>
                                        <p>Happy clients</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="text-center background-cards-skills py-3">
                                        <h1 className='text-title'>2+</h1>
                                        <p>Years of experience</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="text-center background-cards-skills py-3">
                                        <h1 className='text-title'>50+</h1>
                                        <p>Projects done</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col md={8}>
                                    <p>Welcome! I'm Danylo Kravets, a young individual from Kharkiv who moved to Berlin for new challenges. Here, I not only learn German but also explore my passion for programming. My goal is to enhance my skills in this exciting field. Join me on this journey through the world of knowledge and technology, where every day is a new opportunity to achieve something amazing!</p>
                                    <p>Join me on the blog, where I share my journey through the realms of knowledge and technology. Discover captivating insights into programming, personal growth, and the boundless world of possibilities. Let's explore new horizons together!</p>
                                </Col>
                                <Col md={4} className='text-form'>
                                    <Row className="me-2">
                                        <Col>
                                            <p className="text-white-50">Name</p>
                                            <h6 className="text-form-fet">Danylo Kravets</h6>
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>
                                            <p className="text-white-50">Phone</p>
                                            <h6 className="text-form-fet">+4915225988431</h6>
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>
                                            <p className="text-white-50">Email</p>
                                            <h6 className="text-form-fet">danilkravets19@gmail.com</h6>
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>
                                            <p className="text-white-50">Location</p>
                                            <h6 className="text-form-fet">Berlin, Germany</h6>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <a  href={Doks} download="Danil_Kravets_Lebenslauf_neu.docx">
                                        <Button className='buton-letstalk rounded-4 w-100 text-center' variant="px-4 py-2" >Download CV <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                        </svg></Button>
                                    </a>
                                </Col>
                            </Row>
                            {/* <AboutCards /> */}
                        </Col>
                    </Row>
                </Container>
            </section>        
        </>
    )
}