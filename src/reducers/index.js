import { combineReducers } from "redux";

//SONG LIST REDUCER
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Smells Like Teen Spirit", duration: "5:10" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want It That Way", duration: "1:45" },
  ];
};

//SELECT SONG REDUCER

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
