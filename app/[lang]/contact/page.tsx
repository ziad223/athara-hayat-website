export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {isAr ? "تواصل معنا" : "Contact Us"}
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
        {isAr 
          ? "فريق الدعم الخاص بنا متاح على مدار الساعة للإجابة على استفساراتك وتقديم المساعدة اللازمة."
          : "Our support team is available 24/7 to answer your inquiries and provide necessary assistance."}
      </p>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-premium w-full max-w-2xl text-left rtl:text-right">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{isAr ? "الاسم الكامل" : "Full Name"}</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{isAr ? "البريد الإلكتروني" : "Email Address"}</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{isAr ? "الموضوع" : "Subject"}</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{isAr ? "الرسالة" : "Message"}</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {isAr ? "إرسال الرسالة" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
