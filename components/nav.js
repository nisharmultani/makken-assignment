import logo from "../public/logo.png";
import style from "../styles/nav.module.css";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className={`${style.nav} navbar navbar-expand-lg container`}>
      <div className="container" style={{ marginLeft: 48 }}>
        <Image
          src="/../public/logo.png"
          alt="this is logo"
          height={40}
          width={41}
          srcSet=""
        ></Image>
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
          <div style={{ marginRight: "49px" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`${style.menu}nav-item`}
                style={{ marginRight: 10 }}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "black" }}
                >
                  Licenses
                </a>
              </li>
              <li
                className={`${style.menu}nav-item`}
                style={{ marginRight: "21px" }}
              >
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "black" }}
                >
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn text-white"
                  style={{
                    width: "141px",
                    height: 40,
                    background:
                      "linear-gradient(90deg, #D33851 0%, #F83B41 100%)",
                    borderRadius: 8,
                  }}
                >
                  Join us for free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
