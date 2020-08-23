import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function HomeNewsLetter(props){
    return(
        <Container className="form-border">
            <div className="form-heading">
                <h1>Subscribe</h1>
                <h6 className="section-subheading">Subscribe for newsletter and updates.</h6>
                <hr/>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="info" type="submit">Submit</Button>
            </Form>

        </Container>
    );
}
export default HomeNewsLetter;