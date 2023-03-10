import Image from "next/image";
import style from "../styles/benefits.module.css";
import search from "../public/icon/search.svg";
import calendar from "../public/icon/calendar.svg";
import check from "../public/icon/check.svg";
import pen from "../public/icon/pen.svg";
import people from "../public/icon/people.svg";
import doller from "../public/icon/doller.svg";

export default function Benefits() {
  return (
    <div className={`${style.container} container`}>
      <div className={`${style.title} text-center`}>
        <h1>Benefits</h1>
        <p>
          Perks so good you'll never need to go anywhere else
          <br />
          for your design. Seriously.
        </p>
      </div>
      <div className="container">
        <div className={`${style.row} row`}>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <Image
                    src={calendar}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="calendar icon"
                  ></Image>
                </div>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <Image
                    src={doller}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="coin icon"
                  ></Image>
                </div>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  {/* <i className={`${style.i} bi bi-search`}></i> */}
                  <Image
                    src={search}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="search icon"
                  ></Image>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <Image
                    src={pen}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="pen icon"
                  ></Image>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <Image
                    src={check}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="check icon"
                  ></Image>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-xl-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <Image
                    src={people}
                    height={40}
                    width={40}
                    srcSet=""
                    alt="people icon"
                  ></Image>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
