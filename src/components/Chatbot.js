import React from 'react';
import ChatBotIcon from '../images/bot_icon.jpeg';
import { Container } from 'react-bootstrap';

function Chatbot(props){
    return(
        <Container>
            <img class ="bot-icon" src={ChatBotIcon} alt="Load error"/>

            <img class ="bot-icon" src={ChatBotIcon} alt="Load error"/>
        </Container>
    );
}
export default Chatbot;