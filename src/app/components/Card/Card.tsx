import { type FC } from "react";
import s from "./style.module.css";
import Image from "next/image";
import { TCard } from "@/app/utils/type/type";


const Card: FC<TCard> = ({ link, title, img, alt }) => {
  return (
    <a className={s.card}
      href={link}
    >
      <div className={s.container_title}>
        <p>{title}</p>
      </div>
      <Image src={img} alt={alt} />
    </a>
  );
};

export default Card;
