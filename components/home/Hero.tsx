"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Hero({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Dots Pattern - Made it more prominent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 dark:opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            {isAr ? "النسخة 2.0 متاحة الآن" : "Version 2.0 is now live"}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            {isAr ? (
              <>
                النظام <span className="text-gradient">الطبي المتكامل</span> لإدارة العيادات
              </>
            ) : (
              <>
                The Integrated <span className="text-gradient">Medical System</span> for Clinics
              </>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            {isAr 
              ? "نظام سحابي متطور يجمع بين إدارة الحجوزات، تسويق الخدمات، سوق المنتجات الطبية، ومنصة توظيف متخصصة." 
              : "An advanced cloud system combining booking management, marketing, a medical product marketplace, and a specialized recruitment platform."}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link 
              href={`/${lang}/demo`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
            >
              {isAr ? "احجز عرض تجريبي مجاني" : "Book Free Demo"}
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link 
              href={`/${lang}/features`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-card border-2 border-border text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:border-primary/50 transition-all"
            >
              {isAr ? "اكتشف النظام" : "Explore System"}
            </Link>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
