import { type FC } from "react";
import s from "./style.module.css";

type Props = {
  title: string;
  //   img: any;
};

const Card: FC<Props> = ({ title }) => {
  return (
    <div className={s.card}>
      <p>{title}</p>
      {/* <img src={img} /> */}
    </div>
  );
};

export default Card;
