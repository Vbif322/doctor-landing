import s from "./style.module.css";
import { BackgroundCirclesServices } from "@/app/assets/icons";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({
    weight: ["700"],
    style: ['normal', 'italic'],
    subsets: ["latin"],
});

const Services = () => {
    return (
        <section className={s.services} id='costOfServices'>
            <h2 className={`${s.title} ${arsenal.className}`}>СТОИМОСТЬ УСЛУГ</h2>
            <div className={s.container}>
                <article className={s.serviceCard}>
                    <h3 className={s.titleServiceCard}>Дистанционные услуги</h3>
                    <ul className={s.list}>
                        <li className={s.element}>сбор анамнеза</li>
                        <li className={s.element}>интерпретация результатов обследований (на основе имеющихся данных)</li>
                        <li className={s.element}>оформление консультации в письменном виде</li>
                        <li className={s.element}>заверение печатью</li>
                        <li className={s.element}>отправка электронного формата</li>
                    </ul>
                    <div className={s.wrap}>
                        <div className={s.price}>
                            <span>Первичная онлайн-консультация</span>
                            <span>2500₽</span>
                        </div>
                        <div className={s.price}>
                            <span>Повторная онлайн-консультация</span>
                            <span>2000₽</span>
                        </div>
                    </div>
                </article>
                <article className={s.serviceCard}>
                    <h3 className={`${s.titleServiceCard} ${s.bgColor}`}>Очные услуги</h3>
                    <ul className={s.list}>
                        <li className={s.element}>сбор анамнеза</li>
                        <li className={s.element}>физический осмотр</li>
                        <li className={s.element}>назначение дополнительных исследований для постановки диагноза при необходимости</li>
                    </ul>
                    <div className={s.wrap}>
                        <div className={s.price}>
                            <span>Первичный амбулаторный прием</span>
                            <span>3200₽</span>
                        </div>
                        <div className={s.price}>
                            <span>Повторный амбулаторный прием</span>
                            <span>2900₽</span>
                        </div>
                    </div>
                </article>
            </div>
            <div className={s.wrapBgImg}>
                <BackgroundCirclesServices />
            </div>
        </section>
    );
};

export default Services;
