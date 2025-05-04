import Burger from "@/app/assets/icons/Burger";
import s from "./style.module.css";

const Contacts = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <p>Петрозаводск, Кондопога</p>
        </div>
        <div>
          <a>karpenkonevro@yandex.ru</a>
        </div>
        <div className={s.social_container}>
          <span>TG</span>
          <span>WA</span>
        </div>
      </div>
      <div style={{ display: "flex", height: "100%", gap: "16px" }}>
        <div style={{ alignSelf: "center" }}>
          <p className={s.phone}>{"+7 (900) 650-56-38"}</p>
          <p className={s.recall}>Перезвонить вам?</p>
        </div>
        <div style={{ alignSelf: "start", cursor: "pointer" }}>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Contacts;
