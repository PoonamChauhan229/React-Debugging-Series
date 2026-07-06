import { useContext } from "react";
import PlayerContext from "./PlayerContext";

const VolumeControl = () => {

  console.log("VolumeControl Rendered");

  const { volume } = useContext(PlayerContext);

  return (
    <div className="box">
      <h3>🔊 Volume</h3>
      <p>{volume}%</p>
    </div>
  );
};

export default VolumeControl;