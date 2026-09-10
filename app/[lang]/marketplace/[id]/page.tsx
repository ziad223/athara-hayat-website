import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingCart, ShieldCheck, Truck, Star } from "lucide-react";

export default async function ProductPage({
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
          <Link href={`/${lang}/marketplace`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <ArrowIcon className="w-4 h-4" />
            {isAr ? "العودة للسوق الطبي" : "Back to Marketplace"}
          </Link>
        </div>

        <div className="bg-card text-card-foreground rounded-3xl border border-border shadow-sm overflow-hidden p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Image Area */}
            <div className="space-y-4">
              <div className="aspect-square bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-border relative overflow-hidden">
                 <span className="text-muted-foreground font-medium text-lg">{isAr ? "صورة الجهاز الأساسية" : "Main Device Image"}</span>
                 <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                   {isAr ? "جديد" : "New"}
                 </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} className={`aspect-square rounded-xl flex items-center justify-center border cursor-pointer transition-colors ${img === 1 ? 'border-primary bg-primary/5' : 'border-border bg-slate-50 dark:bg-slate-800 hover:border-primary/50'}`}>
                    <span className="text-xs text-muted-foreground">{img}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Area */}
            <div className="flex flex-col justify-center">
              <div className="mb-2 text-primary font-bold text-sm bg-primary/10 w-fit px-3 py-1 rounded-full">
                {isAr ? "أدوات جراحية متقدمة" : "Advanced Surgical Tools"}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                {isAr ? "جهاز جراحة الليزر المتطور برو" : "Advanced Pro Laser Surgery Device"}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-amber-500 gap-1">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current opacity-50" />
                </div>
                <span className="text-muted-foreground text-sm">(4.2 - 18 {isAr ? "تقييم" : "reviews"})</span>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {isAr 
                  ? "يعد هذا الجهاز الأحدث في مجال جراحة الليزر، حيث يتميز بدقة متناهية وسرعة في الأداء مما يقلل من وقت العملية ويسرع من شفاء المريض. مزود بشاشة لمس ذكية ونظام تبريد تلقائي."
                  : "This device is the latest in laser surgery, featuring pinpoint accuracy and speed, reducing surgery time and speeding up patient recovery. Equipped with a smart touch screen and automatic cooling system."}
              </p>
              
              <div className="text-4xl font-extrabold text-foreground mb-8">
                $4,999 <span className="text-lg text-muted-foreground font-medium">{isAr ? "غير شامل الضريبة" : "Excl. VAT"}</span>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span>{isAr ? "ضمان شامل لمدة عامين" : "2-year comprehensive warranty"}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Truck className="w-5 h-5 text-emerald-500" />
                  <span>{isAr ? "شحن مجاني وتركيب للعيادات" : "Free shipping and installation for clinics"}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  {isAr ? "إضافة للسلة" : "Add to Cart"}
                </button>
                <button className="flex-1 bg-secondary text-foreground py-4 rounded-xl font-bold text-lg hover:bg-secondary/80 transition-all border border-border">
                  {isAr ? "التواصل مع المورد" : "Contact Supplier"}
                </button>
              </div>

            </div>
          </div>
          
          <hr className="my-12 border-border" />
          
          {/* Tabs/More Details */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{isAr ? "المواصفات التقنية" : "Technical Specifications"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-muted-foreground">
              <div className="flex justify-between border-b border-border py-3">
                <span className="font-semibold">{isAr ? "الطاقة" : "Power"}</span>
                <span>220V - 50Hz</span>
              </div>
              <div className="flex justify-between border-b border-border py-3">
                <span className="font-semibold">{isAr ? "الوزن" : "Weight"}</span>
                <span>45 kg</span>
              </div>
              <div className="flex justify-between border-b border-border py-3">
                <span className="font-semibold">{isAr ? "بلد الصنع" : "Origin"}</span>
                <span>{isAr ? "ألمانيا" : "Germany"}</span>
              </div>
              <div className="flex justify-between border-b border-border py-3">
                <span className="font-semibold">{isAr ? "التوافق" : "Compatibility"}</span>
                <span>ISO 13485</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
