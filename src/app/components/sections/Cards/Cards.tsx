import { cardsData } from "@/app/utils/constants";
import Card from "../../Card/Card";
import s from "./style.module.css";

const Cards = () => {
  return (
    <div className={s.cards}>
      {cardsData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          img={card.img}
          alt={card.alt}
        />
      ))}
    </div>
  );
};

export default Cards;