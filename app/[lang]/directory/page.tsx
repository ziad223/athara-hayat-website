import Link from "next/link";

export default async function DirectoryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isAr ? "دليل الأطباء والعيادات" : "Doctors & Clinics Directory"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "ابحث عن أفضل الأطباء والعيادات المتخصصة واحجز موعدك بسهولة."
            : "Find the best specialized doctors and clinics and book your appointment easily."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm hover:shadow-premium transition-shadow">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 mx-auto flex items-center justify-center">
            <span className="text-muted-foreground">{isAr ? "صورة" : "Image"}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center text-card-foreground">
            {isAr ? "د. أحمد محمد" : "Dr. Ahmed Mohamed"}
          </h3>
          <p className="text-primary text-center text-sm font-semibold mb-4">
            {isAr ? "استشاري طب وجراحة العيون" : "Consultant Ophthalmologist"}
          </p>
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-1">
            <span className="text-sm">📍 {isAr ? "دبي" : "Dubai"}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-sm text-yellow-500">⭐ 4.9 <span className="text-muted-foreground">(120 {isAr ? "تقييم" : "reviews"})</span></span>
          </p>
          <Link href={`/${lang}/directory/1`} className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:bg-primary/90 transition-colors">
            {isAr ? "عرض الملف وحجز موعد" : "View Profile & Book"}
          </Link>
        </div>

        <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm hover:shadow-premium transition-shadow">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 mx-auto flex items-center justify-center">
            <span className="text-muted-foreground">{isAr ? "شعار" : "Logo"}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center text-card-foreground">
            {isAr ? "عيادات الابتسامة" : "Smile Clinics"}
          </h3>
          <p className="text-primary text-center text-sm font-semibold mb-4">
            {isAr ? "مركز طب أسنان متكامل" : "Integrated Dental Center"}
          </p>
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-1">
            <span className="text-sm">📍 {isAr ? "أبوظبي" : "Abu Dhabi"}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-sm text-yellow-500">⭐ 4.8 <span className="text-muted-foreground">(340 {isAr ? "تقييم" : "reviews"})</span></span>
          </p>
          <Link href={`/${lang}/directory/clinic/1`} className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:bg-primary/90 transition-colors">
            {isAr ? "عرض العيادة" : "View Clinic"}
          </Link>
        </div>

        <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm hover:shadow-premium transition-shadow">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 mx-auto flex items-center justify-center">
            <span className="text-muted-foreground">{isAr ? "صورة" : "Image"}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center text-card-foreground">
            {isAr ? "د. سارة خليل" : "Dr. Sara Khalil"}
          </h3>
          <p className="text-primary text-center text-sm font-semibold mb-4">
            {isAr ? "أخصائية أمراض جلدية" : "Dermatologist"}
          </p>
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-1">
            <span className="text-sm">📍 {isAr ? "الشارقة" : "Sharjah"}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-sm text-yellow-500">⭐ 5.0 <span className="text-muted-foreground">(89 {isAr ? "تقييم" : "reviews"})</span></span>
          </p>
          <Link href={`/${lang}/directory/1`} className="block w-full text-center bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:bg-primary/90 transition-colors">
            {isAr ? "عرض الملف وحجز موعد" : "View Profile & Book"}
          </Link>
        </div>
      </div>
    </div>
  );
}
