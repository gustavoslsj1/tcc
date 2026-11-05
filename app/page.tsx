import Header from "@/components/header";
import Hero from "@/components/hero";
import PricingCards from "@/components/pircing-cards";
import InfoSection from "@/components/info";
import ColumnistsSection from "@/components/colun-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Header />
      <Hero />
      <PricingCards />
      <InfoSection />
      <ColumnistsSection />
    </main>
  );
}
