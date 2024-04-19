import {Row, Col, Image, Container} from 'react-bootstrap';
// Images jped fotos 
import AboutCardImg1 from '../assets/img/aboutImgCard1.jpeg';
import AboutCardImg2 from '../assets/img/aboutImgCard2.jpeg';
import AboutCardImg3 from '../assets/img/aboutImgCard3.jpeg';
import AboutCardImg4 from '../assets/img/aboutImgCard4.jpeg';

export default function AboutCards(){
    return(
        <>
            <Row className='my-4 align-items-center'>
                <Col md={6}>
                    <div className='border-cards-about rounded-4'>
                        <Row className='my-2'>
                            <Col md={8}>
                                <h1 className='text-gradient ms-2'>Frontend development</h1>
                            </Col>
                        </Row>
                        <Row className='d-flex my-2'>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">UI/UX Desing</button>
                            </Col>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Desing to Code</button>            
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col md={12}>
                                <p className='grau-text ms-2'>I work with HTML/CSS, Framer and WardPress.</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col>
                                <Image src={AboutCardImg1} className="rounded-4" fluid/>  
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='border-cards-about rounded-4'>
                        <Row className='my-2'>
                            <Col md={12}>
                                <h1 className='text-gradient ms-2'>SEO/Digital marketing solutions</h1>
                            </Col>
                        </Row>
                        <Row className='d-flex my-2'>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Social Media</button>
                            </Col>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Analytics</button> 
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col md={12}>
                                <p className='grau-text ms-2'>Social media content plans, media monitoring, email and text messaging and search engine optimization.</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col>
                                <Image src={AboutCardImg3} className="rounded-4" fluid/>  
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6} className='my-2'>
                    <div className='border-cards-about rounded-4'>
                        <Row className='my-2'>
                            <Col md={6}>
                            <h1 className='text-gradient ms-2'>Brand identity</h1>
                            </Col>
                        </Row>
                        <Row className='d-flex my-2'>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Logo Desing</button>
                            </Col>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Style Guldes</button>          
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col md={12}>
                                <p className='grau-text ms-2'>I help my clients to develop a personality and brand voice,  design the brand look and logo.</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col>
                                <Image src={AboutCardImg4} className="rounded-4" fluid/>  
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6} className='my-2'>
                    <div className='border-cards-about rounded-4'>
                        <Row className='my-2'>
                            <Col md={12}>
                                <h1 className='text-gradient ms-2'>Digital art and graphic design</h1>
                            </Col>
                        </Row>
                        <Row className='d-flex my-2'>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Illustations</button>
                            </Col>
                            <Col xs={6}>
                                <button className="button-about-cards px-4 py-1 ms-2 rounded-4">Al Experiments</button> 
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col md={12}>
                                <p className='grau-text ms-2'>I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.</p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col>
                                <Image src={AboutCardImg2} className="rounded-4" fluid/>  
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        
        </>
    )
}