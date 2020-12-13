export function validateEmail(email) {
  let isValid = true;
  if (email && email !== "" && email !== null) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = regex.test(email);
  }
  return isValid;
}

export function validatePassword(password) {
  let isValid = true;
  if (password && password !== "" && password !== null) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = regex.test(password);
  }
  return isValid;
}

export function validateForm(field, value) {
  switch (field) {
    case "email":
      return validateEmail(value) ? true : "Email ID entered is invalid.";

    case "password":
      return validatePassword(value) ? true : "Email ID entered is invalid.";
  }
}
