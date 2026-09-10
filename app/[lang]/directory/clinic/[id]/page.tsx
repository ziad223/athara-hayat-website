import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Star, CalendarDays, Award, Clock, Phone, Building2 } from "lucide-react";

export default async function ClinicProfilePage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  // Mock Data for the clinic
  const clinic = {
    name: isAr ? "عيادات الابتسامة المشرقة" : "Bright Smile Clinics",
    specialty: isAr ? "مركز طب أسنان متكامل" : "Integrated Dental Center",
    location: isAr ? "أبوظبي، شارع المطار" : "Abu Dhabi, Airport Road",
    rating: 4.8,
    reviewsCount: 340,
    established: isAr ? "تأسست 2010" : "Established 2010",
    bio: isAr 
      ? "مركز طبي متكامل يضم نخبة من أفضل أطباء الأسنان في مختلف التخصصات. نستخدم أحدث التقنيات الطبية لتقديم رعاية صحية متميزة في بيئة مريحة وآمنة لجميع أفراد الأسرة."
      : "An integrated medical center featuring top dentists in various specialties. We use the latest medical technologies to provide outstanding healthcare in a comfortable and safe environment for the whole family.",
    services: isAr ? ["زراعة الأسنان", "تقويم الأسنان", "تجميل وابتسامة هوليود", "طب أسنان الأطفال"] : ["Dental Implants", "Orthodontics", "Cosmetic & Hollywood Smile", "Pediatric Dentistry"],
    workingHours: isAr ? "9 ص - 9 م (يومياً)" : "9 AM - 9 PM (Daily)",
    phone: "+971 2 123 4567"
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="mb-8 flex items-center gap-4 text-sm">
          <Link href={`/${lang}/directory`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <ArrowIcon className="w-4 h-4" />
            {isAr ? "العودة للدليل" : "Back to Directory"}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Clinic Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card text-card-foreground p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-2xl border-4 border-background shadow-lg flex items-center justify-center overflow-hidden">
                   <span className="text-muted-foreground font-medium">{isAr ? "شعار العيادة" : "Clinic Logo"}</span>
                </div>
                
                <div className="text-center md:text-left rtl:md:text-right flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-extrabold mb-2">{clinic.name}</h1>
                      <p className="text-xl text-primary font-semibold mb-2">{clinic.specialty}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-xl mt-4 md:mt-0 font-bold">
                      <Star className="w-5 h-5 fill-current" />
                      <span>{clinic.rating}</span>
                      <span className="text-sm opacity-80">({clinic.reviewsCount} {isAr ? "تقييم" : "reviews"})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
                    <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-lg">
                      <MapPin className="w-4 h-4" /> {clinic.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-lg">
                      <Building2 className="w-4 h-4" /> {clinic.established}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-lg">
                      <Clock className="w-4 h-4" /> {clinic.workingHours}
                    </span>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-border" />
              
              <h3 className="text-2xl font-bold mb-4">{isAr ? "عن العيادة" : "About Clinic"}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {clinic.bio}
              </p>

              <h3 className="text-2xl font-bold mb-4">{isAr ? "الخدمات الطبية" : "Medical Services"}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinic.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-slate-50 dark:bg-slate-800/50">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-semibold">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Section Mockup */}
            <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">{isAr ? "معرض الصور" : "Gallery"}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{isAr ? "صورة" : "Image"} {img}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card text-card-foreground p-6 rounded-3xl border border-border shadow-premium sticky top-28">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                {isAr ? "التواصل والحجز" : "Contact & Booking"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">{isAr ? "رقم الهاتف المجاني" : "Toll Free Number"}</div>
                  <a href={`tel:${clinic.phone}`} className="text-2xl font-bold text-primary hover:underline" dir="ltr">{clinic.phone}</a>
                </div>

                <hr className="border-border" />

                <div>
                  <label className="block text-sm font-semibold mb-2">{isAr ? "أرسل رسالة سريعة" : "Send a quick message"}</label>
                  <form className="space-y-3">
                    <input type="text" placeholder={isAr ? "الاسم" : "Name"} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                    <input type="tel" placeholder={isAr ? "رقم الهاتف" : "Phone"} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                    <textarea placeholder={isAr ? "كيف يمكننا مساعدتك؟" : "How can we help you?"} rows={3} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"></textarea>
                    
                    <button type="button" className="w-full bg-primary text-primary-foreground rounded-xl py-3 font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2">
                      {isAr ? "إرسال الطلب" : "Send Request"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
