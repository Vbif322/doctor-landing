import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import Cards from "./components/sections/Cards/Cards";

export default function Home() {
  return (
    <main style={{ maxWidth: "1508px", flex: 1, padding: "16px" }}>
      <Contacts />
      <Banner />
      <Cards />
    </main>
  );
}
