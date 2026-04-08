import { Link } from "react-router-dom";    
import writingImg from "../images/writing.jpg";
function Features() {
    return (
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
    )
}
export default Features;