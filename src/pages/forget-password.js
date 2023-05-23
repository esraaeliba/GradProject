import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./forget-password.module.css";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onForgetFormSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/auth/getCode`, { email })
      .then((response) => {
        const { message } = response.data;
        if (message == "Done") {
          alert("Check your email for a message with your code");
          window.location.replace("http://localhost:3000/change-password");
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

      <form className={styles.frameInLoginPage} onSubmit={onForgetFormSubmit}>
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
        <button className={styles.logInButton} type="submit">
          SEARCH
        </button>
      </form>

      <button className={styles.logo} onClick={onLogoClick} />
      <div className={styles.loginInHead}>
        <div className={styles.login}>
          <div className={styles.email1}>RESET PASSWORD</div>
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

export default ForgetPassword;
