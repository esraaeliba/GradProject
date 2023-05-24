
import { FormControlLabel, Checkbox } from "@mui/material";
import { useCallback, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import {
  Slider as ChakraSlider,
  SliderTrack as ChakraSliderTrack,
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderThumb as ChakraSliderThumb,
  SliderMark as ChakraSliderMark,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./laptop-page-new.module.css";
const LaptopPageNew = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
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
 

  useEffect(() => {
    getLaptopsFromApi();
  }, []);
  const getLaptopsFromApi = () => {
    fetch("http://localhost:3001/product/laptops")
      .then((res) => res.json())
      .then((json) => {
        setLaptops(json.products);
      });
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
      <button className={styles.logInButton} onClick={onLogInButtonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.login}>LOGIN</div>
        </button>
      </button>
      <button className={styles.sinUpButton} onClick={onSinUpButtonClick}>
        <button className={styles.signupButton} onClick={onSIGNUPBUTTONClick}>
          <div className={styles.login}>SIGNUP</div>
        </button>
      </button>
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
                width: "14rem",
                height: "291px",
                // boxShadow: "2px 2px 4px 3px grey",
                marginRight: "30px",
                borderRadius: "var(--br-6xl)",
              }}
              className="card"
            >
              <Card.Img variant="top" src={product.images} />
              <Card.Body>
                <Card.Title className="size-20 mt-3">
                  {product.title}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div>{product.price}</div>
                {/* <div>{product.price}</div> */}
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          );
        })}
     </div>

      <div className={styles.laptopPageNewChild} />
      <button className={styles.loadMoreButton}>
        <button className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>LOAD MORE</div>
        </button>
      </button>
      <div className={styles.filter}>
        <div className={styles.laptops1}>Laptops</div>
        <div className={styles.laptopsTypes}>
          <div className={styles.olitems}>
            <div className={styles.hp}>HP</div>
            <div className={styles.lenovo}>Lenovo</div>
            <div className={styles.asus}>Asus</div>
            <div className={styles.dell}>Dell</div>
            <div className={styles.iLife}>I-life</div>
            <div className={styles.apple}>Apple</div>
            <div className={styles.acer}>Acer</div>
            <div className={styles.cherry}>Cherry</div>
            <div className={styles.msi}>MSI</div>
            <div className={styles.huawei}>Huawei</div>
            <div className={styles.infinix}>Infinix</div>
            <div className={styles.itel}>Itel</div>
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
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl10}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.checkboxdefaultCheckboxOnl11}
                label=""
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
        </div>
        <button className={styles.brandType}>
          <div className={styles.brand}>Brand</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <div className={styles.colorType}>
          <button className={styles.colorrr}>
            <div className={styles.color}>Color</div>
            <img className={styles.pseudoIcon1} alt="" src="/pseudo1.svg" />
          </button>
          <button className={styles.colors}>
            <div className={styles.divswatchAttributeOptions}>
              <div className={styles.divswatchOption} />
              <button className={styles.divswatchOption1} />
              <button className={styles.divswatchOption2} />
              <button className={styles.divswatchOption3} />
              <button className={styles.divswatchOption4} />
            </div>
          </button>
        </div>
        <div className={styles.priceType}>
          <button className={styles.price}>
            <div className={styles.price1}>Price</div>
            <img className={styles.pseudoIcon1} alt="" src="/pseudo1.svg" />
          </button>
          <div className={styles.slider}>
            <div className={styles.priceSlide}>
              <div className={styles.egp749900Egp6999900}>
                EGP7,499.00 - EGP69,999.00
              </div>
            </div>
            <ChakraSlider
              className={styles.sliderdefault}
              width="172px"
              defaultValue={25}
              colorScheme="teal"
            >
              <ChakraSliderTrack>
                <ChakraSliderFilledTrack />
              </ChakraSliderTrack>
              <ChakraSliderThumb />
            </ChakraSlider>
          </div>
        </div>
        <button className={styles.ssd}>
          <div className={styles.ssd1}>ssd</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <button className={styles.ssd}>
          <div className={styles.laptopCategory1}>Laptop Category</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <button className={styles.ssd}>
          <div className={styles.graphicsCard}>Graphics Card</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <button className={styles.ssd}>
          <div className={styles.displaySize}>Processor</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <button className={styles.ssd}>
          <div className={styles.displaySize}>Display Size</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
        <button className={styles.ssd}>
          <div className={styles.ram1}>RAM</div>
          <img className={styles.pseudoIcon} alt="" src="/pseudo.svg" />
        </button>
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
