import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsValid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    //resetting form
    setEnteredValues({
      email: "",
      password: "",
    });
  }
  function handleInputChange(event) {
    const { name, value } = event.target;
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email-login"
            type="email"
            name="email"
            onChange={(event) => handleInputChange(event)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password-login"
            type="password"
            name="password"
            onChange={(event) => handleInputChange(event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
