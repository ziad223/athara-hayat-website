import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-primary/20 flex items-center justify-center bg-white">
                <img src="/logo.jpg" alt="Athara Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                <span className="text-primary">أثارة</span>
                <span className="ml-1">حياة</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              {isAr 
                ? "المنصة الطبية الأكثر تطوراً في الشرق الأوسط. نجمع بين إدارة العيادات، تسويق الخدمات، توظيف الكفاءات، وسوق المنتجات الطبية في نظام بيئي متكامل." 
                : "The most advanced medical platform in the Middle East. Combining clinic management, marketing, recruitment, and products in one ecosystem."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{isAr ? "المنصة" : "Platform"}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href={`/${lang}/features`} className="hover:text-primary transition-colors">{isAr ? "المميزات" : "Features"}</Link></li>
              <li><Link href={`/${lang}/pricing`} className="hover:text-primary transition-colors">{isAr ? "الباقات والأسعار" : "Pricing"}</Link></li>
              <li><Link href={`/${lang}/specialties`} className="hover:text-primary transition-colors">{isAr ? "التخصصات المدعومة" : "Specialties"}</Link></li>
              <li><Link href={`/${lang}/blog`} className="hover:text-primary transition-colors">{isAr ? "المدونة والمقالات" : "Blog"}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{isAr ? "النظام البيئي" : "Ecosystem"}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href={`/${lang}/directory`} className="hover:text-primary transition-colors">{isAr ? "دليل الأطباء" : "Doctors Directory"}</Link></li>
              <li><Link href={`/${lang}/marketplace`} className="hover:text-primary transition-colors">{isAr ? "السوق الطبي" : "Marketplace"}</Link></li>
              <li><Link href={`/${lang}/jobs`} className="hover:text-primary transition-colors">{isAr ? "منصة التوظيف" : "Jobs Platform"}</Link></li>
              <li><Link href={`/${lang}/register`} className="hover:text-primary transition-colors">{isAr ? "انضم إلينا" : "Join Us"}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{isAr ? "تواصل معنا" : "Contact"}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <a href="tel:+97143441549" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span dir="ltr">+971 4 344 1549</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://wa.me/97143441549" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span dir="ltr">+971 4 344 1549</span>
                </a>
              </li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> hello@atharyhayat.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> {isAr ? "دبي، الإمارات العربية المتحدة" : "Dubai, UAE"}</li>
            </ul>
            <div className="mt-6">
              <Link href={`/${lang}/contact`} className="inline-flex border border-slate-700 hover:border-primary text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
                {isAr ? "صفحة الدعم" : "Support Page"}
              </Link>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Athary Hayat. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <Link href={`/${lang}/legal/privacy`} className="hover:text-white transition-colors">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
            <Link href={`/${lang}/legal/terms`} className="hover:text-white transition-colors">{isAr ? "شروط الاستخدام" : "Terms of Use"}</Link>
            <Link href={`/${lang}/legal/data`} className="hover:text-white transition-colors">{isAr ? "سياسة البيانات" : "Data Policy"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
