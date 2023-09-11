import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info mb-3">
                <img
                  src="./images/hnd2.png"
                  width="200px"
                  alt=""
                  className="mb-4"
                />
                <p className="mb-5">
                  dcdcdPellentesque in ipsum id orci porta dapibus. Vivamus
                  magna justo, lacinia eget consectetur sed, convallis at
                  tellus.
                </p>
                <div className="copyright pt-4">
                  Created By <span>HND</span>
                  <div>
                    &copy; 2023 - <span>HND Inc</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Portfolio</li>
                  <li>Testimonials</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">About Us</h5>
                <ul className="list-unstyled">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">
                  Get in touch with us via mail phone.We are waiting for your
                  call or message
                </p>
                <button className="btn rounded-pill footer-btn w-100" href="/#">
                  hndTeam@gmail.com
                </button>
                <ul className="d-flex mt-5 list-unstyled gap-3">
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faFacebook} className="p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faTwitter} className="p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faLinkedin} className="p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faYoutube} className="p-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
