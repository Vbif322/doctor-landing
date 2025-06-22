import Image from "next/image";
import { lena1, magnifier } from '@/app/assets/img'
import s from "./style.module.css";
import { Arsenal } from "next/font/google";
import { BackgroundCirclesMagnifier } from "@/app/assets/icons";

const arsenal = Arsenal({
  weight: ["400", "700"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});
const AboutDoctor = () => {
  return (
    <section className={s.aboutDoc} id='about'>
      <h2 className={`${s.title} ${arsenal.className}`}>О ВРАЧЕ</h2>
      <div className={s.wrapBackgroundImg}>
        <BackgroundCirclesMagnifier />
      </div>
      <Image src={magnifier} alt='Увеличительное стекло' className={s.magnifier} />
      <div className={s.container}>
        <div className={s.introduction}>
          <div className={s.wrap}>
            <Image src={lena1} alt='Елена Карпенко' className={s.ava} />
          </div>
          <p className={s.text}>Здравствуйте, меня зовут Елена Карпенко.
            В своей работе я использую <span>индивидуальный
              подход</span> к каждому пациенту, опираясь
            на <span>протоколы и клинические рекомендации</span> Министерства Здравоохранения РФ</p>
        </div>
        <div className={s.tagWrap}>
          <div className={s.tag}>
            <p><span>лет</span> стажа</p>
          </div>
          <div className={s.tag}>
            <p>Врач <span>невролог-эпилептолог</span></p>
          </div>
          <div className={s.tag}>
            <p><span>Министр Молодёжного Правительства</span> Республики Карелия</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;