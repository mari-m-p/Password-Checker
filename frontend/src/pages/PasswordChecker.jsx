import { useState } from "react";
import { toast } from "react-toastify";
import { PasswordInput, ValidationStep } from "../components";
import { savePassword } from "../http";

const validationSteps = [
  {
    message: "At least 6 characters & at most 20 characters",
    isValidVariable: "isLengthInRange",
  },
  {
    message: "At least 1 uppercase letter",
    isValidVariable: "hasUppercase",
  },
  {
    message: "At least 1 lowercase letter",
    isValidVariable: "hasLowercase",
  },
  {
    message: "At least 1 digit",
    isValidVariable: "hasDigit",
  },
  {
    message: "Not more than 2 continuously repeating characters",
    isValidVariable: "isRepeating",
  },
];

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    remainingSteps: 5,
    hasLowercase: false,
    hasUppercase: false,
    hasDigit: false,
    isLengthInRange: false,
    isRepeating: false,
  });

  const onPasswordChange = (event) => {
    let enteredPassword = event.target.value;
    setPassword(enteredPassword);

    // Regex for validation
    const regexNum = /\d/;
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const regexCharLength = /^.{6,20}$/;

    // Check for repeating characters
    let repeatingCount = 0;
    for (let i = 0; i < enteredPassword.length; i++) {
      const char = enteredPassword[i];

      if (repeatingCount > 2) {
        break;
      }

      if (i > 0 && char === enteredPassword[i - 1]) {
        repeatingCount++;
      } else {
        repeatingCount = 1;
      }
    }

    // Checking if the entered password is strong
    const hasLowercase = regexLowercase.test(enteredPassword);
    const hasUppercase = regexUppercase.test(enteredPassword);
    const hasDigit = regexNum.test(enteredPassword);
    const isLengthInRange = regexCharLength.test(enteredPassword);
    const isRepeating = !(repeatingCount > 2);
    const remainingSteps =
      (hasLowercase ? 0 : 1) +
      (hasUppercase ? 0 : 1) +
      (hasDigit ? 0 : 1) +
      (isLengthInRange ? 0 : 1) +
      (isRepeating ? 0 : 1);

    setValidations((prevState) => ({
      ...prevState,
      hasLowercase,
      hasUppercase,
      hasDigit,
      isLengthInRange,
      isRepeating,
      remainingSteps,
    }));
  };

  const resetPassword = () => {
    setPassword("");
    setValidations({
      remainingSteps: 5,
      hasLowercase: false,
      hasUppercase: false,
      hasDigit: false,
      isLengthInRange: false,
      isRepeating: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reqBody = {
      password,
    };
    const request = await savePassword(reqBody);

    if (request.success) {
      resetPassword();
      toast("Password saved successfully.");
    } else {
      toast("Failed to save.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8">
          <div className="main-container">
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontWeight: "bold" }}>Enter Password</h3>

              {/* Password Input */}
              <div className="form-group">
                <PasswordInput
                  password={password}
                  onPasswordChange={onPasswordChange}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={validations.remainingSteps > 0}
                >
                  Save Password
                </button>
              </div>

              {/* Validation steps */}
              <p>
                Steps required to make a strong password:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {validations.remainingSteps}
                </span>
              </p>
              {validationSteps.map((step, index) => (
                <ValidationStep
                  key={index}
                  message={step.message}
                  isValid={validations[step.isValidVariable]}
                />
              ))}
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-2"></div>
      </div>
    </div>
  );
};

export default PasswordChecker;
