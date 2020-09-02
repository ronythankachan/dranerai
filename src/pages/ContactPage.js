import React from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            message:''
        }
    }
    handleSubmit(e){
        const { firstName, lastName, email, message } = this.state;
        let templateParams = {
            firstName:firstName,
            lastName:lastName,
            subject:'Email from draner.ai',
            email:email,
            message:message
        }
        alert(templateParams.firstName+" "+templateParams.lastName+ " " +templateParams.subject);
        emailjs.send('gmail','contact_template', templateParams, 'user_T8n5Lzk3ONUWIAY6ye64F')
        .then((response) => {
            alert("Email sent");
        }, (err) => {
            alert("Email send failed");
        });
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    }

    render(){
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
                    <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                        <Row>
                            <Col>
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control id="firstName" type="text" placeholder="First name" onChange={this.handleChange.bind(this,'firstName')} required />
                            </Col>
                            <Col>
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control id="lastName" type="text" placeholder="Last name" onChange={this.handleChange.bind(this,'lastName')} required />
                            </Col>
                        </Row>
                        <Form.Group className="mt-3" controlId="email" onChange={this.handleChange.bind(this,'email')} required>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control id="email" type="email" placeholder="What's your email?" />
                        </Form.Group>   
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control id="message" as="textarea" rows="3" placeholder="What do you want to tell me.." onChange={this.handleChange.bind(this,'message')} required/>
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
