import { photos, type PhotoKey } from "@/content/photos";
import { cn } from "@/lib/utils";

type Props = {
  photo: PhotoKey;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
  /** Affiche discrètement la mention « Photo d'exemple » */
  showBadge?: boolean;
};

/**
 * Image du site. Toutes les photos proviennent de src/content/photos.ts
 * pour pouvoir être remplacées en un seul endroit.
 */
export function Photo({
  photo,
  className,
  imgClassName,
  ratio = "4 / 3",
  priority = false,
  showBadge = true,
}: Props) {
  const item = photos[photo];

  return (
    <figure className={cn("img-zoom relative bg-sand", className)} style={{ aspectRatio: ratio }}>
      <img
        src={item.src}
        alt={item.alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {item.temporaire && showBadge ? (
        <figcaption className="absolute bottom-2 left-2 rounded-full bg-ink/55 px-2.5 py-1 text-[0.6rem] font-medium tracking-[0.16em] uppercase text-cream backdrop-blur-sm">
          Photo d'exemple
        </figcaption>
      ) : null}
    </figure>
  );
}
