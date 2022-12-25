import style from "../styles/noti.module.css";
export default function Notification() {
  return (
    <div className={`${style.div}`}>
    <span className="bi bi-exclamation-triangle-fill">Website is under construction</span>
    </div>
  );
}
