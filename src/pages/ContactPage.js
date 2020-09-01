import React from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function handleSubmit(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(firstName+" "+lastName+" "+email+" " +message);

    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            first_name: firstName,  
            last_name: lastName,
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

function ContactPage(props){

    var details = {
        "disclaimer":"*Your Information won't be disclosed under no circumstances.",
        "title":"Let's talk",
        "subtitle":"For any queries or to discuss something."
    }
    return(
        <Container className="form-border mt-5">
                <div className="form-heading">
                    <h1>{details.title}</h1>
                    <h6 className="section-subheading">{details.subtitle}</h6>
                    <hr/>
                </div>
                <Form id="contact-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control id="firstName" type="text" placeholder="First name" required />
                        </Col>
                        <Col>
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control id="lastName" type="text" placeholder="Last name" required />
                        </Col>
                    </Row>
                    <Form.Group className="mt-3" controlId="email" required>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control id="email" type="email" placeholder="What's your email?" />
                    </Form.Group>   
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control id="message" as="textarea" rows="3" placeholder="What do you want to tell me.." required/>
                    </Form.Group>
                    <Form.Text className="text-muted mb-3">
                        {details.disclaimer}
                    </Form.Text>
                    <Button variant="primary" type="submit" >
                        Send Message
                    </Button>
                </Form>
        </Container>  
    );
}
export default ContactPage;
