import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ArtForSDGs from "./pages/ArtForSDGs";
import Festival from "./pages/Festival";
import WorldTour from "./pages/WorldTour";
import YouthCommunity from "./pages/YouthCommunity";
import Recognition from "./pages/Recognition";
import FutureInitiatives from "./pages/FutureInitiatives";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnMount />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/art-for-sdgs" element={<ArtForSDGs />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/world-tour" element={<WorldTour />} />
          <Route path="/youth-community" element={<YouthCommunity />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/future-initiatives" element={<FutureInitiatives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
