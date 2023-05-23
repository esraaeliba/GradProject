import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./log-in-page-new.module.css";
const LogInPageNew = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLoginFormSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/auth/login`, { email, password })
      .then((response) => {
        const { message, token } = response.data;
        if (message == "Welcome") {
          console.log(message);
          localStorage.setItem("token", token);
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
  const onForgetClick = useCallback(() => {
    navigate("/forget-password");
  }, [navigate]);
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onDONTHAVEANClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

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

      <form className={styles.frameInLoginPage} onSubmit={onLoginFormSubmit}>
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
          style={{ "--tooltip-color": "red", "--tooltip-font-size": "14px" }}
        />
        <label className={styles.password} htmlFor="password">
          PASSWORD
        </label>
        <input
          className={styles.rectangleInSignPage}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          title="Enter your password"
          style={{ "--tooltip-color": "blue", "--tooltip-font-size": "16px" }}
        />
        <button className={styles.logInButton} type="submit">
          LOGIN
        </button>
      </form>
      <button className={styles.forget} onClick={onForgetClick}>
        {`FORGET YOUR PASSWORD ?`}{" "}
      </button>

      <button
        className={styles.dontHaveAn}
        onClick={onDONTHAVEANClick}
      >{`DONT HAVE AN ACCOUNT ? SIGNUP NOW `}</button>
      <button className={styles.logo} onClick={onLogoClick} />
      <div className={styles.loginInHead}>
        <div className={styles.login}>
          <div className={styles.email1}>LOGIN</div>
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

export default LogInPageNew;
