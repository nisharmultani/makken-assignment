import style from "../styles/forgatePass.module.css";
import Nav from "../components/nav";
export default function ChangePass() {
  return (
    <>
      <Nav />
      <div className={`${style.container} container`}>
        <h1 className={style.title}>Change Password</h1>

        <div className={style.div}>
          <p className={style.subTitle}>
            Happens to the best of us. We’ll get this fixed in no time.
          </p>
          <form>
            <div className="form-group">
              <input
                type="Password"
                className={`${style.input} form-control`}
                placeholder="New Password"
              />
            </div>
            <div className="form-group">
              <input
                type="Password"
                className={`${style.input} form-control`}
                placeholder="Confirm new Password"
              />
            </div>

            <button
              type="submit"
              className={`${style.btn} btn btn-lg btn-block text-white`}
            >
              Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
