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
                <div className="col-md-6 align-items-center">
                    <h1><span className="text-warning">About</span> Us</h1>
                    <p className="lead my-4 text-justify">
                    Ang Barangay Online Complaint Center ay pinamamahalaan at pinangangasiwaan ng Barangay Molino 3 na nakabased sa Region 4A CALABARZON sa lungsod ng Bacoor, Cavite 4102. 
                    <br />
                    Mayroong hindi kayang malutas na problema o isyu sa iyong lugar na maaaring makatulong ang barangay? Huwag mag-atubiling ireport ito sa ating online complaint center para agad itong maaksyunan.
                    <br />
                    Ang layunin nito ay upang magbigay ng madaling paraan para sa mga residente na maipahayag ang kanilang mga reklamo at mga hinaing sa barangay, at upang matugunan nang mas mabilis at epektibo ang mga ito. Kami ay nagbibigay ng kahusayan at kagalingan sa pag-aasikaso sa mga reklamo na ipinapasa sa amin, upang matugunan nang tama at maayos ang mga ito.
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

    <section id="section-team" className="p-5 bg-primary">
        <div className="container-team">
            <h2 className="text-center text-white"> Our Barangay Team</h2>
            <p className="lead text-center text-white mb-5">
                Our Barangay serve and assist residents who have concerns and complaints in their residences and locations.
            </p>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img 
                            src="https://randomuser.me/api/portraits/men/15.jpg" 
                            className="rounded-circle mb-3" alt="">
                            </img>
                            <h3 className='card-title mb-3'>Joshua Pineda</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sed, facere expedita enim porro in.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img 
                            src="https://randomuser.me/api/portraits/men/24.jpg" 
                            className="rounded-circle mb-3" alt="">
                            </img>
                            <h3 className='card-title mb-3'>Leo Murphy</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sed, facere expedita enim porro in.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img 
                            src="https://randomuser.me/api/portraits/women/26.jpg" 
                            className="rounded-circle mb-3" alt="">
                            </img>
                            <h3 className='card-title mb-3'>Juria Medina</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sed, facere expedita enim porro in.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img 
                            src="https://randomuser.me/api/portraits/women/50.jpg" 
                            className="rounded-circle mb-3" alt="">
                            </img>
                            <h3 className='card-title mb-3'>Jiheon Morales</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sed, facere expedita enim porro in.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default AboutPage;