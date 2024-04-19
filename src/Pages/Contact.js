import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default function Contact(){
    return(
        <>
             <section id="contact" className='contact'>
                <Container>
                    <Row className='justify-content-end'>
                        <Col md={9}>
                            <Row>
                                <Col className="my-3">
                                    <button className='list-decor px-4 py-1 my-3'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-sign-railroad" viewBox="0 0 16 16">
                                    <path d="M11.303 6.584h1.064c.592 0 .936.334.936.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44zm-8.771-.414h1.064c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521zm.521.414v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44z"/>
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L4.923 3.861 8 6.939l3.078-3.077L8.35 1.134Zm3.788 3.788L9.061 8l3.077 3.078 2.728-2.728a.495.495 0 0 0 0-.7zm-1.06 7.215L8 9.061l-3.077 3.077 2.727 2.728a.495.495 0 0 0 .7 0zm-7.216-1.06L6.939 8 3.862 4.923 1.134 7.65a.495.495 0 0 0 0 .7z"/>
                                    </svg> Contact</button>               
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <h1 className='text-title-gradient'>Let's make something awesome together!</h1>
                                </Col>
                            </Row>
                            <Form>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <Form.Control className='my-2 contact-style' type='name' placeholder='Your Name*' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <Form.Control className='my-2 contact-style' type='name' placeholder='Company Name*' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <Form.Control className='my-2 contact-style' type='email' placeholder='Email Adress*'/>
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <Form.Control className='my-2 contact-style'type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone Number*' required/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control className='my-2 contact-style' as="textarea" placeholder='A Few Words*' rows={3} />
                                    </Col>
                                </Row>
                                <Row className='my-3'>
                                    <Col md={3} xs={12} className='align-items-center'>
                                        <Button className='buton-letstalk rounded-4 w-100 text-center' variant="px-4 py-2" >Send Messeage <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                            </svg>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>     
        </>
    )
}