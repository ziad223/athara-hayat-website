import { Calendar, Stethoscope, Briefcase, ShoppingBag } from "lucide-react";

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const features = [
    {
      icon: Calendar,
      title: isAr ? "إدارة الحجوزات" : "Booking Management",
      description: isAr
        ? "نظام ذكي لإدارة المواعيد وتقليل أوقات الانتظار مع تذكيرات تلقائية للمرضى."
        : "Smart appointment management system to reduce wait times with automated patient reminders.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: ShoppingBag,
      title: isAr ? "السوق الداخلي" : "Internal Marketplace",
      description: isAr
        ? "تصفح واشترِ المنتجات الطبية من موردين معتمدين. اشتراك خاص للراغبين في عرض منتجاتهم."
        : "Browse and buy medical products from verified suppliers. Special subscription for those who want to list products.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: Briefcase,
      title: isAr ? "منصة الوظائف" : "Jobs Platform",
      description: isAr
        ? "انشر فرص العمل واستقطب أفضل الكفاءات الطبية. قسم مخصص للبحث عن عمل للأطباء."
        : "Post job opportunities and attract top medical talent. Dedicated job search section for doctors.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Stethoscope,
      title: isAr ? "الملف المهني للطبيب" : "Doctor's Professional Profile",
      description: isAr
        ? "سيرة ذاتية رقمية متكاملة لكل طبيب لعرض خبراته ومؤهلاته وتلقي عروض التوظيف."
        : "A complete digital CV for each doctor to showcase expertise, qualifications, and receive job offers.",
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isAr ? "مميزات النظام الشامل" : "Features of the Comprehensive System"}
        </h1>
        <p className="text-xl text-gray-600">
          {isAr
            ? "اكتشف كيف يمكن لأثارة حياة تحويل عيادتك إلى مؤسسة رقمية متطورة"
            : "Discover how Athary Hayat can transform your clinic into an advanced digital institution"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex gap-6 items-start bg-card text-card-foreground p-8 rounded-3xl shadow-sm border border-border">
              <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${feature.bgColor} ${feature.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
