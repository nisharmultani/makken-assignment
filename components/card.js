import Image from "next/image";
import style from "../styles/cards.module.css";
import Link from "next/link";
import card1 from "../public/images/card1@2x.png";
import card2 from "../public/images/card2@2x.png";
import card3 from "../public/images/card3@2x.png";
import card4 from "../public/images/card4@2x.png";

// import card1 from "../public/images/image1.png";
// import card2 from "../public/images/image2.png";
// import card3 from "../public/images/image3.png";
// import card4 from "../public/images/image4.png";

export default function Card() {
  return (
    <div className={`${style.container} container`}>
      <div className={`${style.row} row m-0`}>
        <div className="col-sm-6">
          <Link href="/cardInfo" style={{ textDecoration: "none" }}>
            <div className={style.card}>
              <h2 className={style.smallHeading}> NFT Landing page</h2>
              <h1 className={style.heading}>Salient Web Template</h1>
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
                  src={card1}
                  alt="template image"
                  height={280}
                  width={540}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  srcSet={card1}
                  quality={100}
                  className="rounded img-fluid"
                ></Image>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link href="/cardInfo" style={{ textDecoration: "none" }}>
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
                  src={card2}
                  alt="template image"
                  height={280}
                  width={540}
                  srcSet={card2}
                  quality={100}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="img-fluid"
                ></Image>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6" style={{ marginTop: -2.5 }}>
          <Link href="/cardInfo" style={{ textDecoration: "none" }}>
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
                  src={card3}
                  alt="template image"
                  height={280}
                  width={540}
                  srcSet={card3}
                  quality={100}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="rounded img-fluid"
                ></Image>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6" style={{ marginTop: -2.8 }}>
          <Link href="/cardInfo" style={{ textDecoration: "none" }}>
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
                  src={card4}
                  alt="template image"
                  height={280}
                  width={540}
                  srcSet={card4}
                  quality={100}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="img-fluid"
                ></Image>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
