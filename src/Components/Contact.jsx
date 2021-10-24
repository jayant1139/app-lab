import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="wrap-contact">
    
      <div className="row-container">
        <div className="contact-container">
          <div className="contact-heading">
            <h1>Contact Information</h1>
          </div>
          <div className="contact-items">
            <p>Sachin Kumar Srivastava Assistant Professor,</p>
          </div>
          <div className="contact-items">
            <h3>OFFICE LOCATION</h3>
          </div>
          <div className="contact-items">
            <p>
              Room No. 303 (II Floor), Department of Physics Indian Institute of
              Technology Roorkee, Roorkee- 247667, India Phone: +91-1332-28-5715
            </p>
          </div>
          <div className="contact-items">
            <h3>APP-LAB LOCATION</h3>
          </div>
          <div className="contact-items">
            <p>
              Applied Plasmonics and Photonics Lab Wellness Centre (Old Hobbies
              Club Building) Phone: +91-1332-28-6694
            </p>
          </div>

        </div>

     {/* mail image   */}
        
          <div className="mail-img">
            <div className="img-items"><img src="./images/mail.png" alt="" /></div>
            <div className="mail-me">
              <a href="mailto:jayantsingh331@gmail.com"
                >Click here to Write a Mail</a
              >
            </div>
          </div>
        
      </div>

 {/* footer starts here  */}
      <footer className="footer-part  " id="footer-part-contact">
        <div className="flex-container-footer">
          <div className="flex-footer-items">
            <p>Research Funding</p>
          </div>
          <div className="flex-footer-items">
            <div className="funders-container">
              <img src="./images/iitrlogopng.png" alt="" />
              <img src="./images/inspire.png" alt="" />
              <img src="./images/nserb.png" alt="" />
              <img src="./images/stars.png" alt="" />
              <img src="./images/Dst.png" alt="" />
            </div>
          </div>
          <div className="flex-footer-items">
            <h6>We thank you for supporting our research !!</h6>
          </div>
        </div>
      </footer>
    </div>
        </>
    )
}
