import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Star, CalendarDays, Award, Clock } from "lucide-react";

export default async function DirectoryProfilePage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  // Mock Data for the profile (In a real app, this would be fetched using the ID)
  const profile = {
    name: isAr ? "د. أحمد محمد" : "Dr. Ahmed Mohamed",
    specialty: isAr ? "استشاري طب وجراحة العيون" : "Consultant Ophthalmologist",
    location: isAr ? "دبي، مستشفى النور" : "Dubai, Al Noor Hospital",
    rating: 4.9,
    reviewsCount: 120,
    experience: isAr ? "+15 سنة خبرة" : "+15 Years Experience",
    bio: isAr 
      ? "استشاري أول في جراحة العيون وتصحيح الإبصار. حاصل على البورد الأمريكي وزمالة كلية الجراحين الملكية. متخصص في عمليات الليزك والمياه البيضاء وتجميل الجفون."
      : "Senior Consultant in Ophthalmology and Refractive Surgery. American Board Certified and Fellow of the Royal College of Surgeons. Specializes in LASIK, Cataract, and Oculoplastics.",
    education: isAr ? ["البورد الأمريكي في طب العيون", "زمالة كلية الجراحين الملكية", "بكالوريوس الطب والجراحة"] : ["American Board of Ophthalmology", "Fellowship of the Royal College of Surgeons", "MBBS"],
    availability: isAr ? "متاح اليوم" : "Available Today",
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
          
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card text-card-foreground p-8 md:p-10 rounded-3xl border border-border shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-full border-4 border-background shadow-lg flex items-center justify-center overflow-hidden">
                   <span className="text-muted-foreground font-medium">{isAr ? "صورة" : "Image"}</span>
                </div>
                
                <div className="text-center md:text-left rtl:md:text-right flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-extrabold mb-2">{profile.name}</h1>
                      <p className="text-xl text-primary font-semibold mb-2">{profile.specialty}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-xl mt-4 md:mt-0 font-bold">
                      <Star className="w-5 h-5 fill-current" />
                      <span>{profile.rating}</span>
                      <span className="text-sm opacity-80">({profile.reviewsCount} {isAr ? "تقييم" : "reviews"})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
                    <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-lg">
                      <MapPin className="w-4 h-4" /> {profile.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-lg">
                      <Award className="w-4 h-4" /> {profile.experience}
                    </span>
                    <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 px-3 py-1.5 rounded-lg">
                      <Clock className="w-4 h-4" /> {profile.availability}
                    </span>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-border" />
              
              <h3 className="text-2xl font-bold mb-4">{isAr ? "النبذة التعريفية" : "Biography"}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {profile.bio}
              </p>

              <h3 className="text-2xl font-bold mb-4">{isAr ? "الشهادات العلمية" : "Education & Certificates"}</h3>
              <ul className="space-y-3">
                {profile.education.map((edu, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Reviews Section Mockup */}
            <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">{isAr ? "آراء المرضى" : "Patient Reviews"}</h3>
              <div className="space-y-6">
                {[1, 2].map((review) => (
                  <div key={review} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-bold">{isAr ? "مريض مجهول" : "Anonymous Patient"}</div>
                      <div className="flex text-amber-500 gap-1">
                        <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {isAr ? "طبيب ممتاز ومستمع جيد، قام بتشخيص حالتي بكل دقة. العيادة نظيفة والانتظار لم يكن طويلاً." : "Excellent doctor and good listener, diagnosed my condition accurately. The clinic is clean and wait time was short."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card text-card-foreground p-6 rounded-3xl border border-border shadow-premium sticky top-28">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-primary" />
                {isAr ? "حجز موعد" : "Book Appointment"}
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">{isAr ? "اختر اليوم" : "Select Day"}</label>
                  <select className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:left_1rem_center] rtl:bg-[position:left_1rem_center] ltr:bg-[position:right_1rem_center] pr-10 rtl:pr-4 rtl:pl-10">
                    <option>{isAr ? "اليوم" : "Today"}</option>
                    <option>{isAr ? "غداً" : "Tomorrow"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{isAr ? "اختر الوقت" : "Select Time"}</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-primary text-primary-foreground text-center py-2 rounded-lg cursor-pointer font-bold border border-primary">10:00 AM</div>
                    <div className="bg-background text-foreground text-center py-2 rounded-lg cursor-pointer border border-border hover:border-primary transition-colors">11:30 AM</div>
                    <div className="bg-background text-foreground text-center py-2 rounded-lg cursor-pointer border border-border hover:border-primary transition-colors">02:00 PM</div>
                    <div className="bg-background text-foreground text-center py-2 rounded-lg cursor-pointer border border-border hover:border-primary transition-colors">04:15 PM</div>
                  </div>
                </div>
                
                <hr className="my-6 border-border" />
                
                <div className="space-y-3">
                  <input type="text" placeholder={isAr ? "الاسم الكامل" : "Full Name"} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder={isAr ? "رقم الهاتف" : "Phone Number"} className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                </div>
                
                <button type="button" className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-4">
                  {isAr ? "تأكيد الحجز" : "Confirm Booking"}
                </button>
              </form>
              <p className="text-center text-xs text-muted-foreground mt-4">
                {isAr ? "لن يتم تحصيل أي رسوم الآن. الدفع في العيادة." : "No fees will be collected now. Pay at the clinic."}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
