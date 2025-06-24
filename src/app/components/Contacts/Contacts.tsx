import { Burger, Pointer, Letter, Tg, Wa, Phone } from '@/app/assets/icons'
import s from "./style.module.css";

const Contacts = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a className={`${s.info_link} ${s.info_link_noneDecoration}`}
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <Pointer />
          <p>Петрозаводск, Кондопога</p>
        </a>
        <a className={s.info_link}
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <Letter />
          karpenkonevro@yandex.ru
        </a>
        <div className={s.social_container}>
          <a className={s.info_link}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Tg />
          </a>
          <a className={s.info_link}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Wa />
          </a>
        </div>
      </div>
      <div className={s.nav_container}>
        <div className={s.wrap_phone}>
          <a className={`${s.info_link} ${s.info_link_noneDecoration}`}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Phone />
            <p className={s.phone}>{"+7 (900) 650-56-38"}</p>
          </a>
          <button className={s.recall}>Перезвонить вам?</button>
        </div>
        <button className={s.btn_burger}>
          <Burger />
        </button>
      </div>
    </header>
  );
};

export default Contacts;
