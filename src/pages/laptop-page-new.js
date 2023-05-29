import { FormControlLabel, Checkbox } from "@mui/material";
import { useCallback, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import mongoose from "mongoose";
import Dropdown from "react-bootstrap/Dropdown";
import {
  Slider as ChakraSlider,
  SliderTrack as ChakraSliderTrack,
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderThumb as ChakraSliderThumb,
  SliderMark as ChakraSliderMark,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./laptop-page-new.module.css";
import axios from "axios";
const LaptopPageNew = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/rent-it-website-t-r-y");
  }, [navigate]);

  const onLogInButtonClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onLOGINBUTTONClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onSinUpButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onSIGNUPBUTTONClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onLAPTOPREVIEWClick = useCallback(() => {
    navigate("/laptop-product");
  }, [navigate]);

  const onLAPTOPTEXTUPClick = useCallback(() => {
    navigate("/laptop-product");
  }, [navigate]);

  const onCAMERAsTEXTUPClick = useCallback(() => {
    navigate("/camera-page");
  }, [navigate]);

  const onGAMINGTEXTUPClick = useCallback(() => {
    navigate("/gaming-page-new");
  }, [navigate]);

  const onSOUNDTEXTUPClick = useCallback(() => {
    navigate("/sound-page-new");
  }, [navigate]);

  const onPROJECTTEXTUPClick = useCallback(() => {
    navigate("/projector-page");
  }, [navigate]);

  const [laptops, setLaptops] = useState([]);

  const token = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = `Bearer__${token}`;

  useEffect(() => {
    getLaptopsFromApi();
  }, []);
  const getLaptopsFromApi = () => {
    fetch("http://localhost:3001/product/laptops6")
      .then((res) => res.json())
      .then((json) => {
        setLaptops(json.products);
      });
  };

  const handleUpdateClick = async (productId) => {
    const url = `http://localhost:3000/update?productId=${productId}`;
    window.location.replace(url);
  };



  const handleDeleteClick = async (productId) => {
    try {
      fetch(`http://localhost:3001/product/delete/${productId}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer__${token}`
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the backend
          const { message } = data;
          if (message == "deleted") {
            window.location.replace("http://localhost:3000/laptop-page");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleCartClick = async (productId) => {
    try {
      const requestData = {
        products: [{ productId, quantity: 1 }] // Set the quantity as needed
      };

      fetch('http://localhost:3001/cart/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer__${token}`
        },
        body: JSON.stringify(requestData)
      })
        .then((response) => response.json())
        .then((data) => {
          const { message } = data;
          if (message === "Added" || message === "Updated") {
            alert("Added to cart");
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const signOut = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the sign-in page or any other desired destination
    window.location.replace("http://localhost:3000/log-in-page");
  };

  return (
    <div className={styles.laptopPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector24.svg" />
      </div>
      <button className={styles.logo} onClick={onLogoClick} />
      <div className={styles.grayUp}>
        <div className={styles.greyUpRec} />
      </div>
      <div className={styles.upGp}>
        <div className={styles.greyUpRec}>
          <div className={styles.blackUpRec}>
            <div className={styles.blackUpRec1} />
          </div>
        </div>
        <div className={styles.grayUpRec} />
        <div className={styles.firstUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.firstWebsiteFor}>
              FIRST WEBSITE FOR RENTING TECHS IN EGYPT
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchBar1}>
          <div className={styles.bar}>
            <div className={styles.barChild} />
            <div className={styles.barItem} />
            <div className={styles.search}>Search</div>
            <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
          </div>
        </div>
      </div>
      {token ? null : (
        <div>
          <button className={styles.loginButtton} onClick={onLoginButttonClick}>
            <div className={styles.login}>LOGIN</div>
          </button>
          <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
            <div className={styles.login}>SIGNUP</div>
          </button>
        </div>
      )}
      <div>
        <button className={styles.signUpButton} onClick={signOut}>
          <div className={styles.login}>Sign Out</div>
        </button>
      </div>
      <button className={styles.homeToLaptopVector}>
        <img className={styles.vectorIcon2} alt="" src="/vector18.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector19.svg" />
        <div className={styles.laptops}>LAPTOPS</div>
      </button>
      <div className={styles.shoppingCart}>
        <div className={styles.searchBar1}>
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
        </div>
      </div>

      <div className={styles.laptopsGroups}>
        {laptops.map((product) => {

          return (
            <Card
              key={product.id}
              style={{
                width: "300px",
                height: "450px",
                marginBottom: "30px",
                left: "-88px",
                backgroundColor: "transparent",
                marginRight: "30px",
                borderRadius: "var(--br-6xl)",
              }}
              className="card"
            >
              <Card.Img
                className="test"
                style={{
                  // width: "25%",
                  height: "50%",
                }}
                variant="top"
                src={`http://localhost:3001/${product.image}`}
              />
              <Card.Body>
                <div style={{ height: "110px" }}>
                  <Card.Title
                    className="size-20 mt-3"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      marginBottom: "20px",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  {/* <Card.Text style={{ height: "60px" }}>{product.description}</Card.Text> */}
                  <div>
                    {`${product.price} L.E`}
                    <span style={{ color: "red" }}> /Month</span>
                  </div>
                  {/* <div>{product.price}</div> */}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button onClick={() => handleCartClick(product._id)} variant="primary">ADD TO CART</Button>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown"></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleUpdateClick(product._id)}>
                        EDIT
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteClick(product._id)}>
                        DELETE
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="pagi" style={{ marginTop: "1728px" }}>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="laptop22-page">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="laptop22-page">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.laptopPageNewChild} />

      <div className={styles.filter}>
        <div className={styles.laptops1}>Laptops</div>
        <div className={styles.laptopsTypes}>
          <div className={styles.olitems}>
            <div className={styles.hp}>Acer</div>
            <div className={styles.lenovo}>Apple</div>
            <div className={styles.asus}>Dell</div>
            <div className={styles.dell}>HP</div>
            <div className={styles.iLife}>Huawei</div>
            <div className={styles.apple}>Infinix</div>
            <div className={styles.acer}>Lenovo</div>
            <div className={styles.cherry}>MSI</div>
            <div className={styles.msi}>Samsung</div>
            <div className={styles.huawei}>Sony</div>
            <div className={styles.checkboxdefaultCheckboxOnlParent}>
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl1}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl2}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl3}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl4}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl5}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl6}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl7}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl8}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl9}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navigationBar}>
        <button className={styles.laptopTextUp} onClick={onLAPTOPTEXTUPClick}>
          <div className={styles.laptops}>LAPTOPS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector16.svg" />
        </button>
        <button className={styles.camerasTextUp} onClick={onCAMERAsTEXTUPClick}>
          <div className={styles.laptops}>CAMERAS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector16.svg" />
        </button>
        <button className={styles.gamingtextUp} onClick={onGAMINGTEXTUPClick}>
          <div className={styles.gamingConsoles}>GAMING CONSOLES</div>
          <img className={styles.vectorIcon5} alt="" src="/vector16.svg" />
        </button>
        <button className={styles.soundTextUp} onClick={onSOUNDTEXTUPClick}>
          <div className={styles.soundSystems}>SOUND SYSTEMS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector16.svg" />
        </button>
        <button className={styles.projectTextUp} onClick={onPROJECTTEXTUPClick}>
          <div className={styles.projectors}>PROJECTORS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector17.svg" />
        </button>
      </div>
    </div>
  );
};

export default LaptopPageNew;
