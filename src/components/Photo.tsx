import { photos, type PhotoKey } from "@/content/photos";
import { cn } from "@/lib/utils";

type Props = {
  photo: PhotoKey;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
};

/**
 * Image du site. Chaque emplacement photo est défini dans
 * src/content/photos.ts et reste indépendant des autres.
 */
export function Photo({ photo, className, imgClassName, ratio = "4 / 3", priority = false }: Props) {
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
    </figure>
  );
}
