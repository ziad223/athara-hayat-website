export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          {isAr ? "المدونة والمقالات الطبية" : "Medical Blog & Articles"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "اكتشف أحدث المقالات والنصائح الطبية من نخبة الأطباء والعيادات."
            : "Discover the latest medical articles and tips from top doctors and clinics."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div key={post} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-premium transition-shadow flex flex-col">
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              <span className="text-slate-400 font-medium">{isAr ? "صورة المقال" : "Article Image"}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-sm font-bold text-primary mb-3">
                {isAr ? "طب الأسنان" : "Dentistry"}
              </span>
              <h3 className="text-xl font-bold mb-3 text-slate-800 hover:text-primary cursor-pointer transition-colors line-clamp-2">
                {isAr ? "أهمية الفحص الدوري للأسنان وكيف تحافظ على ابتسامتك" : "The importance of regular dental checkups and how to keep your smile"}
              </h3>
              <p className="text-slate-500 mb-6 line-clamp-3 flex-1">
                {isAr ? "يعتبر الفحص الدوري للأسنان من أهم الإجراءات الوقائية التي يجب على الجميع الالتزام بها لتجنب العديد من المشاكل الصحية المعقدة." : "Regular dental checkups are among the most important preventive measures everyone should adhere to to avoid many complex health problems."}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{isAr ? "د. أحمد محمد" : "Dr. Ahmed Mohamed"}</div>
                  <div className="text-xs text-slate-500">12 Oct 2023</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
