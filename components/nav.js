import style from "../styles/nav.module.css";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import Notification from "../components/notification";
export default function Nav() {
  return (
    <div>
      <Notification />
      <nav
        className={`${style.nav} bg-white navbar navbar-expand-lg container`}
      >
        <div className={style.logo}>
          <Image src={logo} height={40} width={41} alt="logo" srcSet=""></Image>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li> */}
          </ul>
          <div className={style.menu}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`${style.Link} nav-item`}>
                <a className="nav-link" aria-current="page" href="#">
                  Licenses
                </a>
              </li>
              <li
                className={`${style.Link} nav-item`}
                style={{ marginRight: "16px" }}
              >
                <a className="nav-link" aria-current="page" href="#">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <button className={`${style.btn} btn`}>Join us for free</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
