import Burger from "@/app/assets/icons/Burger";
import pointer from "@/app/assets/icons/pointer.svg"
import letter from "@/app/assets/icons/letter.svg"
import tg from "@/app/assets/icons/tg.svg"
import wa from "@/app/assets/icons/wa.svg"
import phone from "@/app/assets/icons/phone.svg"
import Image from 'next/image';

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
          <Image src={pointer} alt="Указатель" width={20} height={32} />
          <p>Петрозаводск, Кондопога</p>
        </a>
        <a className={s.info_link}
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <Image src={letter} alt="конверт" width={32} height={24} />
          karpenkonevro@yandex.ru
        </a>
        <div className={s.social_container}>
          <a className={s.info_link}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Image src={tg} alt="Телеграмм" width={36} height={36} />
          </a>
          <a className={s.info_link}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Image src={wa} alt="Ватсап" width={36} height={36} />
          </a>
        </div>
      </div>
      <div style={{ display: "flex", height: "100%", gap: "16px" }}>
        <div className={s.wrap_phone}>
          <a className={`${s.info_link} ${s.info_link_noneDecoration}`}
            target="_blank"
            rel="noreferrer"
            href="#"
          >
            <Image src={phone} alt="Телефонная трубка" width={32} height={28} />
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
