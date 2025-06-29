import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
