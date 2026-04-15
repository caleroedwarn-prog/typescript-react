import "../static/homePage.css";
import ImageWelcome from "../subpages/home";
import GridDisplay from "../subpages/gridDisplay";
import Features from "../subpages/features";
import Footer from "../subpages/footer";

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
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
export default Homepage;
