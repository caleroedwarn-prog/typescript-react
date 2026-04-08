import noteImg from "../images/note.png";
import { Link } from "react-router-dom";

function ImageWelcome(){
    return(
        <>
        <div className="background">
        <div className="background-image">
          <img src={noteImg} alt="message" />
        </div>
      </div>
      <div className="main-content">
        <pre>
          <h1
            style={{
              fontSize: "30px",
              position: "relative",
              left: "30px",
              top: "90px",
            }}
          >
            Set Your TASKS <br />
          </h1>
          <h1
            style={{
              position: "relative",
              left: "50px",
              fontSize: "70px",
            }}
          >
            with TODO PRIOR
          </h1>

          <br />
          <b
            style={{
              position: "relative",
              left: "100px",
            }}
          >
            {" "}
            start your discipline here{" "}
            <Link to="/tasks" className="nav-link">
              {" "}
              <span
                style={{
                  background: "green",
                  borderRadius: "20px",
                  width: "fit",
                  fontSize: "20px",
                }}
              >
                - GET STARTED
              </span>
            </Link>
          </b>
        </pre>
      </div>
      </>
    )
}
export default ImageWelcome;