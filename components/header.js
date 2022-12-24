import style from "../styles/header.module.css";
export default function Header() {
  return (
    <div >
      <div className={style.header}>
        <div className={style.heading}>
          <h1>
            Scalable
            <span style={{ color: "#ff5a5f", fontWeight:"bolder"}}> website </span>
            templates, you'll Love, guaranteed.
          </h1>
          <p className={style.subTitle}>
            Visually-stunning, easy to customize site templates built with React
            and Next.js.
            <br /> The perfect starting point for your next project.
          </p>
          <p className={style.craft}>Crafted by professionals</p>
        </div>
      </div>
    </div>
  );
}
