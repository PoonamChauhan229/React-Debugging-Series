import "./PropertyPortal.css";
import ErrorBoundary from "./ErrorBoundary";
import PropertyCard from "./PropertyCard";

const PropertyPortal = () => {

  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #44 - Error Boundary Catching Render Errors
        </h3>

        <ErrorBoundary>

          <PropertyCard />

        </ErrorBoundary>

      </div>

    </div>
  );
};

export default PropertyPortal;