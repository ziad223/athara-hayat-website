import RegisterClient from "./RegisterClient";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-card text-card-foreground rounded-3xl overflow-hidden shadow-premium border border-border">
        <div className="p-12 bg-gradient-to-br from-primary to-blue-600 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            {isAr ? "انضم إلى أثارة حياة" : "Join Athara Hayat"}
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            {isAr 
              ? "المنصة الطبية المتكاملة الأولى. سواء كنت طبيباً، عيادة، أو مورداً، لدينا الأدوات لمساعدتك على النمو."
              : "The first integrated medical platform. Whether you are a doctor, clinic, or supplier, we have the tools to help you grow."}
          </p>
          <ul className="space-y-4 text-white/90">
            <li className="flex items-center gap-2">✨ {isAr ? "وصول لآلاف المرضى" : "Reach thousands of patients"}</li>
            <li className="flex items-center gap-2">✨ {isAr ? "نظام إدارة ذكي" : "Smart management system"}</li>
            <li className="flex items-center gap-2">✨ {isAr ? "سوق منتجات متكامل" : "Integrated products marketplace"}</li>
          </ul>
        </div>

        <div className="p-8 md:p-12">
          <RegisterClient lang={lang} />
        </div>
      </div>
    </div>
  );
}
