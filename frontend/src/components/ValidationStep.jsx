const ValidationStep = ({ isValid, message }) => {
  return (
    <p>
      <i
        style={{
          color: isValid ? "green" : "red",
          fontSize: "20px",
        }}
        className="fa fa-check-circle"
        aria-hidden="true"
        data-testid="check-icon"
      ></i>{" "}
      {message}
    </p>
  );
};

export default ValidationStep;
