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
              src="/../public/image1.png"
              alt=""
              height={280}
              width={514}
              srcSet=""
              className="rounded"
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
              src="/../public/image2.png"
              alt=""
              height={280}
              width={514}
              srcSet=""
            ></Image>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className={style.card}>
          <h2 > NFT Landing page</h2>
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
              src="/../public/image3.png"
              alt=""
              height={280}
              width={514}
              srcSet=""
              className="rounded"
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
              src="/../public/image4.png"
              alt="template image"
              height={280}
              width={514}
              srcSet=""
            ></Image>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
