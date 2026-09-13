"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Clock, Award, Lock, HeartPulse, Stethoscope } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function DHACompliance({ lang }: { lang: string }) {
  const isAr = lang === "ar";

  const checkpoints = [
    {
      icon: ShieldCheck,
      title: isAr ? "حوكمة بيانات المرضى" : "Patient Data Governance",
      desc: isAr
        ? "تخزين البيانات محلياً وفق لوائح حماية بيانات المرضى DHA"
        : "Local data storage compliant with DHA patient data protection regulations",
      color: "from-sky-500 to-cyan-400",
      light: "bg-sky-50 border-sky-200 dark:bg-sky-950/40 dark:border-sky-800",
      iconBg: "bg-sky-100 dark:bg-sky-900/50",
      iconColor: "text-sky-600 dark:text-sky-400",
    },
    {
      icon: Lock,
      title: isAr ? "تشفير SSL معتمد" : "Certified SSL Encryption",
      desc: isAr
        ? "طبقات تشفير متقدمة تضمن أمان السجلات الطبية الإلكترونية"
        : "Advanced encryption layers securing all electronic medical records",
      color: "from-emerald-500 to-teal-400",
      light: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: HeartPulse,
      title: isAr ? "تكامل مع السجلات الصحية" : "Health Records Integration",
      desc: isAr
        ? "تكامل كامل مع منظومة السجلات الصحية الإلكترونية بدبي"
        : "Full integration with Dubai's electronic health records system",
      color: "from-rose-500 to-pink-400",
      light: "bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-800",
      iconBg: "bg-rose-100 dark:bg-rose-900/50",
      iconColor: "text-rose-600 dark:text-rose-400",
    },
    {
      icon: Stethoscope,
      title: isAr ? "بروتوكولات سريرية معتمدة" : "Approved Clinical Protocols",
      desc: isAr
        ? "متوافق مع المعايير السريرية والإجراءات المعتمدة من DHA"
        : "Aligned with DHA-approved clinical standards and procedures",
      color: "from-violet-500 to-purple-400",
      light: "bg-violet-50 border-violet-200 dark:bg-violet-950/40 dark:border-violet-800",
      iconBg: "bg-violet-100 dark:bg-violet-900/50",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-28 overflow-hidden bg-background"
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow top-left */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
        {/* Radial glow bottom-right */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,132,199,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-8">
            <BadgeCheck className="w-4 h-4" />
            {isAr ? "الامتثال والترخيص" : "Compliance & Licensing"}
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
            {isAr ? (
              <>
                متوافق مع{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">هيئة الصحة دبي</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full opacity-60" />
                </span>{" "}
                DHA
              </>
            ) : (
              <>
                Fully Compliant with{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">Dubai Health Authority</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full opacity-60" />
                </span>{" "}
                DHA
              </>
            )}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {isAr
              ? "نظامنا مبني وفق أعلى معايير الامتثال الصحي المعتمدة من هيئة الصحة في دبي، ونحن في مرحلة متقدمة للحصول على الترخيص الرسمي قريباً."
              : "Our system is built to the highest health compliance standards approved by Dubai Health Authority, and we are in an advanced stage of obtaining official licensing soon."}
          </p>
        </motion.div>

        {/* ── Coming Soon License Banner ── */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-8 md:p-10 shadow-lg shadow-amber-500/10">
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl shadow-amber-500/30">
                <Clock className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-700 dark:text-amber-400 font-semibold text-xs mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                  {isAr ? "قريباً" : "Coming Soon"}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {isAr
                    ? "ترخيص DHA الرسمي قيد الإنجاز"
                    : "Official DHA License — In Progress"}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {isAr
                    ? "نحن في مرحلة متقدمة من عملية الترخيص الرسمي مع هيئة الصحة دبي. سيُعلن عن اكتمال الترخيص قريباً وسيُضاف شاراته الرسمية إلى المنصة."
                    : "We are in an advanced stage of the official licensing process with Dubai Health Authority. Completion will be announced soon and official badges will be added to the platform."}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Compliance Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
          {checkpoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`group relative p-6 rounded-2xl border ${item.light} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* icon */}
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {/* bottom gradient line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            );
          })}
        </div>

        {/* ── Trust strip ── */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 items-center"
        >
          {[
            { label: isAr ? "ISO 27001" : "ISO 27001", sub: isAr ? "أمن المعلومات" : "Information Security" },
            { label: isAr ? "HL7 FHIR" : "HL7 FHIR", sub: isAr ? "معيار التبادل الصحي" : "Health Data Standard" },
            { label: isAr ? "DHA Ready" : "DHA Ready", sub: isAr ? "متوافق مع هيئة الصحة" : "Authority Compliant" },
            { label: isAr ? "GDPR" : "GDPR", sub: isAr ? "حماية البيانات" : "Data Protection" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground leading-none">{badge.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{badge.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
