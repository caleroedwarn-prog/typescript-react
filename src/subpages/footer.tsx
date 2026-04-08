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
            <a href="https://facebook.com/Caleroedwarn" target="_blank" rel="noopener noreferrer">
              Buamee Emmanuel
            </a>
          </p>
        </span>
        <span className="Contact"><h3>Supports</h3></span>
        <span className="Contact"><h3>Terms and Conditions</h3></span>
      </div>
    );
}
export default Footer;