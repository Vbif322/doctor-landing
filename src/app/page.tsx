import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Contacts from "./components/Contacts/Contacts";

export default function Home() {
  return (
    <main style={{ maxWidth: "1508px", flex: 1, padding: "16px" }}>
      <Contacts />
      <Banner />
      <div
        style={{
          marginTop: "28px",
          padding: "0 20px",
          display: "flex",
          gap: "36px",
        }}
      >
        <Card title="О враче" />
        <Card title="Образование" />
        <Card title="Специализация" />
        <Card title="Стоимость услуг" />
        <Card title="Отзывы" />
      </div>
    </main>
  );
}
