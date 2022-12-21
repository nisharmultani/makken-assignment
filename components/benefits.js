import style from "../styles/benefits.module.css";
export default function Benefits() {
  return (
    <div className={`${style.main} container `}>
      <div className={style.mainHeading}>
        <h1>Benefits</h1>
        <p>
          Perks so good you shall never need to go anywhere else <br />
          for your design. Seriously.
        </p>
      </div>
      <div className={`${style.main} container `}>
        <div className={`${style.row} row`}>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-calendar3`}></i>
                </div>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-coin`}></i>
                </div>
              </div>
            </div>

            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-search`}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-pen-fill`}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-stopwatch-fill`}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
          <div className={`${style.maindiv} col-sm-4`}>
            <div className="position-relative  ">
              <div className={style.iconDiv}>
                <div className={style.icon}>
                  <i className={`${style.i} bi bi-people-fill`}></i>
                </div>
              </div>
            </div>
            <div className={style.heading}>
              <h1>Design Board</h1>
              <p>Add as many design requests to your board as you did like.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
