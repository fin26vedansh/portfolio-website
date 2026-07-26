import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:fin26vedansh@iimk.ac.in" data-cursor="disable">
                fin26vedansh@iimk.ac.in
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916387467060" data-cursor="disable">
                +91 63874 67060
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/vedanshjaiswal/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <h4 className="contact-resume-label">Resume</h4>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Download PDF <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Open to <br /> <span>equity research, financial analysis</span> and{" "}
              <span>business strategy</span> roles
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
