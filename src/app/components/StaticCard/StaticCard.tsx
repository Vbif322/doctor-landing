import { type FC } from "react";
import s from "./style.module.css";
import Image from "next/image";
import { TStaticCard } from "@/app/utils/type/type";


const StaticCard: FC<TStaticCard> = ({ title, img, alt }) => {
    return (
        <li className={s.card}>
            <Image src={img} alt={alt} />
            <p className={s.title}>{title}</p>
        </li>
    );
};

export default StaticCard;
