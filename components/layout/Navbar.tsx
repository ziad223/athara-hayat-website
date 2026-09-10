"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ArrowRight, ArrowLeft } from "lucide-react";

export default function Navbar({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: isAr ? "المميزات" : "Features", href: `/${lang}/features` },
    { name: isAr ? "دليل الأطباء" : "Directory", href: `/${lang}/directory` },
    { name: isAr ? "السوق الطبي" : "Marketplace", href: `/${lang}/marketplace` },
    { name: isAr ? "الوظائف" : "Jobs", href: `/${lang}/jobs` },
    { name: isAr ? "الباقات" : "Pricing", href: `/${lang}/pricing` },
  ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  // Get equivalent path in other language
  const otherLang = isAr ? "en" : "ar";
  const otherLangPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${lang}`} className="relative z-50 flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-primary/20 border-2 border-white/10 group-hover:scale-105 transition-transform flex items-center justify-center bg-white">
              <img src="/logo.jpg" alt="Athara Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight hidden sm:block">
              {isAr ? (
                <>
                  <span className="text-primary">أثارة</span>
                  <span className="text-foreground mr-1.5 ltr:ml-1.5 ltr:mr-0">حياة</span>
                </>
              ) : (
                <>
                  <span className="text-primary">Athara</span>
                  <span className="text-foreground ml-1.5 rtl:mr-1.5 rtl:ml-0">Hayat</span>
                </>
              )}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href={otherLangPath}
              className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
            >
              <Globe className="w-4 h-4" />
              <span>{isAr ? "English" : "العربية"}</span>
            </Link>

            <div className="h-6 w-px bg-border mx-2"></div>
            
            <Link 
              href={`/${lang}/register`}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors px-4 py-2"
            >
              {isAr ? "دخول / تسجيل" : "Login / Register"}
            </Link>
            
            <Link 
              href={`/${lang}/demo`}
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-all hover:shadow-premium hover:-translate-y-0.5"
            >
              {isAr ? "احجز عرضاً" : "Book Demo"}
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl lg:hidden flex flex-col p-6 gap-2 max-h-[calc(100vh-80px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-lg font-bold py-4 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ArrowIcon className="w-4 h-4 opacity-50" />
              </Link>
            ))}
            
            <Link 
              href={otherLangPath}
              className="flex items-center justify-between py-4 border-b border-border/50 text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 opacity-70" />
                <span>{isAr ? "Switch to English" : "التبديل للعربية"}</span>
              </div>
            </Link>

            <div className="flex flex-col gap-3 mt-6 pb-6">
              <Link 
                href={`/${lang}/register`}
                className="w-full py-4 text-center border-2 border-primary/20 rounded-xl font-bold text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isAr ? "دخول / تسجيل" : "Login / Register"}
              </Link>
              <Link 
                href={`/${lang}/demo`}
                className="w-full py-4 text-center bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isAr ? "احجز عرض تجريبي مجاني" : "Book Free Demo"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
