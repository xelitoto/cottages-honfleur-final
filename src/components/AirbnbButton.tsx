import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "solid" | "light" | "outline";
};

/**
 * Bouton « Réserver sur Airbnb ».
 * Le lien se renseigne dans src/content/site.ts (champ airbnbUrl).
 */
export function AirbnbButton({ className, children, variant = "solid" }: Props) {
  const label = children ?? "Réserver sur Airbnb";
  const classes = cn(
    variant === "solid" && "btn-airbnb",
    variant === "light" && "btn-ghost-light",
    variant === "outline" && "btn-outline-soft",
    className,
  );

  if (!site.airbnbUrl) {
    return (
      <span className="inline-flex flex-col items-center gap-1">
        <span className={cn(classes, "cursor-default")} aria-disabled="true">
          {label}
        </span>
        <span className="text-[0.68rem] tracking-wide text-muted-foreground">
          Lien Airbnb à venir
        </span>
      </span>
    );
  }

  return (
    <a href={site.airbnbUrl} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
    </a>
  );
}
