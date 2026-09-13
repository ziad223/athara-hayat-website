import Hero from "../../components/home/Hero";
import DHACompliance from "../../components/home/DHACompliance";
import { Calendar, Stethoscope, Briefcase, ShoppingBag, ArrowRight, ArrowLeft, CheckCircle2, Users, Building, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const features = [
    {
      icon: Calendar,
      title: isAr ? "إدارة الحجوزات بذكاء" : "Smart Booking Management",
      description: isAr 
        ? "نظام متكامل لإدارة المواعيد وتقليل أوقات الانتظار، مع إرسال تذكيرات تلقائية عبر الواتساب للمرضى." 
        : "Integrated appointment management to reduce wait times, with automated WhatsApp patient reminders.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-200 dark:border-blue-900/50"
    },
    {
      icon: ShoppingBag,
      title: isAr ? "السوق الطبي الداخلي" : "Internal Medical Marketplace",
      description: isAr 
        ? "تصفح واشترِ المنتجات والأجهزة الطبية من موردين معتمدين بأفضل الأسعار. أو انضم كمورد لعرض منتجاتك." 
        : "Buy medical equipment from verified suppliers at best prices. Or join as a supplier to list products.",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      border: "border-emerald-200 dark:border-emerald-900/50"
    },
    {
      icon: Briefcase,
      title: isAr ? "منصة وظائف متخصصة" : "Specialized Jobs Platform",
      description: isAr 
        ? "انشر فرص العمل واستقطب أفضل الكفاءات، مع قسم مخصص للأطباء للبحث عن فرص عمل جديدة بسهولة." 
        : "Post jobs and attract top talent, with a dedicated section for doctors to find new opportunities easily.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      border: "border-purple-200 dark:border-purple-900/50"
    },
    {
      icon: Stethoscope,
      title: isAr ? "دليل الأطباء والتقييمات" : "Doctors Directory & Reviews",
      description: isAr 
        ? "سيرة ذاتية رقمية لكل طبيب ومقالات تسويقية لرفع التقييمات وجلب المزيد من الزوار لعيادتك." 
        : "Digital CV for each doctor and marketing articles to boost reviews and bring more visitors to your clinic.",
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
      border: "border-teal-200 dark:border-teal-900/50"
    }
  ];

  const stats = [
    { value: "500+", label: isAr ? "عيادة مسجلة" : "Registered Clinics", icon: Building },
    { value: "2M+", label: isAr ? "حجز مكتمل" : "Completed Bookings", icon: CheckCircle2 },
    { value: "10k+", label: isAr ? "طبيب متخصص" : "Specialized Doctors", icon: Users },
    { value: "99%", label: isAr ? "نسبة الرضا" : "Satisfaction Rate", icon: ShieldCheck },
  ];

  return (
    <div className="flex flex-col relative z-0">
      {/* 1. Hero Section */}
      <Hero lang={lang} />

      {/* 2. Trust & Stats Section */}
      <section className="py-12 border-y border-border bg-slate-50 dark:bg-slate-900/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <Icon className="w-8 h-8 text-primary mb-3 opacity-80" />
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Features Section */}
      <section className="py-24 relative z-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              {isAr ? "نظام بيئي متكامل لنجاح عيادتك" : "An integrated ecosystem for your clinic's success"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {isAr 
                ? "أثارة حياة ليس مجرد نظام حجوزات، بل منصة تسويقية، إدارية، وتجارية تخدم الأطباء والموردين والمرضى."
                : "Athara Hayat is not just a booking system, but a marketing, administrative, and commercial platform serving doctors, suppliers, and patients."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`flex flex-col sm:flex-row gap-6 items-start bg-card p-8 rounded-3xl shadow-sm border ${feature.border} hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group`}>
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${feature.bgColor} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {features.length > 4 && (
            <div className="mt-16 text-center">
              <Link 
                href={`/${lang}/features`}
                className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:gap-4 transition-all text-lg"
              >
                {isAr ? "اكتشف جميع المميزات التقنية" : "Discover All Technical Features"}
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. Ecosystem & How it works */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {isAr ? "كيف يربط نظام أثارة حياة القطاع الطبي؟" : "How does Athara Hayat connect the medical sector?"}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {isAr 
                  ? "قمنا بتصميم منصة مركزية تسمح للعيادات بإدارة مرضاها، وللأطباء ببناء سمعتهم، وللموردين ببيع أجهزتهم مباشرة دون وسطاء."
                  : "We designed a centralized platform allowing clinics to manage patients, doctors to build reputations, and suppliers to sell equipment directly without middlemen."}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 border border-primary/30">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{isAr ? "العيادات تسجل في النظام" : "Clinics register in the system"}</h4>
                    <p className="text-slate-400">{isAr ? "لإدارة الحجوزات، كتابة المقالات، وطلب الموظفين والأجهزة." : "To manage bookings, write articles, and request staff/equipment."}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 border border-primary/30">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{isAr ? "الأطباء يبنون ملفاتهم" : "Doctors build their profiles"}</h4>
                    <p className="text-slate-400">{isAr ? "كسيرة ذاتية لتلقي التقييمات، نشر المقالات، والتقديم على الوظائف." : "As a CV to receive reviews, publish articles, and apply for jobs."}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 border border-primary/30">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{isAr ? "الموردون يعرضون منتجاتهم" : "Suppliers showcase products"}</h4>
                    <p className="text-slate-400">{isAr ? "باشتراك مدفوع للوصول المباشر إلى آلاف العيادات المستهدفة." : "With a paid subscription for direct access to thousands of targeted clinics."}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              {/* Mockup or Illustration Placeholder */}
              <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 z-10 backdrop-blur-md">
                  <img src="/logo.jpg" alt="Athara Logo" className="w-24 h-24 rounded-full object-cover shadow-2xl" />
                </div>
                {/* Orbiting nodes abstract visualization */}
                <div className="absolute w-[80%] h-[80%] border border-slate-700/50 rounded-full animate-[spin_30s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-blue-500/50">🏥</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50">👨‍⚕️</div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/50">📦</div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-amber-500/50">👥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Mobile App Teaser */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-card to-background border-y border-border">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center">
              <div className="w-[280px] h-[580px] bg-slate-950 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                <div className="h-7 bg-slate-900 w-[45%] mx-auto rounded-b-3xl absolute top-0 left-0 right-0 z-10"></div>
                
                <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-6 pt-10 pb-8 rounded-b-[2rem] shadow-sm relative z-0">
                  <div className="font-bold text-xl mb-1">{isAr ? "أثارة حياة" : "Athara Hayat"}</div>
                  <div className="text-sm opacity-90">{isAr ? "مرحباً د. أحمد" : "Welcome Dr. Ahmed"}</div>
                </div>
                
                <div className="flex-1 bg-slate-50 dark:bg-slate-950 p-5 flex flex-col gap-5 -mt-4 relative z-10 rounded-t-[2rem]">
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-semibold text-muted-foreground">{isAr ? "مواعيد اليوم" : "Today's Appts"}</div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">📅</div>
                    </div>
                    <div className="text-3xl font-extrabold text-foreground">12</div>
                  </div>
                  
                  <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 p-5 space-y-4">
                    <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-full mb-2"></div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-border/30">
                        <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                          <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {isAr ? "متاح الآن: تطبيق الجوال" : "Available Now: Mobile App"}
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
                {isAr ? "عيادتك في جيبك. أدر أعمالك بحرية تامة." : "Your clinic in your pocket. Manage freely."}
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                {isAr 
                  ? "قمنا بتطوير تطبيق جوال احترافي يضع قوة أثارة حياة بين يديك. تابع مواعيدك، راقب إيراداتك، وتواصل مع مرضاك أو مورديك بلمسة واحدة، أينما كنت."
                  : "We developed a professional mobile app putting the power of Athara Hayat in your hands. Track appts, monitor revenue, and contact patients or suppliers with one tap, anywhere."}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg">
                  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-medium opacity-80">{isAr ? "تحميل من" : "Download on the"}</span>
                    <span>App Store</span>
                  </div>
                </button>
                <button className="bg-card text-foreground border-2 border-border px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:border-primary/50 hover:scale-105 transition-all shadow-sm">
                  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-emerald-500"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-medium text-muted-foreground">{isAr ? "متوفر على" : "GET IT ON"}</span>
                    <span>Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {isAr ? "شركاء النجاح يتحدثون" : "Success Partners Speak"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isAr ? "آراء نخبة من الأطباء ومديري العيادات الذين يستخدمون النظام يومياً." : "Opinions of top doctors and clinic managers who use the system daily."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: isAr ? "د. محمد سمير" : "Dr. Mohamed Samir", role: isAr ? "مدير مركز طبي" : "Medical Center Manager", text: isAr ? "نظام أثارة حياة وفر علينا 40% من وقت الإدارة اليومي. واجهة سهلة ودعم فني مذهل." : "Athara Hayat saved us 40% of daily management time. Easy interface and amazing support." },
              { name: isAr ? "م. سارة أحمد" : "Eng. Sara Ahmed", role: isAr ? "مورد معدات طبية" : "Medical Equipment Supplier", text: isAr ? "من خلال السوق الطبي الداخلي، تضاعفت مبيعاتنا للعيادات خلال 3 أشهر فقط من الاشتراك." : "Through the internal marketplace, our sales to clinics doubled in just 3 months of subscribing." },
              { name: isAr ? "د. خالد حسن" : "Dr. Khaled Hassan", role: isAr ? "طبيب أسنان" : "Dentist", text: isAr ? "صفحتي الشخصية على النظام ومقالاتي جلبت لي مرضى جدد بشكل أسبوعي. أداة تسويق ممتازة!" : "My personal page on the system and articles brought me new patients weekly. Excellent marketing tool!" }
            ].map((testi, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col">
                <div className="flex text-amber-400 mb-6 gap-1">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-card-foreground text-lg mb-8 italic flex-1">&quot;{testi.text}&quot;</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                  <div>
                    <div className="font-bold text-foreground">{testi.name}</div>
                    <div className="text-sm text-muted-foreground">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Pricing Teaser */}
      <section className="py-24 bg-background relative z-10 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
              {isAr ? "باقات استثمارية واضحة" : "Clear Investment Plans"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              {isAr ? "خطط تسعير صُممت لتنمو مع عيادتك، بدون رسوم خفية وبكل شفافية." : "Pricing plans designed to grow with your clinic, with zero hidden fees."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 text-left rtl:text-right items-center">
            
            {/* Basic Plan */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-2xl mb-2 text-foreground">{isAr ? "الأساسية" : "Basic"}</h3>
              <p className="text-sm text-muted-foreground mb-6">{isAr ? "للاطباء والعيادات الناشئة" : "For starting doctors & clinics"}</p>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  {isAr ? "إدارة 100 موعد شهرياً" : "Manage 100 appts/mo"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  {isAr ? "ملف شخصي وتسويقي" : "Marketing Profile"}
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center text-xs">×</div>
                  {isAr ? "لا يدعم التسوق الطبي" : "No Medical Shopping"}
                </li>
              </ul>
              <Link href={`/${lang}/register`} className="block text-center w-full py-3 rounded-xl border-2 border-border font-bold hover:border-primary hover:text-primary transition-colors">
                {isAr ? "ابدأ مجاناً" : "Start Free"}
              </Link>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-primary to-blue-700 text-white p-10 rounded-[2.5rem] shadow-2xl scale-100 md:scale-110 z-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-extrabold shadow-lg uppercase tracking-wider">
                {isAr ? "الأكثر طلباً ومبيعاً" : "Most Popular"}
              </div>
              <h3 className="font-bold text-2xl mb-2">{isAr ? "الاحترافية" : "Pro"}</h3>
              <p className="text-sm text-blue-100 mb-6">{isAr ? "للعيادات والمراكز المتطورة" : "For growing clinics & centers"}</p>
              <ul className="space-y-4 mb-10 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
                  {isAr ? "مواعيد ورسائل غير محدودة" : "Unlimited appts & msgs"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
                  {isAr ? "نظام الواتساب الذكي للرد" : "Smart WhatsApp replies"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
                  {isAr ? "الوصول لسوق الموردين" : "Access supplier market"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✓</div>
                  {isAr ? "صلاحيات متعددة للموظفين" : "Multi-staff roles"}
                </li>
              </ul>
              <Link href={`/${lang}/register`} className="block text-center w-full py-4 rounded-xl bg-white text-primary font-bold text-lg hover:shadow-lg transition-all hover:-translate-y-1">
                {isAr ? "اشترك الآن" : "Subscribe Now"}
              </Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-2xl mb-2 text-foreground">{isAr ? "المؤسسات" : "Enterprise"}</h3>
              <p className="text-sm text-muted-foreground mb-6">{isAr ? "للمستشفيات متعددة الفروع" : "For multi-branch hospitals"}</p>
              <ul className="space-y-4 text-muted-foreground mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  {isAr ? "إدارة فروع غير محدودة" : "Unlimited branches"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  {isAr ? "نظام متكامل لشؤون الموظفين" : "Full HR System"}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  {isAr ? "خادم خاص ونطاق مخصص" : "Private server & domain"}
                </li>
              </ul>
              <Link href={`/${lang}/demo`} className="block text-center w-full py-3 rounded-xl border-2 border-border font-bold hover:border-primary hover:text-primary transition-colors">
                {isAr ? "تواصل معنا" : "Contact Us"}
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href={`/${lang}/pricing`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-bold transition-colors">
              {isAr ? "مقارنة جميع الميزات بالتفصيل" : "Compare all features in detail"} <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DHA Compliance Section */}
      <DHACompliance lang={lang} />

      {/* 7. Massive Final CTA */}
      <section className="py-24 bg-background relative z-10 px-4">
        <div className="container mx-auto max-w-6xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 leading-tight">
            {isAr ? "ابدأ رحلة التحول الرقمي لعيادتك" : "Start your clinic's digital transformation journey"}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto relative z-10 font-medium">
            {isAr 
              ? "سواء كنت تبحث عن إدارة متكاملة، توظيف كفاءات، أو شراء معدات. كل ما تحتاجه في مكان واحد."
              : "Whether you're looking for full management, hiring talent, or buying equipment. Everything in one place."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link 
              href={`/${lang}/register`}
              className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              {isAr ? "اشترك وابدأ الآن" : "Subscribe and Start Now"}
              <ArrowIcon className="w-6 h-6" />
            </Link>
            <Link 
              href={`/${lang}/demo`}
              className="w-full sm:w-auto bg-primary/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-primary/40 transition-all flex items-center justify-center"
            >
              {isAr ? "حجز عرض تجريبي" : "Book a Demo"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
