import React from 'react';
import {Card,CardColumns,Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

import ChatbotIcon from '../images/chatbot.jpg';
import AI from '../images/ai.png';
class HomeProjectCards extends React.Component{

  redirect(projectName){
    return this.props.history.push("projects/"+projectName);
  }

  render(){
    return(
      <CardColumns>
        <Card>
          <Card.Img variant="top" src={ChatbotIcon} />
          <Card.Body>
            <Card.Title className="card-title">Simple seq2seq closed domain chatbot</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Button variant="info" onClick={this.redirect.bind(this,'closedseq2seq')}>Try now</Button>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img variant="top" src={AI} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    );
  }
}
export default withRouter(HomeProjectCards);