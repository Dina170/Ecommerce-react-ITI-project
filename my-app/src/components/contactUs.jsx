import map from "../images/map.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_0kyj6bk",
        "template_am7u99p",
        form.current,
        "IH3VizxuFCrzZiLkw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container col-12 mb-5">
      <h1 className="text-center special-heading">Contact</h1>
      <p className="mb-5">Get in touch with us</p>
      <div className="row">
        <div className="container col-6 mt-3">
          <div>
            <div className="text-start mb-5">
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="me-4" />
                Mansoura
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} className="me-4" />
                +20 20055666
              </div>
              <div>
                <FontAwesomeIcon icon={faMobile} className="me-4" />
                +20 0122244444
              </div>
            </div>
            <div className="text-start ">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="me-4 myIcon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="me-4 myIcon" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="me-4 myIcon" />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} className="me-4 myIcon" />
              </a>
            </div>
          </div>
          <img
            src={map}
            className="img-thumbnail row mt-5"
            height={300}
            width={350}
          ></img>
        </div>

        <div className="container col-6">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <h4 className="text-start">Leave us a message</h4>
            <div>
              <input
                type="text"
                className="form-control my-5"
                placeholder="Full Name"
                name="userName"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control my-5"
                name="userEmail"
                placeholder="Your email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div>
              <textarea
                className="form-control my-5"
                name="userMessage"
                rows={5}
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
