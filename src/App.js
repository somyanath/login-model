import './App.scss';
import Form from './components/Form';
import StepIndicator from './components/StepIndicator';

const App = () => {

  return (
    <div className="container d-flex">
      <div className="form-side d-flex">
        <StepIndicator />
        <section className="form-container">
          <h2 className="form-side-heading">Let's set up your account</h2>
          <p className="heading-caption">Already have an account? <a href="/" className="link">Sign in</a></p>
          <Form />
          <p className="form-terms">By clicking the "Next" button, you agree to creating a free account, and to <a href="/" className="link">Terms of Service</a> and <a href="/" className="link">Privacy Policy.</a></p>
        </section>
      </div>
      <aside className="heading-side">
        <h2 className="heading">Dummy Heading</h2>
        <p className="heading-para">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In nunc libero, sodales et sodales in, aliquet ut leo aser.</p>
      </aside>
    </div>
  );
}

export default App;
