import React from 'react';
import '../scss/home.scss';
import {useEffect, useRef} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {init} from "ityped";

export default function Home() {

    const textRef = useRef();

    useEffect(()=>{

        init(textRef.current,{
            showCursor: false,
            backDelay: 1000,
            backSpeed:60,
            strings: ["Software Developer", "Web Developer", "Website Designer", "Content Creator"],
        });

    },[])

    return (
        <div className="home">
            <Container fluid className="homeContainer justify-content-center align-items-center">
                <Row className="homeRow">
                    <Col className="left">
                    </Col>
                    <Col className="right">
                        <div className="wrapper">
                            <h2>Hi There</h2>
                            <h1>I'm Shivani Devkota</h1>
                            <h3>a <span ref={textRef}></span></h3>
                        </div>
                        <a href="#about"> 
                           
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
