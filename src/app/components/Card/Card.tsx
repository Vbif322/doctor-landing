import { type FC } from "react";
import s from "./style.module.css";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  img: StaticImageData;
  alt: string;
};

const Card: FC<Props> = ({ title, img, alt }) => {
  return (
    <a className={s.card}
      href="#"
    >
      <div className={s.container_title}>
        <p>{title}</p>
      </div>
      <Image src={img} alt={alt} />
    </a>
  );
};

export default Card;
