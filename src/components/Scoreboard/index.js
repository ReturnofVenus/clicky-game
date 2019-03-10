import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col-md-12 col-right">
        <h1>{props.title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 col-right"><h6>High Score: {props.topScore}</h6></div>
        <div className="col-md-2 col-right"><h6>Current Score: {props.score}</h6></div>
      </div>

      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click on a picture, but don't click on it more than once!</h6></div>
      </div>
    </header>
  );
}
export default Scoreboard;