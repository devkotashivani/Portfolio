import { Col, Container, Row } from "react-bootstrap"
import "../scss/about.scss"
import image from "../image/profile.png"

export default function about() {
    return (
        <div id="about" className="about">
            <Container fluid m-auto className="aboutContainer">
                <Row className="aboutRow">
                    <Col xs="6" sm="6" md="6" lg="6" className="image">
                        <img thumbnail src={image} alt=''></img>
                    </Col>
                    <Col xs="6" sm="6" md="6" lg="4" className="info">
                        <h1>About Me</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                             It has survived not only five centuries,
                             but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        
                        <button className="aboutButton">Download Resume</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
