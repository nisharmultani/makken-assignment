import style from "../styles/noti.module.css";
export default function Notification() {
  return (
    <div className={`${style.div}`}>
    <h4 className="bi bi-exclamation-triangle-fill color-white">Website is under construction</h4>
    </div>
  );
}
