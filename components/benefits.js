import style from "../styles/benefits.module.css";
export default function Benefits() {
  return (
    <div className="container" style={{ marginTop: "112px" }}>
      <div className={style.mainHeading}>
        <h1>Benefits</h1>
        <p>
          Perks so good you'll never need to go anywhere else <br />
          for your design. Seriously.
        </p>
      </div>
      <div className="container" style={{ marginTop: "130px" }}>
        <div className="row ">
          <div className="col-sm-4">
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i
                    className="bi bi-calendar3"
                    style={{ fontSize: "35px" }}
                  ></i>
                </div>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="position-relative ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className="bi bi-coin" style={{ fontSize: "35px" }}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className="bi bi-search" style={{ fontSize: "35px" }}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className="col-sm-4" style={{ marginTop: "65px" }}>
            <div className="position-relative">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i
                    className="bi bi-pen-fill"
                    style={{ fontSize: "35px" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className="col-sm-4" style={{ marginTop: "65px" }}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i
                    className="bi bi-stopwatch-fill"
                    style={{ fontSize: "35px" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you'd like.</p>
            </div>
          </div>
          <div className="col-sm-4" style={{ marginTop: "65px" }}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i
                    className="bi bi-people-fill"
                    style={{ fontSize: "35px" }}
                  ></i>
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
