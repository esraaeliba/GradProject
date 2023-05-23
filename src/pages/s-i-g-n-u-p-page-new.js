import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./s-i-g-n-u-p-page-new.module.css";
const SIGNUPPageNew = () => {
  const navigate = useNavigate();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConfirmPassword] = useState("");
  // const [phone, setPhoneNumber] = useState("");
  // const [idImage, setIdImage] = useState(null);
  const [error, setError] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("cPassword", cPassword);
    // formData.append("phone", phone);
    // formData.append("idImage", idImage);

    axios
      .post("http://localhost:3001/auth/signup", {
        userName,
        email,
        password,
        cPassword,
      })
      .then((response) => {
        let { message, result } = response.data;
        if (message == "Created") {
          alert("Check your email for verification");
          window.location.replace("http://localhost:3000/log-in-page");
        } else {
          console.error(message);
          const errorMessage = error.response.data.error.message;
          alert(errorMessage);
          // navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error: " + error.response.data.message);
        // Handle any errors that occur during the request
      });
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onALREADYHAVEANClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogInButtonClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onLOGINBUTTONClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  return (
    <div className={styles.signupPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector23.svg" />
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

      <form className={styles.frameInSignPage} onSubmit={onFormSubmit}>
        {error && <div className={styles.error}>{error}</div>}
        <label className={styles.email} htmlFor="userName">
          NAME
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="userName"
          name="userName"
          value={userName}
          onChange={onNameChange}
          title="Enter your real name"
        />
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
          title="Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long"
        />
        <label className={styles.password} htmlFor="cPassword">
          CONFIRM PASSWORD
        </label>
        <input
          className={styles.rectangleInSignPage}
          type="password"
          id="cPassword"
          name="cPassword"
          value={cPassword}
          onChange={onConfirmPasswordChange}
          title="Should be identical to the password"
        />
        {/* <div className={styles.name}>PHONE NUMBER</div>
        <input
          className={styles.rectangleInSignPage}
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={onPhoneNumberChange}
        /> */}
        {/* <div className={styles.name}>ID IMAGE</div>
        <input
          className={styles.frameInSignPageChild}
          type="file"
          required
          onChange={onIdImageChange}
        /> */}
        <button className={styles.creataccount} type="submit">
          CREATE ACCOUNT
        </button>
      </form>

      <button
        className={styles.alreadyHaveAn}
        onClick={onALREADYHAVEANClick}
      >{`ALREADY HAVE AN ACCOUNT ? LOGIN `}</button>
      <button className={styles.logo} onClick={onLogoClick} />
      <button className={styles.logInButton} onClick={onLogInButtonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.login}>LOGIN</div>
        </button>
      </button>
      <div className={styles.signUpHead}>
        <div className={styles.signupButton}>
          <div className={styles.name}>SIGNUP</div>
        </div>
      </div>
    </div>
  );
};

export default SIGNUPPageNew;
