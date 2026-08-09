import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "solid" | "light" | "outline";
  /** Affiche la mention « Lien Airbnb à venir » tant que l'URL n'est pas renseignée */
  note?: boolean;
};

/**
 * Bouton « Réserver sur Airbnb ».
 * Le lien se renseigne dans src/content/site.ts (champ airbnbUrl).
 */
export function AirbnbButton({ className, children, variant = "solid", note = true }: Props) {
  const label = children ?? "Réserver sur Airbnb";
  const classes = cn(
    variant === "solid" && "btn-airbnb",
    variant === "light" && "btn-ghost-light",
    variant === "outline" && "btn-outline-soft",
    className,
  );

  if (!site.airbnbUrl) {
    const pleineLargeur = className?.includes("w-full");
    return (
      <span
        className={cn(
          "inline-flex flex-col items-center gap-1",
          pleineLargeur && "w-full",
        )}
      >
        <span className={cn(classes, "cursor-default")} aria-disabled="true">
          {label}
        </span>
        {note ? (
          <span className="text-[0.62rem] tracking-wide text-current opacity-70">
            Lien Airbnb à venir
          </span>
        ) : null}
      </span>
    );
  }


  return (
    <a href={site.airbnbUrl} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
    </a>
  );
}
