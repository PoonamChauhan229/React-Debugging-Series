import { useContext } from "react";
import PlayerContext from "./PlayerContext";

const NowPlaying = () => {

  console.log("NowPlaying Rendered");

  const { song } = useContext(PlayerContext);

  return (
    <div className="box">
      <h3>🎵 Now Playing</h3>
      <p>{song}</p>
    </div>
  );
};

export default NowPlaying;