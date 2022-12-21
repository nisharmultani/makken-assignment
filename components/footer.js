import style from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.main} container`}>
        <p className={style.copy}>© 2022 Makkken. All rights reserved</p>
        <div className={`${style.icon} float-end`}>
          <i className={`${style.i} bi bi-instagram`}></i>

          <i className={`${style.i} bi bi-twitter`} style={{marginLeft:"31px",marginRight:"30px"}}></i>

          <i className={`${style.i} bi bi-telegram`}></i>
        </div>
      </div>
    </footer>
  );
}
