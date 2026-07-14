import { useState } from "react";

const useTemperature = () => {

  const [temperature, setTemperature] = useState(25);
  setTemperature(30);

  return temperature;
};

export default useTemperature;