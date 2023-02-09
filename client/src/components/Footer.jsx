import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                            <AssuredWorkloadIcon />
                            <span style={{paddingLeft: 10}}>iSumBongMo</span>! 

                        </h6>
                        <p> 
                        An online web application that allows residents to file complaints and the barangay to respond and manage the complaints and their status.                        </p>
                    </div>
                    {/* <!-- grid column --> */}
                    
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="/FAQs" className="text-reset"> 
                            <HelpCenterIcon /> 
                            <span style={{paddingLeft: 10}}>FAQs</span>
                            </a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com/officialbarangaymolino3" className="text-reset"> 
                            <FacebookIcon /> 
                            <span style={{paddingLeft: 10}}>Facebook Page</span>
                            </a>
                        </p>
                    </div>
                    {/* <!-- grid column -->

                    <!-- grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* <!-- links --> */}
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <LocationCityIcon /> 
                            <span style={{paddingLeft: 10}}>Bacoor, Cavite, Philippines</span>
                        </p>
                        <p>
                            <EmailIcon />
                            <span style={{paddingLeft: 10}}>Barangay_Molino_3@gmail.com</span>
                        </p>
                        <p> 
                            <PhoneIcon /> 
                            <span style={{paddingLeft: 10}}>(046) 438-5705</span>
                            </p>
                        <p> 
                            <SmartphoneIcon /> 
                            <span style={{paddingLeft: 10}}>09774658252</span>
                            </p>
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
            <a className="text-reset fw-bold" href="https://github.com/pinedajohanz">iSumBongMo! By Johanz Robert Pineda</a>
        </div>
    </footer>

    </>
  )
}
