
import Image from "next/image";
import s from "./style.module.css";
import { academicHat } from "@/app/assets/img";
import { BackgroundCirclesEducation } from "@/app/assets/icons";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
    weight: ["400", "700"],
    style: ['normal', 'italic'],
    subsets: ["latin"],
});

const Education = () => {
    return (
        <section className={s.education} id="education">
            <div className={s.wrapBgImg}>
                <BackgroundCirclesEducation />
                <Image src={academicHat} alt='Академическая шляпа лежит на книге' className={s.academicHat} />
            </div>
            <h2 className={`${s.title} ${arsenal.className}`}>ОБРАЗОВАНИЕ</h2>
            <ul className={s.list}>
                <li className={s.text}>Петрозаводский <span>государственный университет,</span> специализация: лечебное дело</li>
                <li className={s.text}><span>Ординатура по неврологии</span> на базе Первого Санкт-Петербургского государственного университета им. И.П.Павлова</li>
                <li className={s.text}><span>Повышении квалификации</span> «Современные подходы к диагностики и лечению эпилепсии у взрослых»</li>
                <li className={s.text}><span>Онлайн-курс</span> в Школе нервно-мышечных болезней им. Б. М. Гехта</li>
                <li className={s.text}><span>Онлайн-проект</span> Школа «Болезни мозга»</li>
            </ul>
        </section>
    );
};

export default Education;