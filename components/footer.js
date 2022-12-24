import style from "../styles/footer.module.css";
import instra from "../public/icon/instra.svg";
import twiter from "../public/icon/twiter.svg";
import teligram from "../public/icon/teligram.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.main} container`}>
        <p className={style.copy}>© 2022 Makkken. All rights reserved</p>
        <div className={`${style.icon} float-end`}>
          <Image
            src={instra}
            height={20}
            width={20}
            srcSet=""
            alt="instra gram icon"
            style={{ marginRight: 30 }}
          ></Image>
          <Image
            src={twiter}
            height={20}
            width={20}
            srcSet=""
            alt="instra gram icon"
            style={{ marginRight: 30 }}
          ></Image>
          <Image
            src={teligram}
            height={20}
            width={20}
            srcSet=""
            alt="instra gram icon"
          ></Image>
        </div>
      </div>
    </footer>
  );
}
