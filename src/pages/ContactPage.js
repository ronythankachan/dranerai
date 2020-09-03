import React from 'react';
import {Container} from 'react-bootstrap';
import { Form, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component{

    state={
            firstName:'',
            lastName:'',
            email:'',
            message:''
    }

    handleSubmit(e){
        e.preventDefault();
        alert("test");
        const { firstName, lastName, email, message } = this.state;
        let templateParams = {
            firstName:firstName,
            lastName:lastName,
            subject:'Email from draner.ai',
            email:email,
            message:message
        }
        
        emailjs.send('gmail','contact_template', templateParams, 'user_T8n5Lzk3ONUWIAY6ye64F')
        .then(response => {
          console.log("Email send successfully");  
        }).catch(err => {
            console.log("Email sending failed");
        });
        this.clearForm();
    }
    clearForm(){

    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    }

    render(){
        const details = {
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
                    <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                        <Row>
                            <Col>
                                <Form.Group controlId="firstName" className="mt-3" onChange={this.handleChange.bind(this,'firstName')} required>
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>  
                            </Col>  
                            <Col>
                            <Form.Group controlId="lastName" className="mt-3" onChange={this.handleChange.bind(this,'lastName')} required>
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>   
                            </Col>
                        </Row>
                        <Form.Group controlId="email" className="mt-3" onChange={this.handleChange.bind(this,'email')} required>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control type="email" placeholder="What's your email?" />
                        </Form.Group>   
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="What do you want to tell me.." onChange={this.handleChange.bind(this,'message')} required/>
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
}
export default ContactPage;
