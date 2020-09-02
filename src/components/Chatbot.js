import React from 'react';
import ChatBotIcon from '../images/bot_icon.jpeg';
import { Container } from 'react-bootstrap';

function Chatbot(props){
    return(
        <Container>
            <img className ="bot-icon" src={ChatBotIcon} alt="Load error"/>
            <img className ="bot-icon" src={ChatBotIcon} alt="Load error"/>
        </Container>
    );
}
export default Chatbot;