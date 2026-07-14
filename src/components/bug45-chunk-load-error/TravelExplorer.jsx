import { lazy, Suspense } from "react";
import "./TravelExplorer.css";

const DestinationCard = lazy(() =>
  Promise.reject(
    new Error("ChunkLoadError: Loading chunk DestinationCard failed.")
  )
);

const TravelExplorer = () => {
  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #45 - Chunk Load Error</h3>

        <Suspense fallback={<h2>Loading Destination...</h2>}>
          <DestinationCard />
        </Suspense>

      </div>
    </div>
  );
};

export default TravelExplorer;