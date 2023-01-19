import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
// import forlandpage from './src/forlandpage.svg';

function LandPage() {
  return (
    <>
    <Container fluid>
        <Card className="text-center">
        <Card.Header><h1>WELCOME TO BARANGAY ONLINE COMPLAINT CENTER</h1></Card.Header>
        <Card.Body>
            <Card.Title>MAY REKLAMO KA BA SA IYONG LUGAR?</Card.Title>
            <Card.Text>
            
            <Image className="img-fluid" style={{ height: '400px', width: '400px' }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp_0ek3d0btWmy-wBMTYmu7RJJWkqpSRFXg&usqp=CAU' alt="Logo" />
            </Card.Text>
            <Link to="/login">
            <Button className="btn-success" variant="primary">ISUMBONG MO DITO / FILE A COMPLAINT!</Button>
            </Link>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    </Container>
    </>
  );
}

export default LandPage;