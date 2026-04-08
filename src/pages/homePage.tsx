import "../static/homePage.css";
import React from "react";
import "../images/note.png";
import { Link } from "react-router-dom";
import noteImg from "../images/note.png";
import writingImg from "../images/writing.jpg";

function Homepage() {
  return (
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

      <h3
        style={{
          position: "relative",
          left: "20px",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontSize: "25px",
        }}
      >
        {" "}
        Mental Discipline
      </h3>
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

      <div className="AdditionalImage">
        <h2>Additional Features</h2>
        <div className="Section">
          <img  src={writingImg} alt="messag" />
          <h2> Settings</h2>
          <p>
            ToDo Prior allows you with a customizable environment,
            you can style your notes, add ring tones (Default), You can as well{" "}
            change page color, and you can as 
            well set alarms for your tasks
            <br /> check it out{" "}
            <span
              style={{
                background: "green",
                borderRadius: "20px",
                width: "30%",
                fontSize: "0px",
              }}
            >
              <Link to="/settings" className="nav-link">
                Settings
              </Link>
            </span>
          </p>
          <div className="Section">
            <h2>Backup</h2>
            <p>
              Backup your tasks to the <br /> cloud, so you never lose them.{" "}
              <br /> Sync across devices & <br /> stay productive
              <br />
              Check it out
              <span
                style={{
                  background: "green",
                  borderRadius: "20px",
                  width: "30%",
                  fontSize: "10px",
                }}
              >
                <Link to="/backups" className="nav-link">
                  Backup
                </Link>
              </span>
            </p>
          </div>
          <div className="Section">
            <h2>Recycling Bin</h2>
            <p>
              Deleted a task by mistake? <br /> Find it in the Recycline Bin!{" "}
              <br /> Restore with just one tap. check it out{" "}
              <span
                style={{
                  background: "green",
                  borderRadius: "20px",
                  width: "30%",
                  fontSize: "0px",
                }}
              >
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="Footer">
        <p>helllo</p>
      </div>
    </>
  );
}
export default Homepage;
