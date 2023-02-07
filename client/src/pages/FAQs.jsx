import React from 'react'
import {NavbarBootstrap} from "../components/Navbarbs";

const FAQs = () => {
  return (
    <>
    <NavbarBootstrap />
    <section className='faq-section'>
      <div className='container-faq'>
        <div className='row'>
          <div className='col-xl-12 text-center my-5'>
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FAQs