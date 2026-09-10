import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, MapPin, Briefcase, Clock, DollarSign, Send } from "lucide-react";

export default async function JobPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-4 text-sm">
          <Link href={`/${lang}/jobs`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <ArrowIcon className="w-4 h-4" />
            {isAr ? "العودة للوظائف" : "Back to Jobs"}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Job Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card text-card-foreground p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 font-bold text-3xl shrink-0">
                  {isAr ? "ع" : "C"}
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold mb-2">
                    {isAr ? "طبيب أسنان عام" : "General Dentist"}
                  </h1>
                  <p className="text-xl text-primary font-medium">
                    {isAr ? "عيادات الابتسامة المشرقة" : "Bright Smile Clinics"}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm font-medium mb-10">
                <span className="flex items-center gap-2 bg-secondary text-muted-foreground px-4 py-2 rounded-xl">
                  <MapPin className="w-4 h-4" /> {isAr ? "دبي، الإمارات" : "Dubai, UAE"}
                </span>
                <span className="flex items-center gap-2 bg-secondary text-muted-foreground px-4 py-2 rounded-xl">
                  <Briefcase className="w-4 h-4" /> {isAr ? "خبرة 3 سنوات" : "3 Years Exp."}
                </span>
                <span className="flex items-center gap-2 bg-secondary text-muted-foreground px-4 py-2 rounded-xl">
                  <Clock className="w-4 h-4" /> {isAr ? "دوام كامل" : "Full Time"}
                </span>
                <span className="flex items-center gap-2 bg-secondary text-muted-foreground px-4 py-2 rounded-xl">
                  <DollarSign className="w-4 h-4" /> {isAr ? "15,000 - 20,000 درهم" : "15,000 - 20,000 AED"}
                </span>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">{isAr ? "وصف الوظيفة" : "Job Description"}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {isAr 
                    ? "نحن نبحث عن طبيب أسنان عام متحمس وذو خبرة للانضمام إلى فريقنا الطبي المتميز في عيادات الابتسامة المشرقة بدبي. سيقوم المرشح المثالي بتقديم رعاية أسنان شاملة عالية الجودة للمرضى، بما في ذلك التشخيص والعلاج والوقاية من أمراض الفم والأسنان."
                    : "We are looking for a highly motivated and experienced General Dentist to join our outstanding medical team at Bright Smile Clinics in Dubai. The ideal candidate will provide high-quality comprehensive dental care to patients, including diagnosis, treatment, and prevention of oral diseases."}
                </p>

                <h3 className="text-xl font-bold mb-4">{isAr ? "المسؤوليات الرئيسية" : "Key Responsibilities"}</h3>
                <ul className="text-muted-foreground space-y-2 mb-8 list-disc pl-5 rtl:pl-0 rtl:pr-5">
                  <li>{isAr ? "فحص وتشخيص صحة فم وأسنان المرضى." : "Examine and diagnose patients' oral and dental health."}</li>
                  <li>{isAr ? "إجراء علاجات الأسنان الروتينية والمعقدة." : "Perform routine and complex dental treatments."}</li>
                  <li>{isAr ? "تثقيف المرضى حول العناية بصحة الفم." : "Educate patients on oral health care."}</li>
                  <li>{isAr ? "الاحتفاظ بسجلات دقيقة لجميع المرضى." : "Maintain accurate records for all patients."}</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">{isAr ? "المتطلبات المؤهلات" : "Requirements & Qualifications"}</h3>
                <ul className="text-muted-foreground space-y-2 mb-8 list-disc pl-5 rtl:pl-0 rtl:pr-5">
                  <li>{isAr ? "درجة البكالوريوس في طب وجراحة الفم والأسنان (BDS/DDS)." : "Bachelor's degree in Dental Surgery (BDS/DDS)."}</li>
                  <li>{isAr ? "ترخيص مزاولة المهنة ساري المفعول في دولة الإمارات (DHA)." : "Valid practice license in the UAE (DHA)."}</li>
                  <li>{isAr ? "خبرة لا تقل عن 3 سنوات في نفس المجال." : "Minimum 3 years of experience in the field."}</li>
                  <li>{isAr ? "مهارات تواصل ممتازة." : "Excellent communication skills."}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Apply Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card text-card-foreground p-6 rounded-3xl border border-border shadow-premium sticky top-28">
              <h3 className="text-xl font-bold mb-2">{isAr ? "مهتم بهذه الوظيفة؟" : "Interested in this job?"}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {isAr ? "قدم الآن مباشرة للعيادة وارفق سيرتك الذاتية." : "Apply now directly to the clinic and attach your CV."}
              </p>
              
              <button className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-4">
                <Send className="w-5 h-5" />
                {isAr ? "التقدم للوظيفة الآن" : "Apply for Job Now"}
              </button>
              
              <button className="w-full bg-transparent text-primary border border-primary rounded-xl py-4 font-bold text-lg hover:bg-primary/5 transition-colors">
                {isAr ? "حفظ لوقت لاحق" : "Save for Later"}
              </button>
              
              <hr className="my-6 border-border" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-bold">{isAr ? "حول العيادة" : "About Clinic"}</div>
                  <Link href={`/${lang}/directory`} className="text-sm text-primary hover:underline">
                    {isAr ? "عرض ملف العيادة" : "View Clinic Profile"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
