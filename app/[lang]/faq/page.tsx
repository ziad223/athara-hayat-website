"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQPage({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: isAr ? "كيف يمكنني تسجيل عيادتي في أثارى حياة؟" : "How can I register my clinic in Athary Hayat?",
      a: isAr ? "يمكنك التسجيل بسهولة من خلال النقر على زر 'انضم إلينا' واختيار نوع الحساب 'عيادة'. ستحتاج فقط لملء بعض البيانات الأساسية للتواصل." : "You can register easily by clicking the 'Join Us' button and selecting 'Clinic' account type. You just need to fill in some basic contact information."
    },
    {
      q: isAr ? "هل يمكنني تجربة النظام قبل الاشتراك؟" : "Can I try the system before subscribing?",
      a: isAr ? "نعم، بالتأكيد! نقدم عرضاً تجريبياً مجانياً لجميع العيادات لتجربة كافة مميزات النظام قبل الالتزام بأي اشتراك." : "Yes, absolutely! We offer a free demo for all clinics to experience all system features before committing to any subscription."
    },
    {
      q: isAr ? "ما هي اللغات التي يدعمها النظام؟" : "What languages does the system support?",
      a: isAr ? "يدعم نظام أثارى حياة اللغتين العربية والإنجليزية بشكل كامل، سواء في الموقع العام أو في لوحة تحكم الإدارة." : "The Athary Hayat system fully supports both Arabic and English languages, both in the public website and the admin dashboard."
    },
    {
      q: isAr ? "هل السوق الطبي متاح للجميع؟" : "Is the medical marketplace available to everyone?",
      a: isAr ? "تصفح السوق وشراء المنتجات متاح لجميع العيادات المسجلة مجاناً. أما بالنسبة لموردي المنتجات، فيتطلب الأمر اشتراكاً خاصاً لعرض منتجاتهم." : "Browsing the marketplace and buying products is available to all registered clinics for free. However, product suppliers require a special subscription to list their products."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "كل ما تحتاج معرفته عن منصة أثارى حياة في مكان واحد."
            : "Everything you need to know about the Athary Hayat platform in one place."}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border border-slate-200 rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'bg-white shadow-premium border-primary/20' : 'bg-slate-50 hover:bg-white'}`}
          >
            <button 
              className="w-full flex items-center justify-between p-6 text-left rtl:text-right"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                {faq.q}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
