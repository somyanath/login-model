const StepIndicator = () => {
  return (
    <div className="step-indicator d-flex">
      Step 1 of 3
      <div className="d-flex step-list">
        <span className="list-item active" />
        <span className="list-item" />
        <span className="list-item" />
      </div>
    </div>
  );
};

export default StepIndicator;
