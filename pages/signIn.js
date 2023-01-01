import Nav from "../components/nav";
import style from "../styles/signIn.module.css";
import Link from "next/link";
import Image from "next/image";
import google from "../public/images/google.png";
export default function SignIn() {
  return (
    <>
      <Nav />
      <div className={`${style.container} container`}>
        <h1 className={style.title}>Sign in</h1>
        <p className={style.welcome}>Welcome back.</p>
        <div className={style.div}>
            <div className={style.google}>
              <Image
                src={google}
                height={24}
                width={24}
                srcSet=""
                alt="google image"
              ></Image>
              <h3>Register with Google</h3>
            </div>
            <h3 className={style.or}>OR</h3>
          <form>
            <div className="form-group">
              <input
                type="email"
                className={`${style.input} form-control`}
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`${style.input} form-control`}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className={`${style.btn} btn btn-lg btn-block text-white`}
            >
              Sign in
            </button>
          </form>
          <div className={style.link}>
            <Link href="forgatePass" className={style.forgate}>
              Forgate your password?
            </Link>
            <Link href="signUp" className={style.joinLink}>
              Don't have an account? <span>Join us </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
