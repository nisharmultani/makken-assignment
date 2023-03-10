import style from "../styles/faq.module.css";
import down from "../public/icon/down.svg";
import Image from "next/image";
export default function Faq() {
  return (
    <div className={`${style.container} container`}>
      <h1 className={style.header}>Frequently Ask Question</h1>

      <div className={style.faq}>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What is the date of commencement and process for Joining?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>

          <hr className={style.hr} />
          <div className="collapse" id="collapseExample">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            What is in it for you?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>
          <hr className={style.hr} />

          <div className="collapse" id="collapseExample1">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            What is the date of commencement and process for Joining?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>

          <hr className={style.hr} />

          <div className="collapse" id="collapseExample2">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            What is in it for you?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>

          <hr className={style.hr} />

          <div className="collapse" id="collapseExample3">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
          >
            What is the date of commencement and process for Joining?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>

          <hr className={style.hr} />

          <div className="collapse" id="collapseExample4">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div
            className={style.link}
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
          >
            What is in it for you?
            <div className="float-end">
              <Image
                src={down}
                height={13}
                width={13}
                srcSet=""
                alt="down icon"
              ></Image>
            </div>
          </div>

          <hr className={style.hr} />

          <div className="collapse" id="collapseExample5">
            <div className={style.ans}>
              <ol>
                <li>Weekly coaching and review </li>
                <li>Guided exercises for building</li>
                <li>product, business, and market</li>
                <li>
                  Experiential workshops, including minting tokens and setting
                  up bots
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
