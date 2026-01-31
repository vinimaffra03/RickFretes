import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import ComoFunciona from "@/components/ComoFunciona";
import Calculadora from "@/components/Calculadora";
import Diferenciais from "@/components/Diferenciais";
import Depoimentos from "@/components/Depoimentos";
import Localizacao from "@/components/Localizacao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <ComoFunciona />
        <Calculadora />
        <Diferenciais />
        <Depoimentos />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
