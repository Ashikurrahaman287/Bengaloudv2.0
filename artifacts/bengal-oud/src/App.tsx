import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/ui/cart-drawer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Collections from "@/pages/collections";
import About from "@/pages/about";
import Journal from "@/pages/journal";
import JournalArticle from "@/pages/journal-article";
import PrivacyPolicy from "@/pages/privacy-policy";
import ReturnPolicy from "@/pages/return-policy";
import FAQ from "@/pages/faq";
import ProductMoniya from "@/pages/product-moniya";
import ProductQutub from "@/pages/product-qutub";
import ProductDehnalSylhet from "@/pages/product-dehnal-sylhet";
import ProductBongossam from "@/pages/product-bongossam";
import Products from "@/pages/products";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/collections" component={Collections} />
      <Route path="/about" component={About} />
      <Route path="/journal" component={Journal} />
      <Route path="/journal/:slug" component={JournalArticle} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/return-policy" component={ReturnPolicy} />
      <Route path="/faq" component={FAQ} />
      <Route path="/products/moniya" component={ProductMoniya} />
      <Route path="/products/qutub" component={ProductQutub} />
      <Route path="/products/dehnal-oud-sylhet" component={ProductDehnalSylhet} />
      <Route path="/products/bongossam" component={ProductBongossam} />
      <Route path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "") }>
            <ScrollToTop />
            <Router />
            <CartDrawer />
          </WouterRouter>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
