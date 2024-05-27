import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  Button,
  Modal,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";

function NavBar() {
  //  Modal window
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  Forms validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6f06ac6-deda-4af9-b1b6-4a80131d26f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <>
      <Navbar expand="md" className="navbar-fixed mb-3">
        <Container fluid>
          {/* <Navbar.Brand href="#" className='brand'>LOGO</Navbar.Brand> */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id="md"
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="justify-content-center flex-grow-1 pe-3"
              >
                <Nav.Link
                  className="mx-2"
                  data-to-scrollspy-id="home"
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  data-to-scrollspy-id="portfolio"
                  href="#portfolio"
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  data-to-scrollspy-id="about"
                  href="#about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  data-to-scrollspy-id="resume"
                  href="#resume"
                >
                  Resume
                </Nav.Link>
                <Nav.Link
                  className="mx-2"
                  data-to-scrollspy-id="contact"
                  href="#contact"
                >
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex align-items-center"></Form>
              <Form className="d-flex align-items-center">
                <Button
                  className="form-nav-button w-100  rounded-4"
                  variant="px-4 py-1 mx-2"
                  onClick={handleShow}
                >
                  <span className="text-lets-talk">
                    Let's Talk{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-left-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </span>
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Modals window */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-gradient">
            Let's make something awesome together!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  className="contact-style"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  className="contact-style"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text
                    className="contact-style"
                    id="inputGroupPrepend"
                  >
                    @
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    className="contact-style"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a eimal.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="my-2 contact-style"
                  as="textarea"
                  placeholder="A Few Words*"
                  rows={3}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Message.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" className="anim-button  rounded-4">
              Send Messeage{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </Button>
          </Form>
        </Modal.Body>
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
