import { ReactNode } from "react";

export const SectionHeading = ({ eyebrow, title, subtitle, center = false, light = false }: {
  eyebrow?: string; title: ReactNode; subtitle?: ReactNode; center?: boolean; light?: boolean;
}) => (
  <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""} mb-4`}>
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">{eyebrow}</span>
        <span className="h-px w-8 bg-gold" />
      </div>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-cream" : "text-ink"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base md:text-lg ${light ? "text-cream/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </div>
);
