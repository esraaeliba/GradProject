import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RentItWebsiteTRY from "./pages/rent-it-website-t-r-y";
import AddLaptop from "./pages/add-laptop";
import AddCamera from "./pages/add-camera";
import AddGamingConsole from "./pages/add-gaming-console";
import AddProjector from "./pages/add-projector";
import AddSoundSystem from "./pages/add-sound-system";
import LaptopProductNew from "./pages/laptop-product-new";
import LogInPageNew from "./pages/log-in-page-new";
import SIGNUPPageNew from "./pages/s-i-g-n-u-p-page-new";
import LaptopPageNew from "./pages/laptop-page-new";
import CameraPageNew from "./pages/camera-page-new";
import GamingPageNew from "./pages/gaming-page-new";
import SoundPageNew from "./pages/sound-page-new";
import ProjectorPageNew from "./pages/projector-page-new";
import forgetPassword from "./pages/forget-password";
import ChangePassword from "./pages/change-password";
import { useEffect } from "react";
import ForgetPassword from "./pages/forget-password";
import Landing from "./pages/landing-page";
import Laptop22PageNew from "./pages/laptop22-page";
import Camera22PageNew from "./pages/camera22-page";
import Gaming22PageNew from "./pages/gaming22-page";
import Sound22PageNew from "./pages/sound22-page";
import Projector22PageNew from "./pages/projector22-page";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/add-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/add-camera":
        title = "";
        metaDescription = "";
        break;
      case "/add-gaming-console":
        title = "";
        metaDescription = "";
        break;
      case "/add-projector":
        title = "";
        metaDescription = "";
        break;
      case "/add-sound-system":
        title = "";
        metaDescription = "";
        break;
      case "/laptop-product":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/laptop-page":
        title = "";
        metaDescription = "";
        break;
      case "/camera-page":
        title = "";
        metaDescription = "";
        break;
      case "/gaming-page-new":
        title = "";
        metaDescription = "";
        break;
      case "/sound-page-new":
        title = "";
        metaDescription = "";
        break;
      case "/projector-page":
        title = "";
        metaDescription = "";
        break;
      case "/forget-password":
        title = "";
        metaDescription = "";
        break;
      case "/change-password":
        title = "";
        metaDescription = "";
        break;
      case "/laptop22-page":
        title = "";
        metaDescription = "";
        break;
      case "/camera22-page":
        title = "";
        metaDescription = "";
        break;
      case "/gaming22-page":
        title = "";
        metaDescription = "";
        break;
      case "/sound22-page":
        title = "";
        metaDescription = "";
        break;
      case "/projector22-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/rent-it-website-t-r-y" element={<RentItWebsiteTRY />} />
      <Route path="/add-laptop" element={<AddLaptop />} />
      <Route path="/add-camera" element={<AddCamera />} />
      <Route path="/add-gaming-console" element={<AddGamingConsole />} />
      <Route path="/add-projector" element={<AddProjector />} />
      <Route path="/add-sound-system" element={<AddSoundSystem />} />
      <Route path="/laptop-product" element={<LaptopProductNew />} />
      <Route path="/log-in-page" element={<LogInPageNew />} />
      <Route path="/signup-page" element={<SIGNUPPageNew />} />
      <Route path="/laptop-page" element={<LaptopPageNew />} />
      <Route path="/camera-page" element={<CameraPageNew />} />
      <Route path="/gaming-page-new" element={<GamingPageNew />} />
      <Route path="/sound-page-new" element={<SoundPageNew />} />
      <Route path="/projector-page" element={<ProjectorPageNew />} />
      <Route path="/forget-Password" element={<ForgetPassword />} />
      <Route path="/change-Password" element={<ChangePassword />} />
      <Route path="/laptop22-page" element={<Laptop22PageNew />} />
      <Route path="/camera22-page" element={<Camera22PageNew />} />
      <Route path="/gaming22-page" element={<Gaming22PageNew />} />
      <Route path="/sound22-page" element={<Sound22PageNew />} />
      <Route path="/projector22-page" element={<Projector22PageNew />} />
    </Routes>
  );
}
export default App;
