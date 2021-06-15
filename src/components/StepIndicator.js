const StepIndicator = () => {
  return (
    <div className="step-indicator d-flex">
      Step 1 of 3
      <div className="d-flex step-list">
        <span className="list-item active"></span>
        <span className="list-item"></span>
        <span className="list-item"></span>
      </div>
    </div>
  )
}

export default StepIndicator;