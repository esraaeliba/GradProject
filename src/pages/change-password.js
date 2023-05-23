import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./change-password.module.css";
const ChangePassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const onChangeFormSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/auth/forgetPassword`, {
        email,
        code,
        password,
      })
      .then((response) => {
        const { message } = response.data;
        if (message == "Done") {
          alert("Changed successfully");
          window.location.replace("http://localhost:3000/");
        } else {
          console.log(message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error: " + error.response.data.message);
        // setError("Invalid email or password."); // Set the error message
        // Handle any errors that occur during the request
      });
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onSIGNUPBUTTONClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className={styles.logInPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector22.svg" />
      </div>
      <div className={styles.upGp}>
        <div className={styles.blackUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.blackUpRec1} />
          </div>
        </div>
        <div className={styles.grayUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.grayUpRec} />
          </div>
        </div>
        <div className={styles.firstUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.firstWebsiteFor}>
              FIRST WEBSITE FOR RENTING TECHS IN EGYPT
            </div>
          </div>
        </div>
      </div>

      <form className={styles.frameInLoginPage} onSubmit={onChangeFormSubmit}>
        {error && <div className={styles.error}>{error}</div>}
        <label className={styles.email} htmlFor="email">
          EMAIL
        </label>
        <input
          className={styles.rectangleInSignPage}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          title="Enter your email address"
        />
        <label className={styles.email} htmlFor="code">
          CODE
        </label>
        <input
          className={styles.rectangleInSignPage1}
          id="code"
          name="code"
          value={code}
          onChange={onCodeChange}
          title="Enter the code that was sent to your email"
        />
        <label className={styles.email} htmlFor="password">
          PASSWORD
        </label>
        <input
          className={styles.rectangleInSignPage2}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          title="Enter your new password"
        />
        <button className={styles.logInButton} type="submit">
          CHANGE
        </button>
      </form>

      <button className={styles.logo} onClick={onLogoClick} />
      <div className={styles.loginInHead}>
        <div className={styles.login}>
          <div className={styles.email1}>CREATE NEW PASSWORD</div>
        </div>
      </div>

      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <button className={styles.signupButton} onClick={onSIGNUPBUTTONClick}>
          <div className={styles.signup}>SIGNUP</div>
        </button>
      </button>
    </div>
  );
};

export default ChangePassword;
