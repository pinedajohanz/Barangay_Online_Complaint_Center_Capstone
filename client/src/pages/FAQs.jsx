import React from 'react'
import {NavbarBootstrap} from "../components/Navbarbs";
import Accordion from 'react-bootstrap/Accordion';
import faq_img from './image/faq_img.svg'
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <>
    <NavbarBootstrap />
    <section className='faq-section  bg-dark text-light'>
      <h1 className='my-5 pt-5 py-1 text-center'>Frequently Asked Questions</h1>
      <div className='container-faq'>
        <div className='row mx-3'>
          <div className='col-md-6'>
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the purpose of the barangay online complaint center</Accordion.Header>
              <Accordion.Body>
              An online web application that allows residents to file complaints and the barangay to respond and manage the complaints and their status.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can a Minor age (below 18 years old) file a complaint?</Accordion.Header>
              <Accordion.Body>
                Unfortunately, Residents aged below 18 years old are not allowed to create an account and file a complaint in the web application.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How do I file a complaint through the website?</Accordion.Header>
              <Accordion.Body>
              To submit a complaint online, you need to <Link to='/signup'>create an account</Link>  on the barangay online complaint center web application. Once you have created your account, you can <Link to='/login'>log in</Link> and submit a complaint by filling out the complaint form and submitting it online.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How long does it take for my complaint to be addressed?</Accordion.Header>
              <Accordion.Body>
              After you submit a complaint, the barangay online complaint center will review it <span className='fw-semibold'>(1 to 3 Business days)</span> and take the appropriate action. You will be informed of the status of your complaint through the web application and can check for updates at any time.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How do I get in touch with the barangay officials if I need assistance with the online complaint system?</Accordion.Header>
              <Accordion.Body>
                You may contact us <Link to='/contact'>HERE</Link> by letting us know if you need assistance with the online complaint system.
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </div>
          <div className='col-6'>
            <img 
            src={faq_img} 
            className='img-fluid w-100 d-none d-sm-block pb-5' 
            alt='img' 
            style={{height: 400, width: 300}} />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default FAQs