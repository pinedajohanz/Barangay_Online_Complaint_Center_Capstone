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
                <div className="col-md-6 align-items-center">
                    <h1>MAY <span className="text-warning">REKLAMO</span> KA BA SA IYONG LUGAR?</h1>
                    <p className="lead my-4">
                    Ba't hindi na ireport ang mga reklamo sa iyong lugar? Mayroong hindi matugunang problema o issue sa iyong lugar o ibang issue na pwedeng malutas ng barangay? Dito sa ating online complaint center, maaari mong i-report ang mga problema mo para sa agarang aksyon. Siguraduhin na ibigay ang mga detalyadong impormasyon upang mas mabilis at epektibo ang pagtugon sa iyong reklamo.
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
    </>
  );
}

export default LandPage;