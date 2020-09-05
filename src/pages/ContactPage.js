import React from 'react';
import {Container} from 'react-bootstrap';
import { Form, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import Tick from '../images/tick.png';

class ContactPage extends React.Component{

    state={
            firstName:'',
            lastName:'',
            email:'',
            message:'',
            messageStatus:''
    }

    handleSubmit(e){
        e.preventDefault();
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
            this.setState({messageStatus:this.getStatusMessage('success')});
        }).catch(err => {
            this.setState({messageStatus:this.getStatusMessage('failed')});
        }).finally(()=>{this.clearForm()});
    }
    getStatusMessage(status){
        if(status === 'success'){
            return (
                <div className="inline">
                    <img src={Tick} alt="error"/>
                    <p>Message send</p>
                </div>
            );
        }else{
            return (
                <div className="inline">
                    <p>Oops!Unable to send message!</p>
                </div>
            );
        }
    }
    clearForm(){
        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            message:'',
        });
        setTimeout(()=>{this.setState({messageStatus:''})},3000);
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
            <Container>
                <Container className="form-border">
                <div className="form-heading">
                        <h1>{details.title}</h1>
                        <h6 className="section-subheading">{details.subtitle}</h6>
                        <hr/>
                    </div>
                    <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                        <Row>
                            <Col>
                                <Form.Group controlId="firstName" className="mt-3" >
                                    <Form.Label>First Name *</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange.bind(this,'firstName')} required/>
                                </Form.Group>  
                            </Col>  
                            <Col>
                            <Form.Group controlId="lastName" className="mt-3">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange.bind(this,'lastName')} required/>
                            </Form.Group>   
                            </Col>
                        </Row>
                        <Form.Group controlId="email" className="mt-2" >
                            <Form.Label>Email *</Form.Label>
                            <Form.Control type="email" placeholder="What's your email?" value={this.state.email} onChange={this.handleChange.bind(this,'email')} required/>
                        </Form.Group>   
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="What do you want to tell me.." onChange={this.handleChange.bind(this,'message')} value={this.state.message} required/>
                        </Form.Group>
                        <Form.Text className="text-muted mb-3">
                            {details.disclaimer}
                        </Form.Text>
                        <Row>
                            <Col lg={2} md={3} sm={4}>
                                <Button variant="primary" type="submit" >
                                    Send Message
                                </Button>
                            </Col>
                            {this.state.messageStatus}
                        </Row>
                    </Form>
                </Container>
            </Container>  
        );
    }
}
export default ContactPage;
