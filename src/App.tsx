
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Redirect to Streamlit for detection pages */}
          <Route path="/detect-text" element={<RedirectToStreamlit url="https://your-streamlit-text-detection.com" />} />
          <Route path="/detect-video" element={<RedirectToStreamlit url="https://your-streamlit-video-detection.com" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Helper component to redirect to external Streamlit URLs
function RedirectToStreamlit({ url }: { url: string }) {
  window.location.href = url;
  return null;
}

export default App;
