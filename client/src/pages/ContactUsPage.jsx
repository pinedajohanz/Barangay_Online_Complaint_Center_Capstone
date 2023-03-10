import { NavbarBootstrap } from '../components/Navbarbs'
import ContactImg from './image/contactImg.svg'
import { Footer } from '../components/Footer';
import molino3map from './image/molino3map.jpg'


const ContactUsPage = () => {
  return (
    <>
    <NavbarBootstrap />
    <section className="bg-dark text-light p-5 text-center text-sm-start my-5">
        <div className="container-contact">
            <div className="row d-sm-flex align-items-center justify-content-between">
                <div className="col-md-6 align-items-center">
                    <h1><span className="text-warning">Contact </span>Us</h1>
                    <p className="lead my-4 text-justify">
                    Makipag-ugnayan sa team sa likod ng Barangay Online Complaint Center, pinamamahalaan ng Barangay Molino 3 na nakabase sa Rehiyon 4A CALABARZON - Bacoor, Cavite 4102. Kung mayroong problema o isyu sa iyong lokasyon o anumang ibang pag-aalala na maaaring tulungan ng barangay, huwag mag-atubiling lumapit sa amin. I-report ito sa pamamagitan ng aming online complaint center para sa agarang aksyon. Kami ay dito upang makatulong!                    
                    </p>
                </div>
                <div className="col-6">
                    
                    <img className="img-fluid w-100 d-none d-sm-block"
                    src={ContactImg}
                    alt="img"
                    />
                
                </div>
            </div>
        </div>
    </section>

    <section className="bg-dark text-light p-5 text-center text-sm-start my-5">
        <div className="container-contactinfo">
            <div className="row g-4">
                <div className="col-md-6">
                    <h1 classname="text-center mb-4">Contact Information</h1>
                    <ul className="list-group list-group-flush lead" style={{borderRadius: '10px'}}>
                        <li className="list-group-item">
                            <span className="fw-bold">Main Location:</span> <span className="fw-normal">In front of Shell PAG-ASA, Along Molino road</span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Barangay Hall:</span> <span className="fw-normal">(046) 438-5705</span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Cellphone number </span><span className='text-primary fw-bold'> (GLOBE):</span> <span className="fw-normal">09774658252</span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Cellphone number </span><span className='text-success fw-bold'> (SMART):</span> <span className="fw-normal">09287624503</span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Command Center </span> <span className='text-danger fw-bold'>(EMERGENCY RESPONSE):</span> <span className="fw-normal">(046) 438-6617 </span>
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Email Address:</span> <span className="fw-normal">Barangay_Molino_3@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={molino3map} alt=''  style={{ height: "400px", width: "650px", borderRadius: '10px' }}></img>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default ContactUsPage;