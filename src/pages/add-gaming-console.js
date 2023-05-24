import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./add-product.module.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("64679216154074f9f2f11eaf");
  const [image, setImage] = useState("");
  const [brandId, setBrandId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryId", categoryId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("phone", phone);
    formData.append("brandId", brandId);
    formData.append("image", image[0]);

    console.log(formData.get("image"));

    // Retrieve token from local storage
    const token = localStorage.getItem("token");

    // Set token in the request headers
    axios.defaults.headers.common["authorization"] = `Bearer__${token}`;
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      await axios
        .post("http://localhost:3001/product/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const { message, result } = response.data;
          if (message == "Created") {
            confirm("Added successfully!");
            console.log(message);
            window.location.replace("http://localhost:3000/gaming-page-new");
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          console.error("Error adding product:", error.response.data);
          setError("Failed to add product."); // Set the error message
          // Handle any errors that occur during the request
        });
    }
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };
  const onBrandIdChange = (e) => {
    setBrandId(e.target.value);
  };
  const onImagesChange = (e) => {
    setImage(e.target.files); // set images state to the selected file(s)
  };

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
      <form
        className={styles.frameInSignPage}
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        {error && <div className={styles.error}>{error}</div>}
        <input
          type="hidden"
          name="categoryId"
          value={categoryId}
          onChange={onCategoryIdChange}
        />

        <label className={styles.email} htmlFor="title">
          AD TITLE
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="title"
          name="title"
          required
          value={title}
          onChange={onTitleChange}
          title="Enter title for your ad"
        />
        <label className={styles.email} htmlFor="description">
          PRODUCT DESCRIPTION
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="description"
          name="description"
          required
          value={description}
          onChange={onDescriptionChange}
          title="Describe your product"
        />
        <label className={styles.email} htmlFor="price">
          PRICE
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="price"
          type="number"
          name="price"
          required
          value={price}
          onChange={onPriceChange}
          title="Entre the price"
        />
        <label className={styles.email} htmlFor="phone">
          PHONE NUMBER
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="phone"
          type="number"
          name="phone"
          required
          value={phone}
          onChange={onPhoneChange}
          title="Enter your phone number "
        />
        {/* <label className={styles.email} htmlFor="brandId">
          SELECT BRAND
        </label>
        <input
          className={styles.rectangleInSignPage}
          id="brandId"
          name="brandId"
          placeholder="type brand name"
          required
          value={brandId}
          onChange={onBrandIdChange}
        /> */}
        {/* <input id="brandId" name="brandId" type="select" /> */}
        <select
          name="brandId"
          id="brandId"
          value={brandId}
          onChange={onBrandIdChange}
        >
          <option value="" selected="selected" hidden="hidden">
            Select brand
          </option>
          <option value="646789f46ab13d2d455249f9" onChange={onBrandIdChange}>
            Acer
          </option>
          <option value="646789fd6ab13d2d455249fc" onChange={onBrandIdChange}>
            Apple
          </option>
          <option value="64678a046ab13d2d455249ff" onChange={onBrandIdChange}>
            Dell
          </option>
          <option value="64678a0d6ab13d2d45524a02" onChange={onBrandIdChange}>
            HP
          </option>
          <option value="64678a176ab13d2d45524a05" onChange={onBrandIdChange}>
            Huawei
          </option>
          <option value="64678a206ab13d2d45524a08" onChange={onBrandIdChange}>
            Infinix
          </option>
          <option value="64678a2a6ab13d2d45524a0b" onChange={onBrandIdChange}>
            Lenovo
          </option>
          <option value="64678a316ab13d2d45524a0e" onChange={onBrandIdChange}>
            MSI
          </option>
          <option value="64678a3a6ab13d2d45524a11" onChange={onBrandIdChange}>
            Samsung
          </option>
          <option value="64678a416ab13d2d45524a14" onChange={onBrandIdChange}>
            Sony
          </option>
        </select>

        <label className={styles.email} htmlFor="images">
          ADD PHOTOS
        </label>
        <input
          className={styles.frameInSignPageChild}
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={onImagesChange}
          onSubmit={handleSubmit}
          encType="multipart/form-data" // modify enctype to allow file uploads
        />
        <button className={styles.creataccount} type="submit">
          CONFIRM ADDING PRODUCT
        </button>
      </form>

      <div>
        <button
          className={styles.haveAnyFeedback}
        >{`HAVE ANY FEEDBACK ? FEEL FREE TO CONTACT US `}</button>
      </div>
      <button className={styles.logo} onClick={onLogoClick} />
      <button className={styles.logInButton} onClick={onLogInButtonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.signup}>LOGIN</div>
        </button>
      </button>
      <div className={styles.signUpHead}>
        <div className={styles.signupButton1}>
          <div className={styles.productName}>ADD CONSOLE</div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
