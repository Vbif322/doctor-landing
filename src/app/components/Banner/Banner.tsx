import { type FC } from "react";
import s from "./style.module.css";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Banner: FC = () => {
  return (
    <div className={`${s.rectangle} ${arsenal.className}`}>
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
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <button className={s.button}>Записаться на прием</button>
          <div className={s.consult}>
            <p>
              <span>Бесплатная</span> консультация
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>Карпенко Елена Юрьевна</p>
      </div>
    </div>
  );
};

export default Banner;
