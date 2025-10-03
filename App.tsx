import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Approach } from "./components/Approach";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <Services />
            <Testimonials />
            <Approach />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}