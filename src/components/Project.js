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
                            <Button variant="primary" href='https://stock-manager1234.herokuapp.com/'>Visit Project</Button>
                            <Button className="my-3" variant="primary" href='https://github.com/juanmarquez4/stock-manager'>Visit Project's Repository</Button>
                        </Card.Body>
                        
                    </Card>
                    <Card.Subtitle className="m-3 text-muted">More projects coming soon {"-->"} </Card.Subtitle>
                </Card.Body>
            </Card>
         
        </Container>
    );
}

export default Project;

