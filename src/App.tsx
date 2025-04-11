
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductInsscrubAI from "./pages/ProductInsscrubAI";
import ProductHealthOCR from "./pages/ProductHealthOCR";
import ProductInfoMate from "./pages/ProductInfoMate";
import ProductClaimProcessing from "./pages/ProductClaimProcessing";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/insscrub-ai" element={<ProductInsscrubAI />} />
            <Route path="/products/healthocr" element={<ProductHealthOCR />} />
            <Route path="/products/infomate" element={<ProductInfoMate />} />
            <Route path="/products/claimflow-pro" element={<ProductClaimProcessing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
