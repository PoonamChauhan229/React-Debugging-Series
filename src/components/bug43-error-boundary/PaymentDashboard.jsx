import "./PaymentDashboard.css";
import ErrorBoundary from "./ErrorBoundary";
import PaymentForm from "./PaymentForm";

const PaymentDashboard = () => {
  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #43 - Error Boundary Not Catching Errors
        </h3>

        <ErrorBoundary>
          <PaymentForm />
        </ErrorBoundary>

      </div>

    </div>
  );
};

export default PaymentDashboard;