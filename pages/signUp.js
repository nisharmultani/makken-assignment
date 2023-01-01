import Nav from "../components/nav";
import style from "../styles/signUp.module.css";
import Link from "next/link";
import Image from "next/image";
import google from "../public/images/google.png";
export default function SignUp() {
  return (
    <>
      <Nav />
      <div className={`${style.container} container`}>
        <h1 className={style.title}>Create a account</h1>
        <div className={style.div}>
          <form className={style.form}>
            <div className="form-group">
              <input
                type="text"
                className={`${style.input} form-control`}
                id="exampleInputEmail1"
                aria-describedby="full name"
                placeholder="Full Name"
              />
            </div>
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
              Sign up
            </button>
          </form>
          <div className={style.link}>
            <Link href="signIn" className={style.login}>
              Already have an account? 
              <span> Login</span>
            </Link>
            <h3 className={style.or}>OR</h3>
            <div className={style.google}>
              <Image src={google} height={24} width={24} srcSet="" alt="google image"></Image>
              <h3>Register with Google</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
