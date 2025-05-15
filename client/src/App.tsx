import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CustomCursor />
        <HomePage />
        <BackToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
