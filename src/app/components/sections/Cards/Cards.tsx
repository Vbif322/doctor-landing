import { cardsData } from "@/app/utils/constants";
import Card from "../../Card/Card";
import s from "./style.module.css";

const Cards = () => {
  return (
    <nav className={s.cards}>
      {cardsData.map((card) => (
        <Card
          link={card.link}
          key={card.title}
          title={card.title}
          img={card.img}
          alt={card.alt}
        />
      ))}
    </nav>
  );
};

export default Cards;