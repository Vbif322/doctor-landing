import { type FC } from "react";
import s from "./style.module.css";
import { Arsenal } from "next/font/google";
import { BackgroundCirclesBanner, Cross, Figure } from "@/app/assets/icons";
import Image from "next/image";
import { banner } from '@/app/assets/img'

const arsenal = Arsenal({
  weight: ["400", "700"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

const Banner: FC = () => {
  return (
    <div className={`${s.rectangle} ${arsenal.className}`}>
      <div className={s.wrapBgImg}>
        <BackgroundCirclesBanner />
      </div>
      <div>
        <div className={s.chip__container}>
          <div className={s.chip}>Невролог</div>
          <div className={s.chip}>Эпилептолог</div>
        </div>
        <h1 className={s.title}>
          Диагностика и эффективное лечение{" "}
          <span>неврологических заболеваний</span>
        </h1>
        <p className={s.subtitle}>
          для улучшения <span>качества</span> жизни
        </p>
        <div className={s.wrapp}>
          <button className={s.button}>Записаться на прием</button>
          <div className={s.consult}>
            <div className={s.cross}>
              <Cross />
            </div>
            <p>
              <span>бесплатная</span> консультация
            </p>
          </div>
        </div>
      </div>
      <div className={s.container_name}>
        <div className={s.figure}>
          <Figure />
        </div>
        <p className={s.name}>
          <span>Карпенко</span>
          <span>Елена</span>
          <span>Юрьевна</span>
        </p>
      </div>
      <Image className={s.img} src={banner} alt='Карпенко Елена Юрьевна' />
    </div>
  );
};

export default Banner;
