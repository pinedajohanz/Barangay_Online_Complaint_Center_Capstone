import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import forlandpage from './forlandpage.svg';
import { Footer } from './Footer';

function LandPage() {
  return (
    <>

<section className="bg-dark text-light p-5 text-center text-sm-start my-5">
        <div className="container-landpage">
            <div className="row d-sm-flex align-items-center justify-content-between">
                <div className="col-6 align-items-center">
                    <h1>MAY <span className="text-warning">REKLAMO</span> KA BA SA IYONG LUGAR?</h1>
                    <p className="lead my-4">
                        May Problema? May Issue sa lugar niyo o ibang issue na pwede makatulong ang barangay? Ireport na dito sa ating online complaint center para matugunan agad!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nobis veniam totam deserunt, nostrum ratione odio mollitia saepe pariatur expedita ducimus quae aliquid quo aut, sed aperiam vero architecto laudantium!
                    </p>
                    <Link to="/login">
                      <Button className="btn-primary btn-lg" variant="primary">ISUMBONG MO DITO / FILE A COMPLAINT!</Button>
                    </Link>
                </div>
                <div className="col-6">
                    
                    <img className="img-fluid w-100 d-none d-sm-block"
                    src={forlandpage}
                    alt="img"
                    />
                
                </div>
            </div>
        </div>
    </section>
    <Footer />
    {/* <Container fluid>
        <Card border="dark" classNameName="text-center">
        <Card.Header><h1>WELCOME TO BARANGAY ONLINE COMPLAINT CENTER</h1></Card.Header>
        <Card.Body>
            <Card.Title>MAY REKLAMO KA BA SA IYONG LUGAR?</Card.Title>
            <Card.Text>
            
            <Image classNameName="img-fluid" style={{ height: '400px', width: '400px' }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp_0ek3d0btWmy-wBMTYmu7RJJWkqpSRFXg&usqp=CAU' alt="Logo" />
            </Card.Text>
            <Link to="/login">
            <Button classNameName="btn-success" variant="primary">ISUMBONG MO DITO / FILE A COMPLAINT!</Button>
            </Link>
        </Card.Body>
        <Card.Footer classNameName="text-muted"></Card.Footer>
        </Card>
    </Container> */}
    </>
  );
}

export default LandPage;