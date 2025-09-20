import React from "react";
import s from "./style.module.css";
import Link from "@/app/ui/Link";
import { Letter, Phone, Pointer, Tg, Wa } from "@/app/assets/icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <Link>
          <Pointer />
          <p>Петрозаводск, Кондопога</p>
        </Link>
        <Link>
          <Letter />
          karpenkonevro@yandex.ru
        </Link>
      </div>
      <div>
        <p>О враче</p>
        <p>Образование</p>
        <p>Специализация</p>
        <p>Стоимость услуг</p>
        <p>Отзывы</p>
      </div>
      <div className={s.container}>
        <div className={s.wrap_phone}>
          <Link style={{ textDecoration: "none" }}>
            <Phone />
            <p className={s.phone}>{"+7 (900) 650-56-38"}</p>
          </Link>
        </div>
        <div>
          <Link>
            <Tg />
          </Link>
          <Link>
            <Wa />
          </Link>
          <button className={s.recall}>Перезвонить вам?</button>
        </div>
      </div>
    </footer>
  );
}
