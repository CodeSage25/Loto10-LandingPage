import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommentCaMarche from "@/components/CommentCaMarche";
import TableauGains from "@/components/TableauGains";
import LotoBonus from "@/components/LotoBonus";
import MoyensPaiement from "@/components/MoyensPaiement";
import FAQ from "@/components/FAQ";
import JeuResponsable from "@/components/JeuResponsable";
import SuivezNous from "@/components/SuivezNous";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CommentCaMarche />
        <TableauGains />
        <LotoBonus />
        <MoyensPaiement />
        <FAQ />
        <JeuResponsable />
        <SuivezNous />
      </main>
      <Footer />
    </>
  );
}
