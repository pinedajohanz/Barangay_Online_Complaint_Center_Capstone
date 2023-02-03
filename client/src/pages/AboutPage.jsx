import { NavbarBootstrap } from '../components/Navbarbs'
import aboutImg from './aboutImg.svg'
import { Footer } from '../components/Footer';

const AboutPage = () => {
  return (
    <>
    <NavbarBootstrap />
    <section className="bg-dark text-light p-5 text-center text-sm-start my-5">
        <div className="container-about">
            <div className="row d-sm-flex align-items-center justify-content-between">
                <div className="col-6 align-items-center">
                    <h1><span className="text-warning">About</span> Us</h1>
                    <p className="lead my-4">
                        Ang nag-aasikaso sa Barangay Online Complaint Center ay ang Barangay Molino 3 na nakabased sa Region 4A CALABARZON - Bacoor, Cavite 4102. May Problema? May Issue sa lugar niyo o ibang issue na pwede makatulong ang barangay? Ireport na dito sa ating online complaint center para matugunan agad!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nobis veniam totam deserunt, nostrum ratione odio mollitia saepe pariatur expedita ducimus quae aliquid quo aut, sed aperiam vero architecto laudantium!
                    </p>
                </div>
                <div className="col-6">
                    
                    <img className="img-fluid w-100 d-none d-sm-block"
                    src={aboutImg}
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

export default AboutPage;