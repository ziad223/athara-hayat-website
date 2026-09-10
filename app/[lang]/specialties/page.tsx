export default async function SpecialtiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const specialties = [
    { ar: "طب الأسنان", en: "Dentistry", icon: "🦷" },
    { ar: "الجلدية والتجميل", en: "Dermatology", icon: "✨" },
    { ar: "طب العيون", en: "Ophthalmology", icon: "👁️" },
    { ar: "العلاج الطبيعي", en: "Physiotherapy", icon: "🏃" },
    { ar: "الطب الباطني", en: "Internal Medicine", icon: "🩺" },
    { ar: "طب الأطفال", en: "Pediatrics", icon: "👶" }
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          {isAr ? "التخصصات التي يخدمها النظام" : "Supported Specialties"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "نظام أثارى حياة مصمم ليتناسب مع احتياجات كافة التخصصات الطبية بمرونة عالية."
            : "The Athary Hayat system is designed to flexibly meet the needs of all medical specialties."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {specialties.map((spec, index) => (
          <div key={index} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all text-center group cursor-pointer">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{spec.icon}</div>
            <h3 className="text-xl font-bold text-slate-800">{isAr ? spec.ar : spec.en}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
