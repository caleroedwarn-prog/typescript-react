import "../static/homePage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
    <div className="background">
      <div className="background-image">
        <img src=""
      </div>
    </div>
      <div className="main-content">
        <pre>
          <h1 style={{fontSize: "30px", position: "relative", left:"30px", top: "3px"}}>
            Set Your TASKS <br />
            </h1>
            <h1 style={{ position: "relative", left: "50px", fontSize: "60px" }}>
              with TODO PRIOR
            </h1>

          <br />
          <b style={{ position: "relative", left: "100px" }}> start your discipline here <Link to="/tasks" className="nav-link"> - GET STARTED</Link></b>
        </pre>
      </div>

      <section className="contentDiscription">
        <article className="Card">
          <h3>The Spark</h3>
          Every great journey starts <br /> with a single task. write <br />{" "}
          down and watch your world shift.
        </article>

        <article className="Card">
          <h3>The Momentum</h3>
          <p>
            Small wins stack. each checkbox <br /> you tick is a proof that{" "}
            <br /> you showed Today <br />
            Complete your tasks everyday and <br /> become unstoppable
          </p>
        </article>

        <article className="Card">
          <h3>The Focus</h3>
          Clarity is power. When your <br /> mind is a paper, your hands
          <br /> free to build everything
          <br /> Do not wait for motivation <br /> Build discipline by finishing
          <br />
          what you planned
        </article>

        <article className="Card">
          <h3>The Victory</h3>
          Done is better than perfect. <br /> Cross it off. breath. Go again
        </article>
      </section>
    </>
  );
}
export default Homepage;
