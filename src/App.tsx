import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar, Footer } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CustomCursor } from "./components/CustomCursor";
import { AIAssistant } from "./components/AIAssistant";


// Lazy load pages for performance
const HomePage = lazy(() => import("./pages/Home").then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import("./pages/Services").then(m => ({ default: m.ServicesPage })));
const ProductsPage = lazy(() => import("./pages/Products").then(m => ({ default: m.ProductsPage })));
const BookingPage = lazy(() => import("./pages/Booking").then(m => ({ default: m.BookingPage })));
const AdminDashboard = lazy(() => import("./pages/Admin").then(m => ({ default: m.AdminDashboard })));
const IndustryPage = lazy(() => import("./pages/Industry").then(m => ({ default: m.IndustryPage })));
const BlogPage = lazy(() => import("./pages/Blog").then(m => ({ default: m.BlogPage })));
const BlogPost = lazy(() => import("./pages/Blog").then(m => ({ default: m.BlogPost })));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<div className="min-h-screen bg-bg-navy" />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/book-demo" element={<BookingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/industries/:industryId" element={<IndustryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
    onAnimationComplete={() => document.body.style.overflow = 'auto'}
    className="fixed inset-0 z-[100] bg-bg-navy flex items-center justify-center pointer-events-none"
  >
    <div className="text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden mb-8 mx-auto shadow-2xl shadow-white/10"
      >
       <img src="/fenx.png" alt="FenX AI Logo" className="w-full h-full object-cover" />
      </motion.div>
      <div className="w-48 h-1 bg-white/5 mx-auto rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full bg-white"
        />
      </div>
    </div>
  </motion.div>
);

export default function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="relative min-h-screen">
          <LoadingScreen />
          <Navbar />
          
          <AnimatedRoutes />

          <Footer />

          <AIAssistant />
        </div>
      </Router>
    </HelmetProvider>
  );
}
