import { NavbarBootstrap } from '../components/Navbarbs'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const ContactUsPage = () => {
  return (
    <>
    <NavbarBootstrap />
    <Card className="text-center">
      <Card.Header><h1>Contact Us</h1></Card.Header>
      <Card.Body>
        <Card.Title>Nandito ang mga Numero kung saan pwede niyo kaming tawagan</Card.Title>
        <Card.Text>
          
          <Image className="img-fluid" style={{ height: '400px', width: '400px' }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp_0ek3d0btWmy-wBMTYmu7RJJWkqpSRFXg&usqp=CAU' alt="Logo" />
        </Card.Text>
        <Link to="/login">
        <Button className="btn-success" variant="primary">CONTACT US</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </>
  );
}

export default ContactUsPage;