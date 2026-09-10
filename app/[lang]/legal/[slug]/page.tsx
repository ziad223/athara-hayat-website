export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isAr = lang === "ar";

  const getTitle = (s: string) => {
    switch (s) {
      case "privacy": return isAr ? "سياسة الخصوصية" : "Privacy Policy";
      case "terms": return isAr ? "شروط الاستخدام" : "Terms of Use";
      case "data": return isAr ? "سياسة البيانات والتقييمات" : "Data & Reviews Policy";
      default: return isAr ? "صفحة قانونية" : "Legal Page";
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh]">
      <div className="max-w-4xl mx-auto bg-card text-card-foreground p-8 md:p-16 rounded-3xl border border-border shadow-sm">
        <h1 className="text-4xl font-bold mb-8 border-b pb-6">
          {getTitle(slug)}
        </h1>
        
        <div className="prose prose-slate max-w-none leading-loose">
          <p>
            {isAr 
              ? "نحن في أثارى حياة نولي أهمية قصوى لخصوصية مستخدمينا وحماية بياناتهم. توضح هذه الصفحة الشروط والسياسات التي تحكم استخدامك لمنصتنا المتكاملة." 
              : "At Athary Hayat, we prioritize the privacy of our users and the protection of their data. This page outlines the terms and policies governing your use of our integrated platform."}
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isAr ? "1. جمع واستخدام البيانات" : "1. Data Collection and Use"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isAr 
              ? "نحن نجمع البيانات الضرورية فقط لتقديم أفضل خدمة ممكنة للعيادات، الأطباء، والموردين. يشمل ذلك معلومات الحساب، تقييمات المرضى، وسجلات الحجوزات، ويتم تشفيرها وحفظها بأمان تام." 
              : "We collect only the necessary data to provide the best possible service for clinics, doctors, and suppliers. This includes account information, patient reviews, and booking records, which are fully encrypted and securely stored."}
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isAr ? "2. حقوق الملكية والمسؤولية" : "2. Intellectual Property and Liability"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {isAr 
              ? "جميع المحتويات المنشورة على المنصة، بما في ذلك المقالات التسويقية والتقييمات، تخضع للمراجعة. العيادة مسؤولة تماماً عن المحتوى الطبي الذي تنشره من خلال اشتراكها." 
              : "All content published on the platform, including marketing articles and reviews, is subject to review. The clinic is entirely responsible for the medical content it publishes through its subscription."}
          </p>

          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm">
            {isAr ? "آخر تحديث:" : "Last updated:"} {new Date().toLocaleDateString(isAr ? 'ar-AE' : 'en-US')}
          </div>
        </div>
      </div>
    </div>
  );
}
