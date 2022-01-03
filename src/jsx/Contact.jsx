import "../scss/contact.scss"
import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import image from "../image/contact.png"
import wave from "../image/wave.png"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="Contact">
        <div className="wave">
          <img className="waveimg" src={wave} alt=" "></img>
        </div>
        <Container className="contactContainer">
          <Row className="contactRow">
            <Col>
              <img className="image" src={image} alt=''></img>
            </Col>
            <Col className="info">
              <h1>Contact Me</h1>
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Col>
          </Row>

        </Container>
        </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3001/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then((response) => {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
}

export default Contact;