import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Calculator from "./components/Calculator";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Advantages />
        <Calculator />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
