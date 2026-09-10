import Link from "next/link";

export default async function JobsPage({
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
          {isAr ? "منصة الوظائف الطبية" : "Medical Jobs Platform"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "اكتشف أفضل الفرص الوظيفية في القطاع الطبي أو ابحث عن الكفاءات المناسبة لعيادتك."
            : "Discover the best career opportunities in the medical sector or find the right talent for your clinic."}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {[1, 2, 3, 4].map((job) => (
          <div key={job} className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 font-bold text-xl shrink-0">
                {isAr ? "ع" : "C"}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {isAr ? "طبيب أسنان عام" : "General Dentist"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {isAr ? "عيادات الابتسامة المشرقة - دبي" : "Bright Smile Clinics - Dubai"}
                </p>
                <div className="flex gap-3 text-sm">
                  <span className="bg-secondary px-3 py-1 rounded-full text-muted-foreground">{isAr ? "دوام كامل" : "Full Time"}</span>
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-emerald-700 dark:text-emerald-400">{isAr ? "خبرة 3 سنوات" : "3 Years Exp."}</span>
                </div>
              </div>
            </div>
            
            <Link href={`/${lang}/jobs/1`} className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-center">
              {isAr ? "تقدم الآن" : "Apply Now"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
