import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./add-product.module.css";
const AddProduct = () => {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    axios
      .post("/api/submit-form", formData)
      .then((response) => {
        console.log(response.data);
        // handle the response from the server
      })
      .catch((error) => {
        console.error(error);
        // handle any errors that occur during the request
      });
  }

  const onSignUpButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onSIGNUPBUTTONClick = useCallback(() => {
    navigate("/signup-page");
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
    <div className={styles.addProduct}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.vectorIcon1} alt="" src="/vector13.svg" />
      </div>
      <div className={styles.upGp}>
        <div className={styles.blackUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.blackUpRec1} />
          </div>
          <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
            <button
              className={styles.signupButton}
              onClick={onSIGNUPBUTTONClick}
            >
              <div className={styles.signup}>SIGNUP</div>
            </button>
          </button>
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

      <form className={styles.frameInSignPage} onSubmit={handleSubmit}>
        <div className={styles.productName}>PRODUCT NAME</div>
        <input
          className={styles.rectangleInSignPage}
          type="text"
          name="productName"
          required
        />

        <div className={styles.productName}>PRODUCT SPECS</div>
        <input
          className={styles.rectangleInSignPage}
          type="text"
          name="productSpecs"
          required
        />

        <div className={styles.productName}>WANTED PRICE</div>
        <input
          className={styles.rectangleInSignPage}
          type="number"
          name="wantedPrice"
          required
        />

        <div className={styles.productName}>PRICE YOU GET</div>
        <input
          className={styles.rectangleInSignPage}
          type="number"
          name="priceYouGet"
          required
        />

        <div className={styles.productName}>PHONE NUMBER</div>
        <input
          className={styles.rectangleInSignPage}
          type="text"
          name="phoneNumber"
          required
        />

        <div className={styles.productName}>{`PRODUCT IMAGE`}</div>
        <input
          className={styles.frameInSignPageChild}
          type="file"
          name="productImage"
          required
        />

        <button className={styles.creataccount} type="submit">
          CONFIRM ADDING PRODUCT
        </button>
      </form>

      <button
        className={styles.haveAnyFeedback}
      >{`HAVE ANY FEEDBACK ? FEEL FREE TO CONTACT US `}</button>
      <button className={styles.logo} onClick={onLogoClick} />
      <button className={styles.logInButton} onClick={onLogInButtonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.signup}>LOGIN</div>
        </button>
      </button>
      <div className={styles.signUpHead}>
        <div className={styles.signupButton1}>
          <div className={styles.productName}>ADD PRODUCT</div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
