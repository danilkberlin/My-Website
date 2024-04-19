import {Row, Col, Image} from 'react-bootstrap';

// Icon 
import VSC from '../assets/img/VSCIcon.svg';
import Figma from '../assets/img/figmaIcon.svg';
import Photoshop from '../assets/img/photoshopIcon.svg';
import Illustrator from '../assets/img/illustratorIcon.svg';
import HTML from '../assets/img/htmlIcon.svg';
import CSS from '../assets/img/CSSIcon.svg';
import JS from '../assets/img/JSIcon.svg';
import React from '../assets/img/reactIcon.svg';
import Bootstrap from '../assets/img/bootstrapIcon.svg';
import Tailwindcss from '../assets/img/tailwindcssIcon.svg';
import Node from '../assets/img/nodeIcon.svg';
import Sass from '../assets/img/sassIcon.svg';

export default function FavoriteTools(){
    return(
        <>
            <Row className='mt-5 mb-2'>
                <Col>
                    <h1 className="text-title-gradient">My favourite tools</h1>
                </Col>
            </Row>
            <Row className=' align-items-center'>
                <Col xs={4} md={2} className='mb-2'>
                    {/* VSC */}
                    <div className='background-cards-about text-center'>
                        <Image src={VSC} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>VSC</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* Figma */}
                    <div className='background-cards-about text-center'>
                        <Image src={Figma} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Figma</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* Photoshop */}
                    <div className='background-cards-about text-center'>
                        <Image src={Photoshop} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Photoshop</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* illustrator */}
                    <div className='background-cards-about text-center'>
                        <Image src={Illustrator} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Illustrator</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* HTML */}
                    <div className='background-cards-about text-center'>
                        <Image src={HTML} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>HTML</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* CSS */}
                    <div className='background-cards-about text-center'>
                        <Image src={CSS} className='my-2' fluid/>
                        <h6 className='my-2'>CSS</h6>
                    </div>
                </Col>
            </Row>
            <Row className='my-2 align-items-center'>
                <Col xs={4} md={2} className='mb-2'>
                    {/* JS */}
                    <div className='background-cards-about text-center'>
                        <Image src={JS} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>JS</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* React */}
                    <div className='background-cards-about text-center'>
                        <Image src={React} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>React</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* Bootstrap */}
                    <div className='background-cards-about text-center'>
                        <Image src={Bootstrap} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Bootstrap</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* tailwindcss */}
                    <div className='background-cards-about text-center'>
                        <Image src={Tailwindcss} className='my-2' fluid/>
                        <h6 className='my-2'>Tailwindcss</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* Node */}
                    <div className='background-cards-about text-center'>
                        <Image src={Node} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Node.js</h6>
                    </div>
                </Col>
                <Col xs={4} md={2} className='mb-2'>
                    {/* Sass */}
                    <div className='background-cards-about text-center'>
                        <Image src={Sass} className='my-2' fluid/>
                        <h6 className='my-2 w-100'>Sass</h6>
                    </div>
                </Col>
            </Row>
        </>
    )
}