import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./gaming-page-new.module.css";
const GamingPageNew = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginUpButtonClick = useCallback(() => {
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
    <div className={styles.gamingPageNew}>
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector27.svg" />
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
      <button className={styles.loginUpButton} onClick={onLoginUpButtonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.login}>LOGIN</div>
        </button>
      </button>
      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <button className={styles.signupButton} onClick={onSIGNUPBUTTONClick}>
          <div className={styles.login}>SIGNUP</div>
        </button>
      </button>
      <button className={styles.homeToLaptopVector}>
        <img className={styles.vectorIcon2} alt="" src="/vector28.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector29.svg" />
        <div className={styles.gamingConsoles}>GAMING CONSOLES</div>
      </button>
      <div className={styles.shoppingCart}>
        <div className={styles.searchBar1}>
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
        </div>
      </div>
      <div className={styles.gamingPageNewChild} />
      <button className={styles.filter}>
        <button className={styles.loadMoreWrapper}>
          <div className={styles.loadMore}>LOAD MORE</div>
        </button>
      </button>
      <div className={styles.psGp}>
        <div className={styles.ps4Review}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review1}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review2}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review3}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review4}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review5}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review6}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review7}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review8}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review9}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review10}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review11}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review12}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review13}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review14}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
        <div className={styles.ps4Review15}>
          <img className={styles.ps4ImageIcon} alt="" src="/ps4-image@2x.png" />
          <div className={styles.playstation41tbContainer}>
            <p className={styles.playstation41tb}>PLAYSTATION 4 1TB</p>
            <p className={styles.playstation41tb}>{`one dualshock 4 `}</p>
            <p className={styles.playstation41tb}>wireless controller</p>
          </div>
          <div className={styles.lineInPsframe} />
          <b className={styles.egpday}>500 EGP/DAY</b>
        </div>
      </div>
      <div className={styles.filter1} />
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
          <div className={styles.gamingConsoles1}>GAMING CONSOLES</div>
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

export default GamingPageNew;
