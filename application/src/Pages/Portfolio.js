import {Container, Row, Col, Card, Form, Image} from 'react-bootstrap';
//  Images jpeg 
import ImgProject1 from '../assets/img/project1.jpeg';
import ImgProject2 from '../assets/img/project2.jpeg';
import ImgProject3 from '../assets/img/project3.jpeg';
import ImgProject4 from '../assets/img/project4.jpeg';

export default function Portfolio(){ 
    return(
        <>
            <section id="portfolio" className="portfolio">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <Row>
                                <Col className="my-3">
                                    <button className='nav-button-content px-4 py-1 my-3 rounded-4'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-sign-railroad" viewBox="0 0 16 16">
                                    <path d="M11.303 6.584h1.064c.592 0 .936.334.936.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44zm-8.771-.414h1.064c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44z"/>
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L4.923 3.861 8 6.939l3.078-3.077L8.35 1.134Zm3.788 3.788L9.061 8l3.077 3.078 2.728-2.728a.495.495 0 0 0 0-.7zm-1.06 7.215L8 9.061l-3.077 3.077 2.727 2.728a.495.495 0 0 0 .7 0zm-7.216-1.06L6.939 8 3.862 4.923 1.134 7.65a.495.495 0 0 0 0 .7z"/>
                                    </svg> Portfolio!</button>               
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className='text-title-gradient'>Check out my featured projects.</h1>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-end my-4">
                        <Col md={9}>
                            <Row className="my-3">
                                <Col md={6} className="my-3">
                                    <Image  src={ImgProject3} className="rounded-4 w-100"/>
                                    <Form className="d-flex justify-content-center align-items-center mt-2">
                                        <button className="button-light-mode-blue px-4 py-1 mx-1 rounded-4">Illustrations</button>
                                        <button className="button-light-mode-blue px-4 py-1 mx-1 rounded-4">Web site</button>
                                    </Form>
                                </Col>
                                <Col md={6} className="my-3">
                                    <Image  src={ImgProject2} className="rounded-4 w-100"/>
                                    <Form className="d-flex justify-content-center align-items-center mt-2">
                                        <button className="button-dark-mode px-4 py-1 mx-1 rounded-4">Illustrations</button>
                                        <button className="button-dark-mode px-4 py-1 mx-1 rounded-4">Web site</button>
                                    </Form>
                                </Col>
                            </Row>
                            <Row className="my-3">
                            <Col md={6} className="my-3">
                                    <Image  src={ImgProject1} className="rounded-4 w-100"/>
                                    <Form className="d-flex justify-content-center align-items-center mt-2">
                                        <button className="button-dark-mode-green px-4 py-1 mx-1 rounded-4">Illustrations</button>
                                        <button className="button-dark-mode-green px-4 py-1 mx-1 rounded-4">Web site</button>
                                    </Form>
                                </Col>
                                <Col md={6} className="my-3">
                                    <Image  src={ImgProject4} className="rounded-4 w-100"/>
                                    <Form className="d-flex justify-content-center align-items-center mt-2">
                                        <button className="button-light-mode-violet px-4 py-1 mx-1 rounded-4">Illustrations</button>
                                        <button className="button-light-mode-violet px-4 py-1 mx-1 rounded-4">Web site</button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    )
}