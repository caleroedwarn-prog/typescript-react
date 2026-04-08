import { Link } from "react-router-dom";
import "../static/features.css";
import writingImg from "../images/writing.jpg";

function Features() {
  return (
    <div className="AdditionalImage">
      <h2>Additional Features</h2>

      <div className="image-wrapper">
        <img src={writingImg} alt="message" />

        <div className="feature-grid">
          <div className="feature-card">
            <h2>Settings</h2>
            <p>
              ToDo Prior allows you with a customizable environment, you can
              style your notes, add ring tones (Default), change page color, and
              set alarms for your tasks.
            </p>
            <Link to="/settings" className="feature-link">
              Settings
            </Link>
          </div>

          <div className="feature-card">
            <h2>Backup</h2>
            <p>
              Backup your tasks to the cloud so you never lose them. Sync across
              devices and stay productive.
            </p>
            <Link to="/backups" className="feature-link">
              Backup
            </Link>
          </div>

          <div className="feature-card">
            <h2>Recycling Bin</h2>
            <p>
              Deleted a task by mistake? Find it in the recycle bin and restore
              with just one tap.
            </p>
            <Link to="/settings" className="feature-link">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
