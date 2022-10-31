import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
    <Container>
        <Card>
        <Card.Header>Contact Me</Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" placeholder="Write me a message" />
                </Form.Group>

                <Button variant="primary" type="submit" href='/20-React-Portfolio'>
                    Submit
                </Button>
            </Form>
        </Card.Body>
        </Card>
    </Container>
    );
  };
  
  export default Contact;   
  
  
  