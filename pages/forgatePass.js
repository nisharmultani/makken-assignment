import style from "../styles/forgatePass.module.css";
import Nav from "../components/nav";
export default function ForgatePass() {
  return (
    <>
      <Nav />
      <div className={`${style.container} container`}>
        <h1 className={style.title}>Forgot Password</h1>
      
        <div className={style.div}>
        <p className={style.subTitle}>
          Don’t worry we are there for you. Enter you email address below and we
          will send you the magic link
        </p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className={`${style.input} form-control`}
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>

            <button
              type="submit"
              className={`${style.btn} btn btn-lg btn-block text-white`}
            >
              Send email
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
