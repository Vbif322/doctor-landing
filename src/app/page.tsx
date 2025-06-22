import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import AboutDoctor from "./components/sections/AboutDoctor/AboutDoctor";
import Cards from "./components/sections/Cards/Cards";
import Education from "./components/sections/Education/Education";

export default function Home() {
  return (
    <main style={{ maxWidth: "1508px", flex: 1, padding: "16px" }}>
      <Contacts />
      <Banner />
      <Cards />
      <AboutDoctor />
      <Education />
    </main>
  );
}
