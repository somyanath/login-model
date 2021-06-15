import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrow } from '../assets/svg/arrow.svg';
import { ReactComponent as Eye } from '../assets/svg/eye.svg';
import { nameValidation, emailValidation, passValidation, userValidation } from '../formValidations/formValidations';

const Form = () => {

  const [isFormValid, setFormValid] = useState(false);
  
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isUserType, setUserType] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if(isNameValid === null && isEmailValid === null && isUserType === null && isPasswordValid === null) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [isNameValid, isEmailValid, isUserType, isPasswordValid, isFormValid]);

  const modifyState = (setStateFunction, validationMethod, value) => {
    setStateFunction(validationMethod(value));
  };

  const handleChange = (e) => {
    let { name, value: changedValued } = e.target;
    switch(name) {
      case 'name':
        modifyState(setNameValid, nameValidation, changedValued);
        break;
      
      case 'email':
        modifyState(setEmailValid, emailValidation, changedValued);
        break;

      case 'user-type':
        modifyState(setUserType, userValidation, changedValued);
        break;

      case 'password':
        modifyState(setPasswordValid, passValidation, changedValued);
        break;

      default:
        return;
    };
  };

  return (
    <form className="login-form" onChange={handleChange} noValidate>
      <div className="input-container">
        <input name="name" className={`form-input ${isNameValid ? 'not-valid' : ''}`} placeholder=" " type="text" required />
        <label htmlFor="name" className="floating-label">Your name</label>
        {
          isNameValid && Object.values(isNameValid).length > 0 &&
          <p className="error-msg wrong">{isNameValid}</p>
        }
      </div>

      <div className="input-container">
        <input name="email" className={`form-input ${isEmailValid ? 'not-valid' : ''}`} placeholder=" " type="email" required />
        <label htmlFor="email" className="floating-label">Email address</label>
        {
          isEmailValid && Object.values(isEmailValid).length > 0 &&
          <p className="error-msg wrong">{isEmailValid}</p>
        }
      </div>

      <div className="input-container select-div">
        <select name="user-type" className={`form-input select-wrapper ${isUserType ? 'not-valid' : ''}`} type="text" onBlur={handleChange} required>
          <option value="" className="select-default" disabled selected hidden></option>
          <option value="developer">Developer</option>
          <option value="company">Company</option>
          <option value="agency">Agency</option>
        </select>
        <span className="icon"><Arrow /></span>
        <label htmlFor="user-type" className="floating-label">I would describe my user type as</label>
        {
          isUserType && Object.values(isUserType).length > 0 &&
          <p className="error-msg wrong">{isUserType}</p>
        }
      </div>

      <div className="input-container">
        <input name="password" className={`form-input password-field ${isPasswordValid ? 'not-valid' : ''}`} placeholder=" " type={showPassword ? "text" : "password"} required />
        <span className="icon" onClick={() => {setShowPassword(!showPassword)}}><Eye /></span>
        <label htmlFor="password" className="floating-label">Password</label>
        {
          isPasswordValid && Object.values(isPasswordValid).length > 0 ? (
            <p className="error-msg wrong">{isPasswordValid}</p>
          ) : (
            <p className="error-msg">Minimum 8 characters</p>
          )
        }
      </div>

      <div className="btn-container">
        <button className="form-input" type="submit" disabled={isFormValid ? false : true}>Next</button>
      </div>
    </form>
  )
}

export default Form;