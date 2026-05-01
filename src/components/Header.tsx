import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card border-b border-border" : "bg-background"
      }`}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                } after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:bg-gold after:transition-transform after:duration-300 ${
                  isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="hero" size="default" className="ml-4">
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </nav>
        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-tight flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium ${
                    isActive ? "bg-secondary text-ink" : "text-muted-foreground hover:bg-secondary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
