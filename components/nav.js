import Link from "next/link";
import Image from "next/image";
import Log from "../public/logo.png";
export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg container"
      style={{
        height: "80px",
        boxShadow: "0px 1px 0px rgba(227, 227, 227, 0.5)",
      }}
    >
      <div className="container-fluid">
        <Image src={Log} alt="this is logo" height={40} width={41}></Image>
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
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Licenses
                </a>
              </li>
              <li className="nav-item">
                {/* <Link href="/about"> */}
                <a
                  className="nav-link text-black"
                  href="#"
                  style={{ color: "#000000", fontSize: "16px" }}
                >
                  Benefits
                </a>
                {/* </Link> */}
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
                  Join us fro Free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
