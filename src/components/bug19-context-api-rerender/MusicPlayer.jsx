import { useState } from "react";
import PlayerContext from "./PlayerContext";
import NowPlaying from "./NowPlaying";
import VolumeControl from "./VolumeControl";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [song] = useState("Perfect");
  const [volume] = useState(70);
  const [theme, setTheme] = useState("Light");

  const playerData = {
    song,
    volume,
    theme,
  };

  return (
    <PlayerContext.Provider value={playerData}>
      <div className="container"
      >
        <div className={`card ${theme === "Dark" ? "dark" : "light"}`}>

          <h2>React Debugging Series</h2>

          <h3>Bug #19 - Context API Re-render Issues</h3>

          <h2>Theme : {theme}</h2>

          <button
    
            className="theme-btn"
            onClick={() =>
              setTheme(theme === "Light" ? "Dark" : "Light")
            }
          >
            Toggle Theme
          </button>

          <NowPlaying />

          <VolumeControl />

        </div>
      </div>
    </PlayerContext.Provider>
  );
};

export default MusicPlayer;