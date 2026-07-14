import "./PaymentGateway.css";
import PaymentForm from "./PaymentForm";

const PaymentGateway = () => {

  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #43 - Error Boundary Not Catching Errors
        </h3>

        <PaymentForm />

      </div>

    </div>
  );
};

export default PaymentGateway;