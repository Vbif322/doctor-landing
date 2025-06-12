import Card from "../../Card/Card";
import { cardsImg1, cardsImg2, cardsImg3, cardsImg4, cardsImg5 } from '@/app/assets/img'
import s from "./style.module.css";

const Cards = () => {
  return (
    <div className={s.cards}>
      <Card title="О враче" img={cardsImg1} alt='Стетоскоп в руке' />
      <Card title="Образование" img={cardsImg2} alt='Академка' />
      <Card title="Специализация" img={cardsImg3} alt='Планшет с ручкой' />
      <Card title="Стоимость услуг" img={cardsImg4} alt='Свинья-копилка' />
      <Card title="Отзывы" img={cardsImg5} alt='Руки' />
    </div>
  );
};

export default Cards;