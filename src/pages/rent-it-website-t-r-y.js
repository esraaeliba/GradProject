import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./rent-it-website-t-r-y.module.css";
import { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const RentItWebsiteTRY = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Retrieve token from local storage
  const token = localStorage.getItem("token");

  const onLogoClick = useCallback(() => {
    navigate("/rent-it-website-t-r-y");
  }, [navigate]);
  const onFeedFormSubmit = async (e) => {
    e.preventDefault();

    // Set token in the request headers
    axios.defaults.headers.common["authorization"] = `Bearer__${token}`;
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      axios
        .post(`http://localhost:3001/review/add`, { name, description })
        .then((response) => {
          const { message } = response.data;
          if (message == "Created") {
            confirm("Sent successfully");
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Error: " + error.response.data.message);
          // setError("Invalid email or password."); // Set the error message
          // Handle any errors that occur during the request
        });
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onLaoptopButtonClick = useCallback(() => {
    navigate("/laptop-page");
  }, [navigate]);

  const onLAPTOPBUTTONClick = useCallback(() => {
    navigate("/laptop-page");
  }, [navigate]);

  const onCameraButtonClick = useCallback(() => {
    navigate("/camera-page");
  }, [navigate]);

  const onCAMERASBUTTONClick = useCallback(() => {
    navigate("/camera-page");
  }, [navigate]);

  const onAddProductClick = useCallback(() => {
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      navigate("/add-laptop");
    }
  }, [navigate]);

  const onAddProduct1Click = useCallback(() => {
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      navigate("/add-camera");
    }
  }, [navigate]);

  const onAddProduct2Click = useCallback(() => {
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      navigate("/add-gaming-console");
    }
  }, [navigate]);

  const onAddProduct4Click = useCallback(() => {
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      navigate("/add-projector");
    }
  }, [navigate]);

  const onAddProduct3Click = useCallback(() => {
    if (!token) {
      alert("You have to login first");
      window.location.replace("http://localhost:3000/log-in-page");
    } else {
      navigate("/add-sound-system");
    }
  }, [navigate]);

  const onLoginButttonClick = useCallback(() => {
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

  const onProjectorButtonClick = useCallback(() => {
    navigate("/projector-page");
  }, [navigate]);

  const onPROJECTORBUTTONClick = useCallback(() => {
    navigate("/projector-page");
  }, [navigate]);

  const onGamingConsleButttonClick = useCallback(() => {
    navigate("/gaming-page-new");
  }, [navigate]);

  const onCAMERASBUTTON1Click = useCallback(() => {
    navigate("/camera-page");
  }, [navigate]);

  const onSoundsystemButtonClick = useCallback(() => {
    navigate("/sound-page-new");
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

  const [laptops, setLaptops] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [soundSystems, setSoundSystems] = useState([]);
  const [gamingConsoles, setGamingConsoles] = useState([]);
  const [projector, setProjector] = useState([]);

  useEffect(() => {
    getLaptopsFromApi();
    getCamerasFromApi();
    geSoundSysytemsFromApi();
    getGamingConsoles();
    getsetProjector();
  }, []);
  const getLaptopsFromApi = () => {
    fetch("http://localhost:3001/product/laptops")
      .then((res) => res.json())
      .then((json) => {
        setLaptops(json.products);
      });
  };
  const getCamerasFromApi = () => {
    fetch("http://localhost:3001/product/cameras")
      .then((res) => res.json())
      .then((json) => {
        setCameras(json.products);
      });
  };
  const geSoundSysytemsFromApi = () => {
    fetch("http://localhost:3001/product/sound")
      .then((res) => res.json())
      .then((json) => {
        setSoundSystems(json.products);
      });
  };
  const getGamingConsoles = () => {
    fetch("http://localhost:3001/product/consoles")
      .then((res) => res.json())
      .then((json) => {
        setGamingConsoles(json.products);
      });
  };
  const getsetProjector = () => {
    fetch("http://localhost:3001/product/projectors")
      .then((res) => res.json())
      .then((json) => {
        setProjector(json.products);
      });
  };

  return (
    <div className={styles.rentItWebsiteTry}>
      <div className={styles.v}>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
        <div className={styles.vectorFrame}>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
        <div className={styles.vectorWrapper1}>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.vectorWrapper2}>
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        </div>
        <div className={styles.vectorWrapper3}>
          <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        </div>
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
        <div className={styles.firstWebTextUp}>
          <div className={styles.blackUpRec}>
            <div className={styles.firstWebsiteFor}>
              FIRST WEBSITE FOR RENTING TECHS IN EGYPT
            </div>
          </div>
        </div>
      </div>
      <button className={styles.load} onClick={onLaoptopButtonClick}>LOAD MORE</button>
      <button className={styles.load1} onClick={onCameraButtonClick}>LOAD MORE</button>
      <button className={styles.load2} onClick={onGAMINGTEXTUPClick}>LOAD MORE</button>
      <button className={styles.load3} onClick={onSOUNDTEXTUPClick}>LOAD MORE</button>
      <button className={styles.load4} onClick={onProjectorButtonClick}>LOAD MORE</button>

      <div className={styles.searchBar}>
        <div className={styles.bar}>
          <button className={styles.barItem} />
          <input placeholder="Search" className={styles.search} />
          <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
        </div>
      </div>

      <button className={styles.laoptopButton} onClick={onLaoptopButtonClick}>
        <button className={styles.laptopButton} onClick={onLAPTOPBUTTONClick}>
          <div className={styles.laptopsWrapper}>
            <div className={styles.laptops}>LAPTOPS</div>
          </div>
        </button>
      </button>
      <button className={styles.cameraButton} onClick={onCameraButtonClick}>
        <button className={styles.laptopButton} onClick={onCAMERASBUTTONClick}>
          <div className={styles.laptopsWrapper}>
            <div className={styles.laptops}>CAMERAS</div>
          </div>
        </button>
      </button>

      <div className={styles.laptopsGroups}>
        {laptops.map((product) => {
          return (
            <Card
            key={product.id}
            style={{
              width: "14rem",
              height: "350px",
              
              left: "-88px",
              // boxShadow: "2px 2px 4px 3px grey",
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
               
              </div>
              
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          );
        })}

        <div>
          <button
            style={{ marginLeft: "40px" }}
            className={styles.addProduct}
            onClick={onAddProductClick}
          >
            <div className={styles.iconPlus}>
              <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
            </div>
            <img
              className={styles.lineInLapTopFrame1}
              alt=""
              src="/line-in-lap-top-frame.svg"
            />
            <b className={styles.addNewProduct}>ADD NEW LAPTOPS</b>
          </button>
        </div>
      </div>

      <div className={styles.cameraGroup}>
        {cameras.map((product) => {
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
              <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} />
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

        <button
          style={{ marginLeft: "40px" }}
          className={styles.addProduct}
          onClick={onAddProduct1Click}
        >
          <div className={styles.iconPlus}>
            <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          </div>
          <img
            className={styles.lineInLapTopFrame1}
            alt=""
            src="/line-in-lap-top-frame.svg"
          />
          <b className={styles.addNewProduct}>ADD NEW CAMERA</b>
        </button>
      </div>

      {/* gaming consolllle */}
      <div className={styles.psGroup}>
        <button className={styles.addProduct} onClick={onAddProduct2Click}>
          <div className={styles.iconPlus}>
            <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          </div>
          <img
            className={styles.lineInLapTopFrame1}
            alt=""
            src="/line-in-lap-top-frame.svg"
          />
          <b className={styles.addNewProduct}>ADD NEW CONSOLE</b>
        </button>
        {gamingConsoles.map((product) => {
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
              <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} />
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

      <button className={styles.loginButtton} onClick={onLoginButttonClick}>
        <button className={styles.loginButton} onClick={onLOGINBUTTONClick}>
          <div className={styles.login}>LOGIN</div>
        </button>
      </button>
      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <button className={styles.signupButton} onClick={onSIGNUPBUTTONClick}>
          <div className={styles.login}>SIGNUP</div>
        </button>
      </button>
      <div className={styles.exloreNow}>
        <div className={styles.exproleNowFrame}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle@2x.png"
            />
          </div>
          <div className={styles.yesYouCanContainer}>
            <p className={styles.yesYouCan}>YES, YOU CAN RENT ALL YOU NEED</p>
            <p
              className={styles.hpVictus16E0000ne}
            >{`JUST WITH FEW STEPS GET THE `}</p>
            <p className={styles.hpVictus16E0000ne}>
              TECH YOU WANT IN YOUR HANDS
            </p>
            <p className={styles.hpVictus16E0000ne}>{`RIGHT NOW `}</p>
          </div>
          <button className={styles.exloreNowButton}>
            <div className={styles.exploreNow}>{`EXPLORE NOW `}</div>
          </button>
        </div>
      </div>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentFrame}>
          <button className={styles.paymentButton}>
            <div className={styles.paymentMethods1}>PAYMENT METHODS</div>
          </button>
          <div className={styles.yesYouCanContainer}>
            <p className={styles.yesYouCan}>{`YOU CAN ALSO PAY `}</p>
            <p className={styles.yesYouCan}>WITH MANY WAYS</p>
            <p className={styles.hpVictus16E0000ne}>VODAFONE CASH</p>
            <p className={styles.hpVictus16E0000ne}>CASH ON ARRIVAL</p>
            <p className={styles.hpVictus16E0000ne}>CREDIT CARD</p>
          </div>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="/rectangle1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.feedbackGp}>
        <div className={styles.feedbackReviews}>
          <div className={styles.feedback}>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard6}>
              <div className={styles.rating}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarChild}
                    alt=""
                    src="/ellipse-87.svg"
                  />
                  <div className={styles.avatarItem} />
                </div>
                <div className={styles.username}>Username</div>
                <div className={styles.vectorWrapper4}>
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
              </div>
              <div className={styles.content}>Great service!</div>
              <div className={styles.frameParent}>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend.svg"
                  />
                  <div className={styles.div}>32</div>
                </div>
                <div className={styles.icRecommendParent}>
                  <img
                    className={styles.icRecommendIcon}
                    alt=""
                    src="/icrecommend1.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.feedbackButton}>
          <button className={styles.feedbackButton1}>
            <div className={styles.exploreNow}>FEEDBACKS</div>
          </button>
        </button>
      </div>
      <div className={styles.rentItWebsiteTryInner}>
        <img className={styles.groupChild} alt="" src="/giffycanvas_(1).gif" />
      </div>
      <button
        className={styles.projectorButton}
        onClick={onProjectorButtonClick}
      >
        <button
          className={styles.laptopButton}
          onClick={onPROJECTORBUTTONClick}
        >
          <div className={styles.laptopsWrapper}>
            <div className={styles.laptops}>PROJECTORS</div>
          </div>
        </button>
      </button>

      {/* sound system */}
      <div className={styles.soundGp}>
        <button className={styles.addProduct3} onClick={onAddProduct3Click}>
          <div className={styles.iconPlus}>
            <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          </div>
          <img
            className={styles.lineInLapTopFrame1}
            alt=""
            src="/line-in-lap-top-frame.svg"
          />
          <b className={styles.addNewProduct}>ADD NEW SOUND SYSTEM</b>
        </button>
        {soundSystems.map((product) => {
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
              <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} />
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

      {/* projectors */}

      <div className={styles.projectorGp}>
        {projector.map((product) => {
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
              <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} />
              <Card.Body>
                <Card.Title className="size-20 mt-3">
                  {product.title}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>e
                <div>{product.price}</div>
                {/* <div>{product.price}</div> */}
                {/* <a><i class="fa-solid fa-heart fa-2xl" style="color: #ff0000;"></i></a>  */}
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          );
        })}

        <button className={styles.addProduct} onClick={onAddProduct4Click}>
          <div className={styles.iconPlus}>
            <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          </div>
          <img
            className={styles.lineInLapTopFrame1}
            alt=""
            src="/line-in-lap-top-frame.svg"
          />
          <b className={styles.addNewProduct}>ADD NEW PROJECTOR</b>
        </button>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.contactSections}>
          <div className={styles.container}>
            <div className={styles.content7}>
              <div className={styles.headingAndSubheading}>
                <div className={styles.heading}>GET IN TOUCH</div>
                <div className={styles.supportingText}>
                  We’d love to hear from you. Please fill out this form.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container1}>
            <div className={styles.content8}>
              <div className={styles.form}>
                <div className={styles.input}>
                  <form onSubmit={onFeedFormSubmit}>
                    {error && <div className={styles.error}>{error}</div>}
                    <label htmlFor="name">NAME</label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={onNameChange}
                      className={styles.companyEmail}
                    />
                    <div className={styles.line} />
                    <label htmlFor="description">SUBJECT</label>
                    <input
                      id="description"
                      name="description"
                      placeholder="Type your words "
                      value={description}
                      onChange={onDescriptionChange}
                      className={styles.companyEmail}
                    />
                    <div className={styles.line} />
                    <button type="submit" className={styles.con1}>
                      Connect with us
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactSections1}>
            <div className={styles.container2}>
              <div className={styles.headingAndSupportingText}>
                <div className={styles.headingAndSubheading1}>
                  <div className={styles.heading1}>Our Contact Details</div>
                </div>
                <div className={styles.supportingText1}>Let’s connect.</div>
              </div>
              <div className={styles.content9}>
                <div className={styles.contactText}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Telephone</div>
                    <div className={styles.supportingText2}>01212557178</div>
                  </div>
                </div>
                <div className={styles.contactText}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>WhatsApp</div>
                    <div className={styles.supportingText2}>01212557178</div>
                  </div>
                </div>
              </div>
              <div className={styles.content9}>
                <div className={styles.contactText}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Office</div>
                    <div className={styles.supportingText2}>
                      Alexandria, Egypt
                    </div>
                  </div>
                </div>
                <div className={styles.contactText}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Email</div>
                    <div className={styles.supportingText2}>mail@mail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={styles.gamingConsleButtton}
        onClick={onGamingConsleButttonClick}
      >
        <button className={styles.camerasButtonWrapper}>
          <button
            className={styles.laptopButton}
            onClick={onCAMERASBUTTON1Click}
          >
            <div className={styles.laptopsWrapper}>
              <div className={styles.laptops}>GAMING CONSOLES</div>
            </div>
          </button>
        </button>
      </button>
      <button
        className={styles.soundsystemButton}
        onClick={onSoundsystemButtonClick}
      >
        <button className={styles.soundSystemsWrapper}>
          <div className={styles.laptops}>SOUND SYSTEMS</div>
        </button>
      </button>
      <div className={styles.navigationBar}>
        <button className={styles.laptopTextUp} onClick={onLAPTOPTEXTUPClick}>
          <div className={styles.laptops1}>LAPTOPS</div>
          <img className={styles.vectorIcon20} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.camerasTextUp} onClick={onCAMERAsTEXTUPClick}>
          <div className={styles.laptops1}>CAMERAS</div>
          <img className={styles.vectorIcon20} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.gamingtextUp} onClick={onGAMINGTEXTUPClick}>
          <div className={styles.gamingConsoles1}>GAMING CONSOLES</div>
          <img className={styles.vectorIcon20} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.soundTextUp} onClick={onSOUNDTEXTUPClick}>
          <div className={styles.soundSystems1}>SOUND SYSTEMS</div>
          <img className={styles.vectorIcon20} alt="" src="/vector10.svg" />
        </button>
        <button className={styles.projectTextUp} onClick={onPROJECTTEXTUPClick}>
          <div className={styles.projectors1}>PROJECTORS</div>
          <img className={styles.vectorIcon20} alt="" src="/vector11.svg" />
        </button>
      </div>
    </div >
  );
};

export default RentItWebsiteTRY;
