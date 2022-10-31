import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Resume = () => {
    return (
    <Container>
        <Card>
        <Card.Header>Resume</Card.Header>
        <Card.Body>
            <Card.Text>
                      Find my Resume at my
                      <Card.Link href="https://linkedin.com/in/juan-carlos-marquez-63860254" > LinkedIn Profile.</Card.Link>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
    );
  };
  
  export default Resume;   
  
  
  