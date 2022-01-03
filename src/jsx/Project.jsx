import "../scss/project.scss"
import { Container, Row, Col, Card } from "react-bootstrap"
import saras from "../image/saras.PNG"
import kalimata from "../image/kalimata.PNG"
import Ai from "../image/AI1.PNG"

export default function project() {
    return (
        <div id="project" className="project">
            <Container fluid>
                <Row className="heading">
                    <Col className="text-center">
                        <h1 >Projects</h1>
                    </Col>
                </Row>
                <Row className="projectRow">
                    <Col xs="12" sm="4" md="4" lg="4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className="image" variant="top" src={saras} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col  xs="12" sm="4" md="4" lg="4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className="image" variant="top" src={kalimata} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col  xs="12" sm="4" md="4" lg="4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className="image" variant="top" src={Ai} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
