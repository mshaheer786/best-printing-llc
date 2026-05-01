import { Link } from "react-router-dom";
import { Printer } from "lucide-react";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group" aria-label="Best Printing LLC home">
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-gold shadow-gold transition-transform group-hover:scale-105">
      <Printer className="h-5 w-5 text-ink" strokeWidth={2.5} />
    </div>
    <div className="flex flex-col leading-none">
      <span className={`font-display text-base font-extrabold tracking-tight ${light ? "text-cream" : "text-ink"}`}>
        BEST PRINTING
      </span>
      <span className="text-[10px] font-semibold tracking-[0.2em] text-gold">LLC · EST. 1999</span>
    </div>
  </Link>
);
