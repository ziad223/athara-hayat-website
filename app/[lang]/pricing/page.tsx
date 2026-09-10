import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const tiers = [
    {
      name: isAr ? "الأساسية" : "Basic",
      price: isAr ? "مجاناً" : "Free",
      description: isAr ? "للعيادات الناشئة" : "For startup clinics",
      features: isAr 
        ? ["نظام حجوزات أساسي", "بروفايل للعيادة", "مقال واحد شهرياً"]
        : ["Basic booking system", "Clinic profile", "1 article per month"],
      button: isAr ? "ابدأ مجاناً" : "Start for Free"
    },
    {
      name: isAr ? "الاحترافية" : "Professional",
      price: "$99/mo",
      description: isAr ? "للعيادات المتنامية" : "For growing clinics",
      features: isAr 
        ? ["نظام حجوزات متقدم", "بروفايل مميز", "5 مقالات شهرياً", "دعم فني أولوية"]
        : ["Advanced booking", "Premium profile", "5 articles per month", "Priority support"],
      button: isAr ? "اشترك الآن" : "Subscribe Now",
      popular: true
    },
    {
      name: isAr ? "المؤسسات" : "Enterprise",
      price: isAr ? "تواصل معنا" : "Contact Us",
      description: isAr ? "للمستشفيات والمراكز الكبرى" : "For hospitals and large centers",
      features: isAr 
        ? ["إدارة فروع متعددة", "مقالات غير محدودة", "نظام توظيف متكامل", "مدير حساب مخصص"]
        : ["Multi-branch management", "Unlimited articles", "Integrated recruitment", "Dedicated account manager"],
      button: isAr ? "تواصل مع المبيعات" : "Contact Sales"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isAr ? "باقات تناسب حجم عيادتك" : "Plans that fit your clinic's size"}
        </h1>
        <p className="text-xl text-gray-600">
          {isAr 
            ? "اختر الباقة المناسبة لاحتياجاتك وانطلق في إدارة عيادتك بكفاءة"
            : "Choose the right plan for your needs and start managing your clinic efficiently"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`bg-card text-card-foreground rounded-3xl p-8 border ${tier.popular ? 'border-primary shadow-xl scale-105 relative' : 'border-border shadow-sm'}`}
          >
            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                {isAr ? "الأكثر طلباً" : "Most Popular"}
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href={`/${lang}/register?plan=${tier.name === 'Basic' || tier.name === 'الأساسية' ? 'basic' : tier.name === 'Professional' || tier.name === 'الاحترافية' ? 'pro' : 'enterprise'}`} className={`block text-center w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
              {tier.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
