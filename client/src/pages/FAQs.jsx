import React from 'react'
import {NavbarBootstrap} from "../components/Navbarbs";
import Accordion from 'react-bootstrap/Accordion';
import faq_img from './faq_img.svg'

const FAQs = () => {
  return (
    <>
    <NavbarBootstrap />
    <section className='faq-section'>
      <h1 className='my-5 text-center'>Frequently Asked Questions</h1>
      <div className='container-faq'>
        <div className='row mx-3'>
          <div className='col-md-6'>
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the purpose of this website?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam,
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can a Minor age (below 18 years old) file a complaint?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I file a complaint?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How long should I wait for response to my complaint?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I file a complaint directly in the Barangay Hall?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor 
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </div>
          <div className='col-6'>
            <img src={faq_img} className='img-fluid w-100 d-none d-sm-block' alt='img' style={{height: 400, width: 300}} />
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default FAQs