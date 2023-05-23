import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sound-page-new.module.css";
const SoundPageNew = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onLOGINBUTTONClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
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

  return (
    <div className={styles.soundPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector30.svg" />
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
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <button className={styles.loginButton1} onClick={onLOGINBUTTONClick}>
          <div className={styles.login}>LOGIN</div>
        </button>
      </button>
      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <button className={styles.signupButton} onClick={onSIGNUPBUTTONClick}>
          <div className={styles.login}>SIGNUP</div>
        </button>
      </button>
      <button className={styles.homeToLaptopVector}>
        <img className={styles.vectorIcon2} alt="" src="/vector18.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector19.svg" />
        <div className={styles.soundSystems}>SOUND SYSTEMS</div>
      </button>
      <div className={styles.shoppingCart}>
        <div className={styles.searchBar1}>
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
        </div>
      </div>
      <div className={styles.soundPageNewChild} />
      <button className={styles.loadMoreButton}>
        <button className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>LOAD MORE</div>
        </button>
      </button>
      <div className={styles.soundGp}>
        <div className={styles.speakerReview}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview1}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview2}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview3}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview4}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview5}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview6}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview7}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview8}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview9}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview10}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview11}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview12}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview13}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview14}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
        <div className={styles.speakerReview15}>
          <img
            className={styles.speakerImageIcon}
            alt=""
            src="/speaker-image@2x.png"
          />
          <div className={styles.mediaTechSubwooferContainer}>
            <p className={styles.mediaTech}>{`Media Tech `}</p>
            <p className={styles.mediaTech}>Subwoofer MT737</p>
            <p className={styles.mediaTech}>Type: Wireless</p>
            <p className={styles.mediaTech}>Connectivity: Bluetooth</p>
            <p className={styles.mediaTech}>Color: Gray</p>
          </div>
          <div className={styles.lineInSpeakerFrame} />
          <b className={styles.egpweek}>300 EGP/WEEK</b>
        </div>
      </div>
      <div className={styles.filter} />
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
          <div className={styles.soundSystems1}>SOUND SYSTEMS</div>
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

export default SoundPageNew;