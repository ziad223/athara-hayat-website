export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isAr ? "احجز عرضاً تجريبياً مجانياً" : "Book a Free Demo"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {isAr
            ? "اكتشف كيف يمكن لأثارة حياة تحويل عيادتك إلى مؤسسة رقمية متطورة. املأ النموذج وسنتواصل معك فوراً."
            : "Discover how Athary Hayat can transform your clinic. Fill out the form and we will contact you immediately."}
        </p>
      </div>

      <div className="w-full max-w-xl bg-card text-card-foreground p-8 md:p-10 rounded-3xl border border-border shadow-premium">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">{isAr ? "اسم العيادة أو المركز الطبي" : "Clinic / Medical Center Name"}</label>
            <input type="text" className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={isAr ? "أدخل اسم العيادة" : "Enter clinic name"} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">{isAr ? "اسم المسؤول" : "Manager Name"}</label>
            <input type="text" className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">{isAr ? "رقم الهاتف" : "Phone Number"}</label>
              <input type="tel" className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" dir="ltr" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{isAr ? "البريد الإلكتروني" : "Email Address"}</label>
              <input type="email" className="w-full px-4 py-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">{isAr ? "التخصص الرئيسي للعيادة" : "Main Specialty"}</label>
            <select className="w-full px-4 py-4 pr-10 rtl:pr-4 rtl:pl-10 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:left_1rem_center] rtl:bg-[position:left_1rem_center] ltr:bg-[position:right_1rem_center]">
              <option>{isAr ? "طب الأسنان" : "Dentistry"}</option>
              <option>{isAr ? "الجلدية والتجميل" : "Dermatology & Aesthetics"}</option>
              <option>{isAr ? "العيون" : "Ophthalmology"}</option>
              <option>{isAr ? "أخرى" : "Other"}</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all mt-4">
            {isAr ? "تأكيد الحجز" : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
