import React from 'react';
import {Container} from 'react-bootstrap';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import Tick from '../images/tick.png';
import Rony from '../images/rony.jpeg';

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
        let data = {
            firstName:firstName,
            lastName:lastName,
            subject:'Email from draner.ai',
            email:email,
            message:message
        }
         axios({
            method: 'post',
            url: 'http://localhost:5000/api/send_mail',
            data: data
          })
        .then(response => {
            console.log(response);
            this.setState({messageStatus:this.getStatusMessage('success')});
        }).catch(err => {
            console.log(err);
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
                <div className="form-border">
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
                </div><hr/>
                <div>
                    <h4 className="mt-4">About Rony</h4><br/>
                    <Row>
                        <Col className="col-lg-3">
                            <img className="profile-picture" src={Rony} alt="Rony"/>
                            <p className="mt-3">Name: Rony Thankachan</p>
                            <p>Born: Novemeber 08</p>
                            <p>Country:India</p>
                            <p>Born: Novemeber 08</p>
                        </Col>
                        <Col>
                            <section>Rony is a software engineer and programmer who specializes in artificial intelligence and machine learing. So far he has completed 400 projects in artificial intellegence and 630 blog posts. This is a platform creater by 
                                rony to establish a set of data that can be primarly.Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
                                Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
                                Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
                            </section>
                        </Col>
                    </Row>
                </div>
            </Container>  
        );
    }
}
export default ContactPage;
