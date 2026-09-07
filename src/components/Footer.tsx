import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { AirbnbButton } from "./AirbnbButton";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{site.nom}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Escale près de Honfleur — {site.ville}, {site.region}.
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Un pied-à-terre confortable pour découvrir Honfleur et la côte normande.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <span className="eyebrow">Le site</span>
          <Link to="/appartement" className="text-muted-foreground hover:text-foreground">
            L'appartement
          </Link>
          <Link to="/residence" className="text-muted-foreground hover:text-foreground">
            La résidence
          </Link>
          <Link to="/alentours" className="text-muted-foreground hover:text-foreground">
            Les alentours
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">
            Réservation
          </Link>
        </nav>

        <div>
          <span className="eyebrow">Réservation</span>
          <p className="mt-3 mb-5 text-sm text-muted-foreground">
            Les réservations se font directement via Airbnb.
          </p>
          <AirbnbButton variant="outline" />
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {site.nomComplet}.
      </div>
    </footer>
  );
}
