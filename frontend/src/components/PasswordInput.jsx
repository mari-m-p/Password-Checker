import { useState } from "react";

const PasswordInput = ({ password, onPasswordChange }) => {
  const [toggleInputType, setToggleInputType] = useState("password");

  const onToggleType = () => {
    let changedType = "";
    if (toggleInputType === "password") {
      changedType = "text";
    } else {
      changedType = "password";
    }

    setToggleInputType(changedType);
  };

  return (
    <>
      <label htmlFor="password">Password</label>
      <div className="password-container">
        <input
          id="password"
          type={toggleInputType}
          className="form-control"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
        <i
          className={`fa ${
            toggleInputType === "password" ? "fa-eye-slash" : "fa-eye"
          } eye-icon`}
          onClick={onToggleType}
          data-testid="eye-icon"
        ></i>
      </div>
    </>
  );
};

export default PasswordInput;
