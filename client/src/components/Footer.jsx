import React from 'react'

export const Footer = () => {
  return (
    <>
     
    <footer className="text-center text-lg-center bg-white text-muted">
        <section className="footer-section">
            <div className="container text-center text-md-start mt-5">
                {/* <!-- grid row --> */}
                <div className="row mt-3">
                {/* <!-- grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* <!-- content --> */}
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3 text-secondary"></i>
                            iSumBongMo! Philippines

                        </h6>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, amet. Nobis voluptatibus omnis aperiam impedit.</p>
                    </div>
                    {/* <!-- grid column --> */}
                    
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="/FAQs" className="text-reset">FAQs</a>
                        </p>
                        <p>
                            <a href="#!" className="text-reset">Support</a>
                        </p>
                    </div>
                    {/* <!-- grid column -->

                    <!-- grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* <!-- links --> */}
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-map-marker me-3 text-secondary"></i>Cavite Philippines</p>
                        <p>
                            <i className="fas fa-envelope me-3 text-seconday"></i>
                            example@gmail.com
                        </p>
                        <p><i className="fas fa-phone me-3 text-seconday"></i>(046) 484-0999</p>
                        <p><i className="fas fa-print me-3 text-seconday"></i>+987654321</p>
                    </div>
                    {/* <!-- grid column --> */}
                </div>
                {/* <!-- grid row --> */}
            </div>
        </section>
        {/* <!-- section: links --> */}

        {/* <!-- copyright --> */}
        <div className="text-center p-4">
            2023 Copyright: 
            <br />
            <a className="text-reset fw-bold" href="https://facebook.com">iSumBongMo! By Johanz Robert Pineda</a>
        </div>
        {/* <!-- <div className="footer">
            <div className="row">
                <div className="footer_inquire">form here</div>
            </div>
            <div className="row">
                <div className="footer_socials">icons here</div>
            </div>
         </div> --> */}
    </footer>

    </>
  )
}
