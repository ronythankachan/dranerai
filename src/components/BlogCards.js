import React from 'react';
import {Card, CardColumns, Button} from 'react-bootstrap';
import AI from '../images/ai.png';
import Spotify from '../images/spotify.png';
import LetsTalk from '../images/lets_talk.png';
import Chatbot from '../images/chatbot.jpg';
import BotIcon from '../images/bot_icon.jpeg'; 

function BlogCards(){
    return(
        <CardColumns>
            <Card>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Spotify} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Chatbot} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={LetsTalk} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={BotIcon} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={BotIcon} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Chatbot} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={AI} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="info">Read More</Button>
                </Card.Body>
            </Card>
        </CardColumns>
    );
}
export default BlogCards;