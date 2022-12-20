import style from "../styles/header.module.css";
export default function Header() {
  return (
    <div className={style.header}>
      <div className="position-relative">
        <div className={style.heading}>
          <h1>
            Scalable <span style={{ color: "#ff5a5f" }}> website </span>{" "}
            templates,
            <br /> you'll Love, guaranteed.
          </h1>
          <p>
            Visually-stunning, easy to customize site templates built with React
            and Next.js.
            <br /> The perfect starting point for your next project.
          </p>
          <p
            style={{
              color: "black",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "26px",
            }}
          >
            Crafted by professionals
          </p>
        </div>
      </div>
    </div>
  );
}
