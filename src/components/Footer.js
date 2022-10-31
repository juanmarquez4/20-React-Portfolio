import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../App.css';


function Footer() {
    return (
        <Container>
            <Card className="footer border-0">
                <Card.Link href="https://github.com/juanmarquez4" className="brand-name">© Juan Marquez. All Rights Reserved </Card.Link>
            </Card>
        </Container>
       
    );
}

export default Footer;

