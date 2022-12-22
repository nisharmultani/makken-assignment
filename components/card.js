import Img1 from "../public/image1.png";
import Img2 from "../public/image2.png";
import Img3 from "../public/image3.png";
import Img4 from "../public/image4.png";
import Image from "next/image";
import style from "../styles/cards.module.css";

export default function Card() {
  return (
    <div className={`${style.container} container mt-5`}>
      <div className={`${style.row} row m-0`}>
        <div className="col-sm-6">
          <div className={style.card}>
            <h2 className={style.smallHeading}> NFT Landing page</h2>
            <h1 className={style.heading} style={{ color: "#ff5a5f" }}>
              Salient Web Template
            </h1>
            <div className={`${style.b} d-flex`}>
              <span className={style.md}>Made With:</span>
              <button type="button" className={style.btn}>
                VUE JS
              </button>
              <button type="button" className={style.btn}>
                TAILWIND CSS
              </button>
            </div>
            <div className={style.img}>
              <Image
                src={Img1}
                alt="template image"
                height={280}
                width={540}
                srcSet=""
                className="rounded img-fluid"
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className={style.card}>
            <h2 className={style.smallHeading}> NFT Landing page</h2>
            <h1 className={style.heading}> Salient Web Template </h1>
            <div className={`${style.b} d-flex`}>
              <span className={style.md}>Made With:</span>
              <button type="button" className={style.btn}>
                VUE JS
              </button>
              <button type="button" className={style.btn}>
                TAILWIND CSS
              </button>
            </div>
            <div className={style.img}>
              <Image
                src={Img2}
                alt="template image"
                height={280}
                width={540}
                srcSet=""
                className="img-fluid"
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ marginTop: -2.5 }}>
          <div className={style.card}>
            <h2 className={style.smallHeading}> NFT Landing page</h2>
            <h1 className={style.heading}> Salient Web Template </h1>
            <div className={`${style.b} d-flex`}>
              <span className={style.md}>Made With:</span>
              <button type="button" className={style.btn}>
                VUE JS
              </button>
              <button type="button" className={style.btn}>
                TAILWIND CSS
              </button>
            </div>
            <div className={style.img}>
              <Image
                src={Img3}
                alt="template image"
                height={280}
                width={540}
                srcSet=""
                className="rounded img-fluid"
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ marginTop: -2.8 }}>
          <div className={style.card}>
            <h2 className={style.smallHeading}> NFT Landing page</h2>
            <h1 className={style.heading}> Salient Web Template </h1>
            <div className={`${style.b} d-flex`}>
              <span className={style.md}>Made With:</span>
              <button type="button" className={style.btn}>
                VUE JS
              </button>
              <button type="button" className={style.btn}>
                TAILWIND CSS
              </button>
            </div>
            <div className={style.img}>
              <Image
                src={Img4}
                alt="template image"
                height={280}
                width={540}
                srcSet=""
                className="img-fluid"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
