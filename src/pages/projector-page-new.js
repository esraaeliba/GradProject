import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./projector-page-new.module.css";
const ProjectorPageNew = () => {
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
    <div className={styles.projectorPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector31.svg" />
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
        <img className={styles.vectorIcon3} alt="" src="/vector26.svg" />
        <div className={styles.soundSystems}>SOUND SYSTEMS</div>
      </button>
      <div className={styles.shoppingCart}>
        <div className={styles.searchBar1}>
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
        </div>
      </div>
      <div className={styles.projectorPageNewChild} />
      <button className={styles.loadMoreButton}>
        <button className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>LOAD MORE</div>
        </button>
      </button>
      <div className={styles.projectorGp}>
        <div className={styles.projectorReview}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview1}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview2}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview3}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview4}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview5}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview6}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview7}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview8}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview9}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview10}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview11}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview12}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview13}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview14}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
        <div className={styles.projectorReview15}>
          <img
            className={styles.projectorImage}
            alt=""
            src="/projector-image@2x.png"
          />
          <div className={styles.viewSonic3000Container}>
            <p className={styles.ledProjector}>View Sonic 3,000 ANSI</p>
            <p className={styles.ledProjector}>LED Projector</p>
            <p className={styles.ledProjector}>Native Resolution:</p>
            <p className={styles.ledProjector}>WXGA (1280x800)</p>
            <p className={styles.ledProjector}>Lens: F=2.56-2.68,</p>
            <p className={styles.ledProjector}>f=22-24.1mm</p>
          </div>
          <div className={styles.lineInProjectFrame} />
          <b className={styles.egpweek}>600 EGP/WEEK</b>
        </div>
      </div>
      <div className={styles.filter} />
      <div className={styles.navigationBar}>
        <button className={styles.laptopTextUp} onClick={onLAPTOPTEXTUPClick}>
          <div className={styles.laptops}>LAPTOPS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.camerasTextUp} onClick={onCAMERAsTEXTUPClick}>
          <div className={styles.laptops}>CAMERAS</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.gamingtextUp} onClick={onGAMINGTEXTUPClick}>
          <div className={styles.gamingConsoles}>GAMING CONSOLES</div>
          <img className={styles.vectorIcon5} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.soundTextUp} onClick={onSOUNDTEXTUPClick}>
          <div className={styles.soundSystems1}>SOUND SYSTEMS</div>
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

export default ProjectorPageNew;
