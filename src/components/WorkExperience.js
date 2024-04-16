import {Row, Col} from 'react-bootstrap';

export default function WorkExperience() {
    return (
        <>
            <Row className='my-4'>
                <Col>
                    <h1 className="text-title mt-3">Work experience</h1>
                </Col>
            </Row>
            <Row className='liniale-tabl align-items-center py-4'>
                <Col md={2}>
                    <p className="text-white-50">2019-2022</p>
                </Col>
                <Col md={5}>
                    <h3>System administrator</h3>
                    <p><span className="text-white-50">Work by</span> Meest</p>
                </Col>
                <Col md={5}>
                    <p className="text-white-50">Worked as a data processor, transitioned to the development department, and assumed the role of a system administrator within a year</p>
                </Col>
            </Row>
            <Row className='liniale-tabl align-items-center py-4'>
                <Col md={2}>
                    <p className="text-white-50">2023</p>
                </Col>
                <Col md={5}>
                    <h3>Frontend Developer</h3>
                    <p><span className="text-white-50">Practice at</span> Turbine Kreuzberg GmbH</p>
                </Col>
                <Col md={5}>
                    <p className="text-white-50">Gained experience in front-end development during internship</p>
                </Col>
            </Row>
        </>
    )
}