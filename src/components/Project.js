import React from "react";
import { Container, Card, Button } from 'react-bootstrap';
import Homepage from "../assets/Homepage.png"

function Project() {
    return (
        <Container className="">
            <Card>
                <Card.Header>Projects</Card.Header>
                <Card.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Homepage} />
                        <Card.Body>
                            <Card.Title>Stock Manager</Card.Title>
                            <Card.Text>
                            Manage the stock of you business in a convenient way with the Stock Manager app.

                            </Card.Text>
                            <Button variant="primary">Visit Project</Button>
                        </Card.Body>
                    </Card>
                    
                </Card.Body>
            </Card>
         
        </Container>
    );
}

export default Project;

