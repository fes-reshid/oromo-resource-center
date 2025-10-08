import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Enrollment from "./pages/Enrollment";
import FuneralServices from "./pages/FuneralServices";
import VenueBooking from "./pages/VenueBooking";
import Membership from "./pages/Membership";
import CommunityServices from "./pages/CommunityServices";
import Volunteer from "./pages/Volunteer";
import Gallery from "./pages/Gallery";
import ServicesPage from "./pages/ServicesPage";
import School from "./pages/School";
import SpiritualServices from "./pages/SpiritualServices";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/funeral-services" element={<FuneralServices />} />
            <Route path="/venue-booking" element={<VenueBooking />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/community-services" element={<CommunityServices />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/school" element={<School />} />
            <Route path="/spiritual-services" element={<SpiritualServices />} />
            <Route path="/events" element={<Events />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
