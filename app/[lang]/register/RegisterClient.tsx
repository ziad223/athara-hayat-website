"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function RegisterClient({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mb-4">
          ✓
        </div>
        <h3 className="text-3xl font-bold text-foreground">
          {isAr ? "تم التسجيل بنجاح!" : "Registration Successful!"}
        </h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-sm">
          {isAr 
            ? "لقد تم استلام طلبك بنجاح. سيقوم فريقنا بمراجعته والتواصل معك قريباً لتفعيل الحساب." 
            : "Your request has been received successfully. Our team will review it and contact you soon to activate your account."}
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setSelectedType(null);
          }}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-xl font-bold transition-all"
        >
          {isAr ? "العودة للرئيسية" : "Back to Home"}
        </button>
      </div>
    );
  }

  if (selectedType) {
    return (
      <div className="flex flex-col h-full justify-center space-y-6">
        <button 
          onClick={() => setSelectedType(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors self-start mb-2 font-medium"
        >
          <ArrowIcon className="w-4 h-4" />
          {isAr ? "العودة للخيارات" : "Back to options"}
        </button>
        
        <h3 className="text-2xl font-bold text-center">
          {isAr ? "أكمل بيانات التسجيل" : "Complete Registration"}
        </h3>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold mb-2">
              {selectedType === 'clinic' ? (isAr ? "اسم العيادة" : "Clinic Name") : 
               selectedType === 'supplier' ? (isAr ? "اسم الشركة" : "Company Name") : 
               (isAr ? "الاسم الكامل" : "Full Name")}
            </label>
            <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">{isAr ? "البريد الإلكتروني" : "Email Address"}</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">{isAr ? "كلمة المرور" : "Password"}</label>
            <input type="password" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
          </div>
          
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all mt-4">
            {isAr ? "إنشاء حساب" : "Create Account"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center">
      <h3 className="text-2xl font-bold mb-8 text-center text-card-foreground">
        {isAr ? "اختر نوع الحساب" : "Choose Account Type"}
      </h3>
      
      <div className="space-y-4">
        <button 
          onClick={() => setSelectedType('clinic')}
          className="w-full p-4 rounded-2xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 text-right rtl:text-right ltr:text-left"
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0">🏥</div>
          <div>
            <div className="font-bold text-lg text-card-foreground">{isAr ? "حساب عيادة / مركز طبي" : "Clinic / Medical Center"}</div>
            <div className="text-sm text-muted-foreground">{isAr ? "إدارة الحجوزات والمقالات" : "Manage bookings & articles"}</div>
          </div>
        </button>
        
        <button 
          onClick={() => setSelectedType('doctor')}
          className="w-full p-4 rounded-2xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 text-right rtl:text-right ltr:text-left"
        >
          <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center text-xl shrink-0">👨‍⚕️</div>
          <div>
            <div className="font-bold text-lg text-card-foreground">{isAr ? "حساب طبيب" : "Doctor"}</div>
            <div className="text-sm text-muted-foreground">{isAr ? "الملف المهني والوظائف" : "Professional profile & jobs"}</div>
          </div>
        </button>
        
        <button 
          onClick={() => setSelectedType('supplier')}
          className="w-full p-4 rounded-2xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 text-right rtl:text-right ltr:text-left"
        >
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl shrink-0">📦</div>
          <div>
            <div className="font-bold text-lg text-card-foreground">{isAr ? "حساب مورد طبي" : "Medical Supplier"}</div>
            <div className="text-sm text-muted-foreground">{isAr ? "بيع المنتجات للعيادات" : "Sell products to clinics"}</div>
          </div>
        </button>
      </div>
    </div>
  );
}
