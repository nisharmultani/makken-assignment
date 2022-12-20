import Img1 from "../public/image1.png"
import Img2 from "../public/image2.png"
import Img3 from "../public/image3.png"
import Img4 from "../public/image4.png"

import Image from "next/image";
import style from "../styles/cards.module.css";
export default function Card() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <div className={style.card}>
            <h2 className=""> NFT Landing page</h2>
            <h1> Salient Web Template </h1>
            <div className="d-flex ">
              <span className="mr-2">Made With:</span>
              <button type="button" className={style.btn}>
                VUE JS
              </button>
              <button type="button" className={style.btn}>
                TAILWIND CSS
              </button>
            </div>
            <div className={style.img}>
              <Image
                className="rounded img-fluid"
                src={Img1}
                alt=""
                height={280}
                width={540}
                srcSet=""
                sizes="(max-width: 786px) 100vw,(max-width:1200px)50vw,33vh"
                style={{ height: 280 }}
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-1.5">
          <div className={style.card}>
            <h2> NFT Landing page</h2>
            <h1 className="text-black"> Salient Web Template </h1>
            <div className="d-flex ">
              <span className="mr-2">Made With:</span>
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
                alt=""
                height={280}
                width={540}
                srcSet=""
                className="img-fluid"
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className={style.card}>
            <h2> NFT Landing page</h2>
            <h1 className="text-black"> Salient Web Template </h1>
            <div className="d-flex ">
              <span className="mr-2">Made With:</span>
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
                alt=""
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
            <h2> NFT Landing page</h2>
            <h1 className="text-black"> Salient Web Template </h1>
            <div className="d-flex ">
              <span className="mr-2">Made With:</span>
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
