import "../static/homePage.css";
import React from "react";
import "../images/note.png";
import { Link } from "react-router-dom";
import ImageWelcome from "../subpages/home";
import GridDisplay from "../subpages/gridDisplay";
import writingImg from "../images/writing.jpg";

function Homepage() {
  return (
    <>
    <ImageWelcome /><br /><br /><br />
    <GridDisplay />
      <div className="Footer">
        <p>helllo</p>
      </div>
    </>
  );
}
export default Homepage;
