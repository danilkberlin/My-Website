import {Container, Row, Col} from "react-bootstrap";
import WorkExperience from "../components/WorkExperience";
import FavoriteTools from "../components/FavoriteTools";

export default  function Resume(){
    return(
        <>
        
            <section id="resume" className="resume">
                <Container>
                    <Row className='justify-content-end'>
                        <Col md='9'>
                            <Row>
                                <Col className="my-3">
                                    <button className='nav-button-content px-4 py-1 my-3 rounded-4'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-sign-railroad" viewBox="0 0 16 16">
                                    <path d="M11.303 6.584h1.064c.592 0 .936.334.936.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44zm-8.771-.414h1.064c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44z"/>
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L4.923 3.861 8 6.939l3.078-3.077L8.35 1.134Zm3.788 3.788L9.061 8l3.077 3.078 2.728-2.728a.495.495 0 0 0 0-.7zm-1.06 7.215L8 9.061l-3.077 3.077 2.727 2.728a.495.495 0 0 0 .7 0zm-7.216-1.06L6.939 8 3.862 4.923 1.134 7.65a.495.495 0 0 0 0 .7z"/>
                                    </svg> Resume</button>               
                                </Col>
                            </Row>
                            <Row>
                                <Col md='8'>
                                    <h1 className='text-title-gradient'>Education and Practical experience</h1>
                                </Col>
                            </Row>
                            <Row className='my-3'>
                                <Col>
                                    <p>Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself to be otherwise than what might appear to others as what you were or might have been would have appeared to them to be otherwise.</p>
                                </Col>
                            </Row>
                            <Row className='my-3'>
                                <Col>
                                    <h1 className='text-title-gradient'>My education</h1>
                                </Col>
                            </Row>
                            <Row className='liniale-tabl align-items-center py-4'>
                                <Col md={2}>
                                    <p className="text-white-50">2010-2015</p>
                                </Col>
                                <Col md={5}>
                                    <h3>Drawing Concentration</h3>
                                    <p><span className="text-white-50">Course by</span> Ukrainian Academy of Arts</p>
                                </Col>
                                <Col md={5}>
                                    <p className="text-white-50">Intensive drawing courses that present the fundamental and academic principles of drawing</p>
                                </Col>
                            </Row>
                            <Row className='liniale-tabl align-items-center py-4'>
                                <Col md={2}>
                                    <p className="text-white-50">2018-2019</p>
                                </Col>
                                <Col md={5}>
                                    <h3>Marketing</h3>
                                    <p><span className="text-white-50">Course by </span> Charkow Academy of Marketing</p>
                                </Col>
                                <Col md={5}>
                                    <p className="text-white-50">Intensive marketing courses presenting the fundamental principles of promoting and delivering a product as well as sales</p>
                                </Col>
                            </Row>
                            <Row className='liniale-tabl align-items-center py-4'>
                                <Col md={2}>
                                    <p className="text-white-50">2019-2020</p>
                                </Col>
                                <Col md={5}>
                                    <h3>Ul/Ux Desing Specialization</h3>
                                    <p><span className="text-white-50">Onlicne course by</span> XDI</p>
                                </Col>
                                <Col md={5}>
                                    <p className="text-white-50">This course is about how to complete the design process from beginning to end</p>
                                </Col>
                            </Row>
                            <Row className='liniale-tabl align-items-center py-4'>
                                <Col md={2}>
                                    <p className="text-white-50">2023-2024</p>
                                </Col>
                                <Col md={5}>
                                    <h3>Frontend development Specialization</h3>
                                    <p><span className="text-white-50">By</span> Little training</p>
                                </Col>
                                <Col md={5}>
                                    <p className="text-white-50">I teach frontend development and have experience working with clients and code</p>
                                </Col>
                            </Row>
                            <WorkExperience />
                            <FavoriteTools />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

