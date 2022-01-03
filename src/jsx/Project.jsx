import "../scss/project.scss"
import { Container, Row, Col, Card } from "react-bootstrap"
import saras from "../image/saras.PNG"
import kalimata from "../image/kalimata.PNG"
import Ai from "../image/AI1.PNG"
import "./Private.jsx"
import { Link } from "react-router-dom"

export default function project() {
    return (
        <div id="project" className="project">
            <Container fluid className="projectContainer">
                <Row className="heading">
                    <Col className="text-center">
                        <h1 >Projects</h1>
                    </Col>
                </Row>
                <Row className="projectRow">
                    <Col xs="12" sm="12" md="4" lg="4">
                        <Card className="projectCard">
                            <a className="link" target="_blank"  rel="noreferrer" href="https://saras.care/">
                            <Card.Img className="image" variant="top" src={saras} />                           
                            <Card.Body>
                                <Card.Title>Saras Care Website</Card.Title>
                                <Card.Text>
                                   Tools: WordPress, Php, MSAzure
                                </Card.Text>
                            </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4">
                        <Card  className="projectCard">
                        <a className="link" target="_blank"  rel="noreferrer"  href="#private">
                            <Card.Img className="image" variant="top" src={kalimata} />
                            <Card.Body>
                                <Card.Title>Kalimata Websie</Card.Title>
                                <Card.Text>
                                     Tools: WordPress, Php, MSAzure
                                </Card.Text>
                            </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4">
                        <Card  className="projectCard">
                            <a className="link" target="_blank"  rel="noreferrer" href="#private">
                            <Card.Img className="image" variant="top" src={Ai} />
                            <Card.Body>
                                <Card.Title>AI-Enabled Cloud Migrating System</Card.Title>
                                <Card.Text>
                                    Tools: React JS, CSS, SASS, NodeJS, Amazon web services and Firebase
                                </Card.Text>                               
                            </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
