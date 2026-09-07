import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AirbnbButton } from "./AirbnbButton";
import { site } from "@/content/site";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/appartement", label: "L'appartement" },
  { to: "/residence", label: "La résidence" },
  { to: "/alentours", label: "Les alentours" },
  { to: "/contact", label: "Réservation" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:py-4">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-lg leading-tight sm:text-xl">
            {site.nom}
          </span>
          <span className="block truncate text-[0.62rem] tracking-[0.2em] uppercase text-muted-foreground">
            Escale près de Honfleur
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {liens.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <AirbnbButton className="min-h-10 px-5 py-2 text-[0.72rem]" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-sand lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="reveal border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {liens.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="border-b border-border/60 py-4 font-display text-2xl last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="py-5">
              <AirbnbButton className="w-full" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
