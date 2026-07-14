import "./WeatherDashboard.css";
import useTemperature from "./useTemperature";

const WeatherDashboard = () => {

  const temperature = useTemperature();

  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #41 - Infinite Custom Hook Loop
        </h3>

        <h1>{temperature}°C</h1>

      </div>

    </div>
  );
};

export default WeatherDashboard;