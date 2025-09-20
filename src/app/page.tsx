import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import AboutDoctor from "./components/sections/AboutDoctor/AboutDoctor";
import Cards from "./components/sections/Cards/Cards";
import Education from "./components/sections/Education/Education";
import Services from "./components/sections/Services/Services";
import Specialization from "./components/sections/Specialization/Specialization";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Contacts />
      <main style={{ maxWidth: "1508px", flex: 1, padding: "16px" }}>
        <Banner />
        <Cards />
        <AboutDoctor />
        <Education />
        <Specialization />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
