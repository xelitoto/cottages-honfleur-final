import { createFileRoute } from "@tanstack/react-router";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Photo } from "@/components/Photo";
import { pieces, equipementsSupplementaires } from "@/content/site";

export const Route = createFileRoute("/appartement")({
  head: () => ({
    meta: [
      { title: "L'appartement — location vacances près de Honfleur | Les Cottages" },
      {
        name: "description",
        content:
          "L'appartement des Cottages près de Honfleur : salon de 20 m², cuisine équipée, deux chambres avec literie neuve, salle de bain avec baignoire et balcon plein sud.",
      },
      { property: "og:title", content: "Votre pied-à-terre en Normandie — Les Cottages" },
      {
        property: "og:description",
        content:
          "Salon, cuisine entièrement équipée, deux chambres, salle de bain avec baignoire et balcon plein sud à la vue dégagée.",
      },
      { property: "og:url", content: "/appartement" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/appartement" }],
  }),
  component: Appartement,
});

function Appartement() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">L'appartement</p>
        <h1 className="title-xl mt-5">Votre pied-à-terre en Normandie</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Un appartement pensé comme un point d'ancrage : on y revient volontiers après une journée
          sur les quais de Honfleur ou sur la côte, pour se poser, cuisiner tranquillement et se
          reposer avant de repartir à la découverte.
        </p>
      </header>

      {/* Pièces */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {pieces.map((piece, i) => (
          <section
            key={piece.id}
            className="border-b border-border py-16 last:border-0 sm:py-24"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Photo
                photo={piece.photos[0]}
                ratio="4 / 3"
                className={`rounded-sm shadow-soft ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div>
                <h2 className="title-lg rule-wood mt-3">{piece.titre}</h2>
                <p className="lead mt-6">{piece.intro}</p>
                <dl className="mt-8 divide-y divide-border border-t border-border">
                  {piece.details.map((d) => (
                    <div
                      key={d.label}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3"
                    >
                      <dt className="min-w-0 truncate text-sm text-muted-foreground">{d.label}</dt>
                      <dd className="shrink-0 text-right text-sm font-medium">{d.valeur}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {piece.photos.length > 1 ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {piece.photos.slice(1).map((p) => (
                  <Photo key={p} photo={p} ratio="4 / 3" className="rounded-sm shadow-soft" />
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* Équipements supplémentaires */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Sur place</p>
            <h2 className="title-lg rule-wood mt-3">Les équipements supplémentaires</h2>
            <p className="lead mt-6">
              Tout ce qui vous attend en plus dans l'appartement, pour voyager léger.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipementsSupplementaires.map((e) => (
              <li
                key={e.label}
                className="rounded-sm border border-border bg-card p-5 text-sm font-medium shadow-soft"
              >
                {e.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="title-lg">Cet appartement vous plaît ?</h2>
        <p className="lead mt-4">
          Les disponibilités et la réservation se font directement sur Airbnb.
        </p>
        <div className="mt-8 flex justify-center">
          <AirbnbButton />
        </div>
      </section>
    </>
  );
}
