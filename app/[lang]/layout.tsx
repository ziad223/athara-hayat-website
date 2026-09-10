import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr 
      ? "أثارة حياة | النظام الطبي المتكامل لإدارة العيادات والمستشفيات" 
      : "Athara Hayat | Integrated Medical System for Clinics & Hospitals",
    description: isAr 
      ? "أثارة حياة هي المنصة الطبية الشاملة الأولى في الإمارات والخليج. إدارة الحجوزات الطبية للعيادات، التسويق الطبي، توظيف الأطباء، وسوق المنتجات والمعدات الطبية المعتمدة."
      : "Athara Hayat is the leading comprehensive medical platform in the UAE & Gulf. Clinic booking management, medical marketing, doctor recruitment, and medical equipment marketplace.",
    keywords: isAr 
      ? ["إدارة عيادات", "برنامج عيادات", "نظام طبي متكامل", "حجوزات طبية", "معدات طبية الإمارات", "توظيف أطباء السعودية", "نظام مستشفيات الخليج", "تسويق طبي", "أثارة حياة", "Athara Hayat", "دليل الأطباء"]
      : ["Clinic Management Software", "Medical System UAE", "Doctor Appointments", "Gulf Medical Equipment", "Healthcare Jobs Middle East", "Medical Marketing", "Athara Hayat"],
    authors: [{ name: "Athara Hayat Team", url: "https://atharahayat.com" }],
    creator: "Athara Hayat",
    publisher: "Athara Hayat",
    metadataBase: new URL("https://atharahayat.com"),
    alternates: {
      languages: {
        'ar': '/ar',
        'en': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_AE" : "en_AE",
      url: "https://atharahayat.com",
      title: isAr 
        ? "أثارة حياة - النظام الطبي الأقوى في الإمارات والوطن العربي" 
        : "Athara Hayat - The Most Powerful Medical System in the UAE",
      description: isAr 
        ? "ابدأ رحلة التحول الرقمي لعيادتك مع أثارة حياة. نوفر لك أدوات إدارة المواعيد، الوصول لآلاف المرضى، وشراء المعدات الطبية بأفضل الأسعار المتاحة."
        : "Start your clinic's digital transformation with Athara Hayat. Tools for appointment management, reaching thousands of patients, and buying medical equipment.",
      siteName: "أثارة حياة - Athara Hayat",
      images: [
        {
          url: "/logo.jpg",
          width: 1200,
          height: 630,
          alt: "Athara Hayat Logo",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr ? "أثارة حياة | ثورة الإدارة الطبية" : "Athara Hayat | Medical Management Revolution",
      description: isAr 
        ? "اكتشف كيف يغير نظام أثارة حياة طرق إدارة العيادات والمستشفيات في الإمارات والشرق الأوسط." 
        : "Discover how Athara Hayat is changing clinic and hospital management in the UAE and Middle East.",
      images: ["/logo.jpg"],
    },
    icons: {
      icon: [
        { url: "/logo.jpg?v=2", type: "image/jpeg" },
      ],
      apple: [
        { url: "/logo.jpg?v=2", type: "image/jpeg" }
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${cairo.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        
        {/* Subtle Background Pattern (Dots) */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
          <div className="absolute h-full w-full bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70"></div>
          
          <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"></div>
        </div>

        <Navbar lang={lang} />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
