import { AIRBNB_URL } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "solid" | "light" | "outline";
};

/**
 * Bouton « Réserver sur Airbnb ».
 * Le lien se renseigne dans src/content/site.ts (constante AIRBNB_URL).
 */
export function AirbnbButton({ className, children, variant = "solid" }: Props) {
  const label = children ?? "Réserver sur Airbnb";
  const classes = cn(
    variant === "solid" && "btn-airbnb",
    variant === "light" && "btn-ghost-light",
    variant === "outline" && "btn-outline-soft",
    className,
  );

  return (
    <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className={classes}>
      {label}
    </a>
  );
}
