
  import style from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p className={style.copy}>© 2022 Makkken. All rights reserved</p>
        <div className="float-end" style={{ marginTop: "-50px" }}>
          <i
            className="bi bi-facebook"
            style={{ fontSize: "20px", color: "#A4A4A4" }}
          ></i>
          <i
            className="bi bi-whatsapp"
            style={{
              fontSize: "20px",
              marginLeft: 20,
              marginRight: 20,
              color: "#A4A4A4",
            }}
          ></i>
          <i
            className="bi bi-telegram"
            style={{ fontSize: "20px", color: "#A4A4A4" }}
          ></i>
        </div>
      </div>
    </footer>
  );
}
