import "../static/homePage.css";
import "../images/note.png";
import ImageWelcome from "../subpages/home";
import GridDisplay from "../subpages/gridDisplay";
import Features from "../subpages/features";

function Homepage() {
  return (
    <>
      <ImageWelcome />
      <br />
      <br />
      <br />
      <GridDisplay />
      <br />
      <br />
      <br />
      <Features />
      <div className="Footer">
        <p>helllo</p>
      </div>
    </>
  );
}
export default Homepage;
