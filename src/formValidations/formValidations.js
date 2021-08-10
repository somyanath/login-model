export const nameValidation = (name) => {
  if (name.trim() === "") {
    return `Name is required`;
  }
  if (/[^a-zA-Z -]/.test(name)) {
    return "Invalid characters";
  }
  if (name.trim().length < 0) {
    return `Name is required`;
  }
  return null;
};

export const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

export const passValidation = (pass) => {
  if (pass.trim() === "") {
    return `Password is required`;
  }
  if (pass.trim().length < 0) {
    return `Password is required`;
    // eslint-disable-next-line no-else-return
  } else if (pass.trim().length < 8) {
    return `Minimum 8 characters`;
  }
  return null;
};

export const userValidation = (userType) => {
  if (userType.trim() === "") {
    return `User type is required`;
  }
  if (userType.trim().length < 0) {
    return `User type is required`;
  }
  return null;
};
