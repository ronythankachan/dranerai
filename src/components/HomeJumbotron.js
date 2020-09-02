import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Typing from 'react-typing-animation';

import '../App.css';

function HomeJumbotron(props){
    return(
        <Container>
            <Jumbotron className="jumbotron-color" fluid={true}>
                <Typing speed={2}>
                    <span className="typist-font">Building cool projects.. </span>
                    <Typing.Backspace count={16} />
                    <span className="typist-font">shitty projects no one cares_</span>

                </Typing>
                <p>
                    A platform that provides implementation of various neural network and bleeding edge AI technologies.
                    Let me build it, so that you can focus on your task in hand.
                </p>
                <p>
                    <Button variant="warning">Learn more</Button>
                </p>
            </Jumbotron>
        </Container>

    );
}
export default HomeJumbotron;