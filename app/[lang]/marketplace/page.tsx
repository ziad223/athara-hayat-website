import Link from "next/link";

export default async function MarketplacePage({
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
          {isAr ? "السوق الطبي المتكامل" : "Integrated Medical Marketplace"}
        </h1>
        <p className="text-xl text-slate-600">
          {isAr 
            ? "تصفح واشترِ المنتجات والأجهزة الطبية من موردين معتمدين بأفضل الأسعار."
            : "Browse and buy medical products and equipment from verified suppliers at the best prices."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border shadow-sm h-fit">
          <h3 className="font-bold text-lg mb-4">{isAr ? "التصنيفات" : "Categories"}</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> {isAr ? "أجهزة عيادات" : "Clinic Equipment"}</label></li>
            <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> {isAr ? "مستلزمات طبية" : "Medical Supplies"}</label></li>
            <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> {isAr ? "أدوات جراحية" : "Surgical Tools"}</label></li>
            <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> {isAr ? "أثاث طبي" : "Medical Furniture"}</label></li>
          </ul>
        </div>

        {/* Product Grid Mockup */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link href={`/${lang}/marketplace/1`} key={item} className="bg-card text-card-foreground rounded-2xl border border-border shadow-sm overflow-hidden group hover:shadow-premium transition-all block">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                <div className="text-sm text-muted-foreground mb-3">{isAr ? "أدوات جراحية" : "Surgical Tools"}</div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {isAr ? `جهاز طبي متطور ${item}` : `Advanced Medical Device ${item}`}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {isAr ? "مورد معتمد" : "Verified Supplier"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-primary">$1,200</span>
                  <div className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    {isAr ? "التفاصيل" : "Details"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
