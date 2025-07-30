import { staticCardsData } from "@/app/utils/constants";
import s from "./style.module.css";
import StaticCard from "../../StaticCard/StaticCard";
import { BackgroundCirclesSpecialization } from "@/app/assets/icons";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
    weight: ["700"],
    style: ['normal', 'italic'],
    subsets: ["latin"],
});

const Specialization = () => {
    return (
        <section className={s.specialization} id='specialization'>
            <h2 className={`${s.title} ${arsenal.className}`}>КАКИЕ ПРОБЛЕМЫ РЕШАЮ?</h2>
            <ul className={s.list}>
                {staticCardsData.map((card) => (
                    <StaticCard
                        key={card.title}
                        title={card.title}
                        img={card.img}
                        alt={card.alt}
                    />
                ))}
            </ul>
            <div className={s.wrapBgImg}>
                <BackgroundCirclesSpecialization />
            </div>
        </section>
    );
};

export default Specialization;
