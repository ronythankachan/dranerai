import React from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Row, Col, Button } from 'react-bootstrap';

function ContactPage(props){

    var state = {
        "disclaimer":"*Your Information won't be disclosed under no circumstances.",
        "title":"Let's talk",
        "subtitle":"For any queries or to discuss something."
    }
    return(
        <Container className="form-border mt-5">
                <div className="form-heading">
                    <h1>{state.title}</h1>
                    <h6 className="section-subheading">{state.subtitle}</h6>
                    <hr/>
                </div>
                <Form >
                    <Row>
                        <Col>
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" placeholder="Last name" />
                        </Col>
                    </Row>
                    <Form.Group className="mt-3" controlId="email">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="What's your email?" />
                    </Form.Group>   
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="What do you want to tell me.." />
                    </Form.Group>
                    <Form.Text className="text-muted mb-3">
                        {state.disclaimer}
                    </Form.Text>
                    <Button variant="primary" type="submit" >
                        Send Message
                    </Button>
                </Form>
        </Container>  
    );
}
export default ContactPage;
