import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
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
      <div className={styles.laptopsReview}>
        <div className={styles.laptopReviewParent}>
          <div className={styles.laptopReview}>
            <img
              className={styles.lapTopImage}
              alt=""
              src="/lap-top-image@2x.png"
            />
            <div className={styles.hpVictus16E0000neContainer}>
              <p
                className={styles.hpVictus16E0000ne}
              >{`HP Victus 16-e0000ne `}</p>
              <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
              <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
              <p className={styles.hpVictus16E0000ne}>
                NVIDIA GeForce RTX 3050
              </p>
              <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
            </div>
            <div className={styles.lineInLapTopFrame} />
            <b className={styles.egpmonth}>1000 EGP/MONTH</b>
          </div>
          <div className={styles.laptopReview1}>
            <img
              className={styles.lapTopImage}
              alt=""
              src="/lap-top-image@2x.png"
            />
            <div className={styles.hpVictus16E0000neContainer}>
              <p
                className={styles.hpVictus16E0000ne}
              >{`HP Victus 16-e0000ne `}</p>
              <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
              <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
              <p className={styles.hpVictus16E0000ne}>
                NVIDIA GeForce RTX 3050
              </p>
              <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
            </div>
            <div className={styles.lineInLapTopFrame} />
            <b className={styles.egpmonth}>1000 EGP/MONTH</b>
          </div>
          <div className={styles.laptopReview2}>
            <img
              className={styles.lapTopImage}
              alt=""
              src="/lap-top-image@2x.png"
            />
            <div className={styles.hpVictus16E0000neContainer}>
              <p
                className={styles.hpVictus16E0000ne}
              >{`HP Victus 16-e0000ne `}</p>
              <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
              <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
              <p className={styles.hpVictus16E0000ne}>
                NVIDIA GeForce RTX 3050
              </p>
              <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
            </div>
            <div className={styles.lineInLapTopFrame} />
            <b className={styles.egpmonth}>1000 EGP/MONTH</b>
          </div>
          <button
            className={styles.laptopReview3}
            onClick={onLAPTOPREVIEWClick}
          >
            <img
              className={styles.lapTopImage}
              alt=""
              src="/lap-top-image@2x.png"
            />
            <div className={styles.hpVictus16E0000neContainer3}>
              <p
                className={styles.hpVictus16E0000ne}
              >{`HP Victus 16-e0000ne `}</p>
              <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
              <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
              <p className={styles.hpVictus16E0000ne}>
                NVIDIA GeForce RTX 3050
              </p>
              <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
            </div>
            <div className={styles.lineInLapTopFrame} />
            <b className={styles.egpmonth3}>1000 EGP/MONTH</b>
          </button>
        </div>
        <div className={styles.laptopReview4}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview5}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview6}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview7}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview8}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview9}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview10}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview11}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview12}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview13}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview14}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
        <div className={styles.laptopReview15}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image@2x.png"
          />
          <div className={styles.hpVictus16E0000neContainer}>
            <p
              className={styles.hpVictus16E0000ne}
            >{`HP Victus 16-e0000ne `}</p>
            <p className={styles.hpVictus16E0000ne}>{`AMD Ryzen 7-5800H `}</p>
            <p className={styles.hpVictus16E0000ne}>{`16GB - 1TB SSD `}</p>
            <p className={styles.hpVictus16E0000ne}>NVIDIA GeForce RTX 3050</p>
            <p className={styles.hpVictus16E0000ne}> 4GB- 16"FHD - Win10</p>
          </div>
          <div className={styles.lineInLapTopFrame} />
          <b className={styles.egpmonth}>1000 EGP/MONTH</b>
        </div>
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
