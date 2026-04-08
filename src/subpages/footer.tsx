import React from "react";
import "../static/footer.css";
function Footer(){
    return (
      <div className="Footer">
        <span className="Contact">
          <h3>contact info</h3>
          <p>
            Email:{" "}
            <a href="mailto:buameeemmanuel@gmail.com">
              buameeemmanuel@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+237688029813">+237 688029813</a>
          </p>
          <p>
            Whatsapp:{" "}
            <a
              href="https://wa.me/237688029813"
              target="_blank"
              rel="noopener noreferrer"
            >
              +237 688029813
            </a>
          </p>
          <p>
            github:{" "}
            <a
              href="https://github.com/caleroedwarn-prog"
              target="_blank"
              rel="noopener noreferrer"
            >
              CaleroEdwarn-prog
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/buameeemmanuel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buamee Emmanuel
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://facebook.com/Caleroedwarn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buamee Emmanuel
            </a>
          </p>
        </span>

        <span className="Contact">
          <h3>Supports</h3>
          <p>
            <a
              href="https://orangedigitalcenter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ODC
            </a>
          </p>

          <p>
            <a
              href="https://digolearn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigoLearn
            </a>
          </p>

          <p>
            <a
              href="https://amazonwebservice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS
            </a>
          </p>

          <p>
            <a
              href="https://googedevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Developers
            </a>
          </p>

          <p>
            <a
              href="https://GDGoC.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDGoC
            </a>
          </p>
        </span>
        <span className="Contact">
          <h3>Terms and Conditions</h3>

          <p>
            By using ToDo Prior, you agree to our{" "}
            <a href="https://www.example.com/terms">Terms and Conditions</a>
          </p>
          <p>
            For any questions or concerns, please contact our support team at{" "}
            <a href="mailto:support@todo-prior.com">support@todo-prior.com</a>
          </p>

          <p>
            ToDo Prior is committed to protecting your privacy. Please review our{" "}
            <a href="https://www.example.com/privacy">Privacy Policy</a> for more information.
          </p>
        </span>
      </div>
    );
}
export default Footer;