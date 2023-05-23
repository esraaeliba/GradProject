import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./s-h-o-p-p-i-n-g-c-a-r-t-p-o-p-u-p-new.module.css";
const SHOPPINGCARTPOPUPNew = ({ onClose }) => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.shoppingCartPopupNew}>
      <div className={styles.v}>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      </div>
      <div className={styles.v1}>
        <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
      </div>
      <div className={styles.shoppingCartText} />
      <div className={styles.itemFrame}>
        <div className={styles.itemFrameChild} />
        <div className={styles.itemsWrapper}>
          <div className={styles.items}>1 ITEMS</div>
        </div>
        <div className={styles.itemFrameChild} />
      </div>
      <div className={styles.totalFrame}>
        <div className={styles.totalFrameInner}>
          <div className={styles.itemFrameChild} />
        </div>
        <div className={styles.total2000leWrapper}>
          <div className={styles.total2000le}>
            <b>{`TOTAL                                      `}</b>
            <span>2000LE</span>
          </div>
        </div>
        <div className={styles.totalFrameInner}>
          <div className={styles.itemFrameChild} />
        </div>
      </div>
      <button className={styles.checkout}>
        <b className={styles.checkout1}>CHECKOUT</b>
      </button>
      <div className={styles.productsFrame}>
        <section className={styles.firstProduct}>
          <div className={styles.lapTopImageParent}>
            <img
              className={styles.lapTopImage}
              alt=""
              src="/lap-top-image1@2x.png"
            />
            <div className={styles.total2000le}>
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
          </div>
          <img className={styles.firstProductChild} alt="" />
          <div className={styles.le}>2000 LE</div>
        </section>
      </div>
      <div className={styles.shoppingChart}>CHART</div>
      <div className={styles.shoppingChart1}>SHOPPING</div>
      <button className={styles.logo} onClick={onLogoClick} />
    </div>
  );
};

export default SHOPPINGCARTPOPUPNew;
