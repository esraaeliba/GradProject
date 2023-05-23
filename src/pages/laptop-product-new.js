import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SHOPPINGCARTPOPUPNew from "../components/s-h-o-p-p-i-n-g-c-a-r-t-p-o-p-u-p-new";
import PortalPopup from "../components/portal-popup";
import styles from "./laptop-product-new.module.css";
const LaptopProductNew = () => {
  const navigate = useNavigate();
  const [isSHOPPINGCARTPOPUPNew1Open, setSHOPPINGCARTPOPUPNew1Open] =
    useState(false);
  const [isSHOPPINGCARTPOPUPNewOpen, setSHOPPINGCARTPOPUPNewOpen] =
    useState(false);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onLOGINBUTTONClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onSIGNUPBUTTONClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onLAPTOPTEXTUPClick = useCallback(() => {
    navigate("/laptop-page");
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

  const openSHOPPINGCARTPOPUPNew1 = useCallback(() => {
    setSHOPPINGCARTPOPUPNew1Open(true);
  }, []);

  const closeSHOPPINGCARTPOPUPNew1 = useCallback(() => {
    setSHOPPINGCARTPOPUPNew1Open(false);
  }, []);

  const openSHOPPINGCARTPOPUPNew = useCallback(() => {
    setSHOPPINGCARTPOPUPNewOpen(true);
  }, []);

  const closeSHOPPINGCARTPOPUPNew = useCallback(() => {
    setSHOPPINGCARTPOPUPNewOpen(false);
  }, []);

  return (
    <>
      <div className={styles.laptopProductNew}>
        <button className={styles.logo} onClick={onLogoClick} />
        <div className={styles.upGp}>
          <div className={styles.blackUp}>
            <div className={styles.blackUpRec}>
              <div className={styles.blackUpRec1} />
            </div>
          </div>
          <div className={styles.grayLineUp}>
            <div className={styles.blackUpRec}>
              <div className={styles.grayUpRec} />
            </div>
          </div>
          <div className={styles.firstWebTextUp}>
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
              <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
            </div>
          </div>
        </div>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <button className={styles.loginButton1} onClick={onLOGINBUTTONClick}>
            <div className={styles.login}>LOGIN</div>
          </button>
        </button>
        <button className={styles.signupButton} onClick={onSignupButtonClick}>
          <button
            className={styles.signupButton1}
            onClick={onSIGNUPBUTTONClick}
          >
            <div className={styles.login}>SIGNUP</div>
          </button>
        </button>
        <div className={styles.navigationBar}>
          <button className={styles.laptopTextUp} onClick={onLAPTOPTEXTUPClick}>
            <div className={styles.laptops}>LAPTOPS</div>
            <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
          </button>
          <button
            className={styles.camerasTextUp}
            onClick={onCAMERAsTEXTUPClick}
          >
            <div className={styles.laptops}>CAMERAS</div>
            <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
          </button>
          <button className={styles.gamingtextUp} onClick={onGAMINGTEXTUPClick}>
            <div className={styles.gamingConsoles}>GAMING CONSOLES</div>
            <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
          </button>
          <button className={styles.soundTextUp} onClick={onSOUNDTEXTUPClick}>
            <div className={styles.soundSystems}>SOUND SYSTEMS</div>
            <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
          </button>
          <button
            className={styles.projectTextUp}
            onClick={onPROJECTTEXTUPClick}
          >
            <div className={styles.projectors}>PROJECTORS</div>
            <img className={styles.vectorIcon1} alt="" src="/vector17.svg" />
          </button>
        </div>
        <button className={styles.homeToLaptopVector}>
          <img className={styles.vectorIcon6} alt="" src="/vector18.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector19.svg" />
          <div className={styles.laptops}>LAPTOPS</div>
        </button>
        <button
          className={styles.shoppingCart}
          onClick={openSHOPPINGCARTPOPUPNew1}
        >
          <button
            className={styles.shoppingCart1}
            onClick={openSHOPPINGCARTPOPUPNew}
          >
            <img className={styles.vectorIcon8} alt="" src="/vector20.svg" />
          </button>
        </button>
        <div className={styles.laptopPhoto}>
          <img
            className={styles.lapTopImage}
            alt=""
            src="/lap-top-image2@2x.png"
          />
        </div>
        <div className={styles.laptopName}>
          <div className={styles.hpVictus16E0001neContainer}>
            <p className={styles.hpVictus16E0001ne}>
              HP Victus 16-e0001ne - AMD Ryzen™ 7-5800H - 16GB - 1TB SSD -
              NVIDIA® GeForce® RTX™ 3050 4GB - 16"FHD - Win10 - Mica silver
            </p>
          </div>
        </div>
        <div className={styles.specs}>
          <div className={styles.laptopSpecs}>
            <div className={styles.processorAmdRyzenContainer}>
              <p className={styles.hpVictus16E0001ne}>
                <b className={styles.processor}>Processor</b>
                <span>
                  : AMD Ryzen™ 7 5800H (up to 4.4 GHz max boost clock, 16 MB L3
                  cache, 8 cores, 16 threads)
                </span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                <b className={styles.processor}>Ram</b>
                <span>: 16GB</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                <b className={styles.processor}>Hard Disk</b>
                <span className={styles.processor}>{`: 1TB SSDGraphics `}</span>
                <b className={styles.processor}>Card</b>
                <span>: NVIDIA® GeForce® RTX™ 3050 4GB</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                <b className={styles.processor}>Color</b>
                <span>: Mica silver</span>
              </p>
            </div>
          </div>
        </div>
        <img
          className={styles.laptopProductNewChild}
          alt=""
          src="/line-9.svg"
        />
        <button className={styles.laptopSmallImage4}>
          <img
            className={styles.lapTopImage1}
            alt=""
            src="/lap-top-image3@2x.png"
          />
        </button>
        <img className={styles.laptopProductNewItem} alt="" src="/line-9.svg" />
        <button className={styles.priceButton}>
          <button className={styles.laptopPrice}>
            <b className={styles.egpmonth}>1000 EGP/MONTH</b>
          </button>
        </button>
        <div className={styles.relatedProducts}>
          <b className={styles.relatedProducts1}>
            <p className={styles.hpVictus16E0001ne}>RELATED</p>
          </b>
          <img
            className={styles.lapTopImage2}
            alt=""
            src="/lap-top-image4@2x.png"
          />
          <img
            className={styles.lapTopImage3}
            alt=""
            src="/lap-top-image5@2x.png"
          />
          <img
            className={styles.lapTopImage4}
            alt=""
            src="/lap-top-image6@2x.png"
          />
          <img
            className={styles.lapTopImage5}
            alt=""
            src="/lap-top-image7@2x.png"
          />
        </div>

        <img
          className={styles.laptopProductNewInner}
          alt=""
          src="/line-11.svg"
        />
        <button className={styles.laptopSmallImage3}>
          <img
            className={styles.lapTopImage1}
            alt=""
            src="/lap-top-image3@2x.png"
          />
        </button>
        <button className={styles.laptopSmallImage2}>
          <img
            className={styles.lapTopImage1}
            alt=""
            src="/lap-top-image3@2x.png"
          />
        </button>
        <button className={styles.laptopSmallImage}>
          <img
            className={styles.lapTopImage1}
            alt=""
            src="/lap-top-image3@2x.png"
          />
        </button>
        <div className={styles.detailsHead}>
          <div className={styles.detailssss}>
            <b className={styles.details}>DETAILS</b>
          </div>
        </div>
        <div className={styles.detailsText}>
          <div className={styles.laptopDetails}>
            <div className={styles.hpVictus16E0001neContainer1}>
              <p className={styles.blankLine}>HP Victus 16-e0001ne</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Keep cool and game longer</p>
              <p className={styles.hpVictus16E0001ne}>
                Power through the heat of every game with a cooling system that
                prevents overheating.
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.blankLine}>Made for play</p>
              <p className={styles.hpVictus16E0001ne}>
                Play at your best with tear-free gameplay at a fast refresh rate
                and enjoy an ultra-sharp visual experience.
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.blankLine}>Customize with OMEN Gaming Hub</p>
              <p className={styles.hpVictus16E0001ne}>
                Your one-stop shop to elevate gameplay, from controlling every
                little performance to lighting options and more.
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.blankLine}>Let's Play</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Windows 10</p>
              <p className={styles.hpVictus16E0001ne}>
                Do great things confidently with the familiar feel of Windows -
                only better.
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.blankLine}>NVIDIA® GeForce RTX™ 3050</p>
              <p className={styles.hpVictus16E0001ne}>
                Step up to the power of 2nd generation RTX with GeForce RTX 3050
                laptops. They are powered by the award-winning NVIDIA Ampere
                architecture, featuring new RT Cores, Tensor Cores, and
                streaming multiprocessors to enable ray-traced graphics and
                cutting-edge AI features such as NVIDIA DLSS. GeForce laptops
                with new 3rd gen Max-Q technologies use AI and new system
                optimizations to create more efficient gaming laptops in new and
                innovative form factors.
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.blankLine}>144Hz FHD anti-glare display</p>
              <p className={styles.hpVictus16E0001ne}>
                Reduce frustrating lag and image ghosting with a display that
                combines a 144Hz refresh rate and 1080p Full High Definition
                resolution for smooth, crisp gameplay.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.moreInfoHead}>
          <div className={styles.detailssss}>
            <b className={styles.details}>MORE INFORMATION</b>
          </div>
        </div>
        <div className={styles.moreInfoText}>
          <div className={styles.blackUpRec}>
            <div className={styles.laptopMoreInfoContainer}>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Brand</span>
                <span> HP</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Color</span>
                <span> Silver</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Part Number</span>
                <span> 489G5EA</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Model</span>
                <span> HP Victus 16-e0001ne</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Processor</span>
                <span> AMD</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Processor Information</span>
                <span> AMD Ryzen™ 7 5800H</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                (up to 4.4 GHz max boost clock, 16 MB L3 cache, 8 cores, 16
                threads)
              </p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>RAM</span>
                <span> 16 GB</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>RAM Information</span>
                <span> 16 GB DDR4-3200 MHz RAM (2 x 8 GB)</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.hardDiskCapacity}>
                  Hard Disk Capacity
                </span>
                <span className={styles.processor}> 1 Tera</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span
                  className={styles.brand}
                >{`Hard Disk Type               `}</span>
                <span>1 TB PCIe® NVMe™ TLC M.2 SSD</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Graphics Card</span>
                <span> NVIDIA® GeForce RTX 3050</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Graphics Card Details</span>
                <span>
                  {" "}
                  NVIDIA® GeForce RTX™ 3050 Laptop GPU (4 GB GDDR6 dedicated)
                </span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Display Type</span>
                <span>
                  {" "}
                  16.1" diagonal, FHD (1920 x 1080), Refresh Rate:144Hz
                </span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.brand}>Display Size</span>
                <span> 16.1inches</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span
                  className={styles.brand}
                >{`Connectivity                       `}</span>
                <span>Integrated 10/100/1000 GbE LAN</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                Realtek Wi-Fi 6 (2x2) and Bluetooth® 5.2 combo (supporting
                gigabit data rate)
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span
                  className={styles.brand}
                >{`I/O Ports                       `}</span>
                <span>
                  {" "}
                  (1) SuperSpeed USB Type-C® 5Gbps signaling rate (DisplayPort™
                  1.4, HP Sleep and Charge)
                </span>
              </p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                (1) SuperSpeed USB Type-A 5Gbps signaling rate (HP Sleep and
                Charge)
              </p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                (2) SuperSpeed USB Type-A 5Gbps signaling rate
              </p>
              <p className={styles.hpVictus16E0001ne}> (1) HDMI 2.1</p>
              <p className={styles.hpVictus16E0001ne}> (1) RJ-45</p>
              <p className={styles.hpVictus16E0001ne}> (1) AC smart pin</p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                (1) headphone/microphone combo
              </p>
              <p className={styles.hpVictus16E0001ne}>
                {" "}
                (1) multi-format SD media card reader
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span
                  className={styles.brand}
                >{`Speaker                           `}</span>
                <span>{` Audio by B&O; Dual speakers; HP Audio Boost`}</span>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span
                  className={styles.hardDiskCapacity}
                >{`Operating System         `}</span>
                <span className={styles.processor}>Windows 10</span>
              </p>
              <p className={styles.hpVictus16E0001ne}>&nbsp;</p>
              <p className={styles.hpVictus16E0001ne}>
                <span className={styles.hardDiskCapacity}>
                  Product Warranty
                </span>
                <span className={styles.processor}> 1 Year</span>
              </p>
            </div>
          </div>
        </div>
        <button className={styles.cart11}>ADD TO CART</button>
      </div>
      {isSHOPPINGCARTPOPUPNew1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSHOPPINGCARTPOPUPNew1}
        >
          <SHOPPINGCARTPOPUPNew onClose={closeSHOPPINGCARTPOPUPNew1} />
        </PortalPopup>
      )}
      {isSHOPPINGCARTPOPUPNewOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSHOPPINGCARTPOPUPNew}
        >
          <SHOPPINGCARTPOPUPNew onClose={closeSHOPPINGCARTPOPUPNew} />
        </PortalPopup>
      )}
    </>
  );
};

export default LaptopProductNew;
