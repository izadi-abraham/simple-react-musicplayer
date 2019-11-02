import React from "react";
import "./player.scss";


function Player(props) {
  return (
    <div className="player d-flex flex-column justify-content-center align-items-center ">

      <div className="row">
        <audio className="audio-player" ref={props.refElement} controls autoPlay src={props.list[props.current]}>
          <p>Your browser does not support the audio element.</p>
        </audio>
      </div>

      <div className="row">
        <p className="current-music border rounded"> {props.list[props.current].replace("../files/", "")} </p>
      </div>

      <div className="buttons row d-flex justify-content-between">
        <button className="previous btn btn-sm btn-light" type="button" onClick={props.previousMusic} data-toggle="tooltip" data-placement="bottom" title="previous music">
          PRV
        </button>
        <button className="playPause btn btn-sm btn-light" type="button" onClick={props.playPause} data-toggle="tooltip" data-placement="bottom" title="play/pause music">
          PlayPause
        </button>
        <button className="next btn btn-sm btn-light" type="button" onClick={props.nextMusic} data-toggle="tooltip" data-placement="bottom" title="next music">
          <i className="fa fa-chevron-circle-right"></i>Next
        </button>
        <button className="show-play-list btn btn-sm btn-light" type="button" onClick={props.togglePlaylist} data-toggle="tooltip" data-placement="bottom" title="show/hide playlist">
          Playlist
        </button>
      </div>

    </div>
  );
}

export default Player;
