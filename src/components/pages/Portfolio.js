import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Portfolio() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Trivia Tracker</Card.Title>
        <Card.Text>Answer trivia</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Deployed:</ListGroup.Item>
        <ListGroup.Item>Technologies: Handlebars</ListGroup.Item>
        <ListGroup.Item>github: </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}
