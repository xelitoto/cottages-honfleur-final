import { A_COMPLETER } from "@/content/site";
import { cn } from "@/lib/utils";

/** Marque visuellement une information non encore confirmée. */
export function ACompleter({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-wood/50 bg-sand/60 px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide text-wood",
        className,
      )}
    >
      {A_COMPLETER}
    </span>
  );
}

/** Affiche une valeur, ou le marqueur « À compléter » si elle n'est pas renseignée. */
export function Valeur({ valeur }: { valeur: string }) {
  if (!valeur || valeur === A_COMPLETER) return <ACompleter />;
  return <span>{valeur}</span>;
}
