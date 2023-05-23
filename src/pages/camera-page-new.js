import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./camera-page-new.module.css";
const CameraPageNew = () => {
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
    <div className={styles.cameraPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector25.svg" />
      </div>
      <button className={styles.logo} onClick={onLogoClick} />
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
          <div className={styles.blackUp}>
            <div className={styles.blackUpRec}>
              <div className={styles.firstWebsiteFor}>
                FIRST WEBSITE FOR RENTING TECHS IN EGYPT
              </div>
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
        <img className={styles.vectorIcon3} alt="" src="/vector26.svg" />
        <div className={styles.cameras}>CAMERAS</div>
      </button>
      <div className={styles.shoppingCart}>
        <div className={styles.searchBar1}>
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
        </div>
      </div>
      <div className={styles.filter} />
      <div className={styles.cameraPageNewChild} />
      <button className={styles.loadMoreButton}>
        <button className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>LOAD MORE</div>
        </button>
      </button>
      <div className={styles.cameraGp}>
        <div className={styles.cameraReview}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview1}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview2}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview3}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview4}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview5}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview6}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview7}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview8}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview9}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview10}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview11}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview12}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview13}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview14}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
        <div className={styles.cameraReview15}>
          <img
            className={styles.cameraImageIcon}
            alt=""
            src="/camera-image@2x.png"
          />
          <div className={styles.nikonD5600SingleLensContainer}>
            <p className={styles.singleLensReflexDigital}>NIKON D5600</p>
            <p className={styles.singleLensReflexDigital}>
              Single-lens reflex digital camera
            </p>
            <p className={styles.singleLensReflexDigital}>
              Image sensor type CMOS
            </p>
            <p className={styles.singleLensReflexDigital}>Lens mount</p>
            <p className={styles.singleLensReflexDigital}>
              Nikon F mount with AF contacts
            </p>
          </div>
          <div className={styles.lineInCameraFrame} />
          <b className={styles.egpday}>300 EGP/DAY</b>
        </div>
      </div>
      <div className={styles.navigationBar}>
        <button className={styles.laptopTextUp} onClick={onLAPTOPTEXTUPClick}>
          <div className={styles.cameras}>LAPTOPS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.camerasTextUp} onClick={onCAMERAsTEXTUPClick}>
          <div className={styles.cameras}>CAMERAS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.gamingtextUp} onClick={onGAMINGTEXTUPClick}>
          <div className={styles.gamingConsoles}>GAMING CONSOLES</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.soundTextUp} onClick={onSOUNDTEXTUPClick}>
          <div className={styles.soundSystems}>SOUND SYSTEMS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.projectTextUp} onClick={onPROJECTTEXTUPClick}>
          <div className={styles.projectors}>PROJECTORS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector11.svg" />
        </button>
      </div>
    </div>
  );
};

export default CameraPageNew;
