const PaymentForm = () => {

  const handlePayment = () => {
    throw new Error("Payment Failed");
  };

  return (
    <>

      <h2>Amount : ₹5,000</h2>

      <p>
        Click below to complete your payment.
      </p>

      <button
        onClick={handlePayment}
      >
        Pay Now
      </button>

    </>
  );
};

export default PaymentForm;