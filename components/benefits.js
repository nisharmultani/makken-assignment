import { strictEqual } from "assert";
import Head from "next/head";
import style from "../styles/benefits.module.css";
export default function Benefits() {
  return (
    <div className="container mt-5">
      <Head>
        {/* <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <div className={style.mainHeading}>
        <h1>Benefits</h1>
        <p>
          Perks so good you'll never need to go anywhere else for your design.
          Seriously.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-sm-4">
          <div className="position-relative  ">
            <div className={style.icon}>
              <h2 className="text-center">Logo</h2>
            </div>
          </div>

          <div className={style.heading}>
            <h1>Design Board</h1>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div>
            <div className="position-relative  ">
              <div className={style.icon}>
                <h2 className="text-center">Logo</h2>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" >
          <div className="position-relative  ">
            <div className={style.icon}>
              <h2 className="text-center">Logo</h2>
            </div>
          </div>
          <div className={style.heading}>
            <h1>Design Board</h1>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
        <div className="col-sm-4" style={{ marginTop: "55px" }}>
          <div className="position-relative">
            <div className={style.icon}>
              <h2 className="text-center">Logo</h2>
            </div>
          </div>
          <div className={style.heading}>
            <h1>Design Board</h1>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="position-relative  ">
            <div className={style.icon}>
              <h2 className="text-center">Logo</h2>
            </div>
          </div>
          <div className={style.heading}>
            <h1>Design Board</h1>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="position-relative  ">
            <div className={style.icon}>
              <h2 className="text-center">Logo</h2>
            </div>
          </div>
          <div className={style.heading}>
            <h1>Design Board</h1>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
