import { carte } from "@/content/site";

export function MapEmbed({ titre = "La Rivière-Saint-Sauveur / Honfleur" }: { titre?: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-sm border border-border shadow-soft">
        <iframe
          title={`Carte — ${titre}`}
          src={carte.embedUrl}
          loading="lazy"
          className="h-[320px] w-full sm:h-[440px]"
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Localisation générale du secteur. L'adresse précise est communiquée après réservation.{" "}
        <a
          href={carte.lienExterne}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Voir en plein écran
        </a>
      </p>
    </div>
  );
}
