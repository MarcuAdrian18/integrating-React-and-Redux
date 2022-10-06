import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <h2>Select a Song!</h2>;
  }
  return (
    <div>
      <h4>Title: {song.title}</h4>
      <h4>Duration: {song.duration}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
