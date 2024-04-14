import { useState } from 'react';
import {Container, Nav, Navbar, Offcanvas, Form, Button, Modal} from 'react-bootstrap';

function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Navbar expand='md' className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#" className='brand'>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id='md'
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                        Offcanvas
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav variant="pills" defaultActiveKey="/home" className="justify-content-center flex-grow-1 pe-3">
                            <Nav.Link className='mx-2'  href="#home">Home</Nav.Link>
                            <Nav.Link className='mx-2' href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='mx-2' href="#about">About</Nav.Link>
                            <Nav.Link className='mx-2' href="#resume">Resume</Nav.Link>
                            <Nav.Link className='mx-2' href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button className='w-100  rounded-4' variant="px-4 py-1 mx-2" onClick={handleShow}><span className='text-lets-talk'>Let's Talk  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg></span>
                            </Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

        {/* Modals window */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>

  );
}

export default NavBar;