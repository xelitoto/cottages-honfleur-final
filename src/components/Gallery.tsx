import { type PhotoKey } from "@/content/photos";
import { Photo } from "./Photo";
import { cn } from "@/lib/utils";

type Props = {
  titre?: string;
  intro?: string;
  items: PhotoKey[];
  accueil?: boolean;
};

export function Gallery({ titre, intro, items }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      {titre ? (
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <h2 className="title-lg">{titre}</h2>
          {intro ? <p className="lead mt-4">{intro}</p> : null}
        </div>
      ) : null}
      <div
  className={cn(
    "grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3",
    accueil && "mx-auto max-w-5xl"
  )}
>
  {items.map((key, i) => (
    <Photo
      key={key + i}
      photo={key}
      ratio={accueil ? "4 / 3" : i % 5 === 0 ? "4 / 5" : "4 / 3"}
      imgClassName={accueil ? "object-contain" : undefined}
      className="rounded-sm shadow-soft"
    />
  ))}
</div>
    </section>
  );
}
