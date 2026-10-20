import Header from '@/components/Header';
import SchoolSpotlight from '@/components/SchoolSpotlight';
import Hero from '@/components/Hero';
import UpcomingEvents from '@/components/UpcomingEvents';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <SchoolSpotlight />
        <UpcomingEvents />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
