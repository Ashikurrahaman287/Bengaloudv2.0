import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import logo from "@assets/ChatGPT_Image_Apr_16,_2026,_02_00_16_AM_1776283223448.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const { cartCount, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/collections", type: "page" },
    { name: "About", href: "/about", type: "page" },
    { name: "Journal", href: "/journal", type: "page" },
    { name: "Products", href: "/products", type: "page" },
    { name: "FAQ", href: "/faq", type: "page" },
    { name: "Contact", href: "/about#contact", type: "page" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link href="/">
          <img
            src={logo}
            alt="Bengal Oud"
            className="h-10 md:h-12 w-auto cursor-pointer object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) =>
            link.type === "page" ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium text-foreground/65 hover:text-primary transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium text-foreground/65 hover:text-primary transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            )
          )}

          {/* Cart Icon */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-foreground/65 hover:text-primary transition-colors p-1"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="https://wa.me/8801568983888"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] bg-primary text-primary-foreground px-5 py-2.5 uppercase tracking-[0.2em] hover:bg-primary/85 transition-colors"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile: Cart + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-foreground/80 hover:text-primary transition-colors p-1"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="text-foreground/80 hover:text-primary p-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-7">
              {navLinks.map((link) =>
                link.type === "page" ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
              <a
                href="https://wa.me/8801568983888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-primary text-primary-foreground px-6 py-3.5 uppercase tracking-[0.2em] text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
