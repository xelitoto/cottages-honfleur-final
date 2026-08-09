import { createFileRoute } from "@tanstack/react-router";
import { Car, Flame, Tv, UtensilsCrossed, WashingMachine, Wifi } from "lucide-react";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Gallery } from "@/components/Gallery";
import { Photo } from "@/components/Photo";
import { Valeur } from "@/components/ACompleter";
import { galerieAppartement } from "@/content/photos";
import { equipements, pieces } from "@/content/site";

export const Route = createFileRoute("/appartement")({
  head: () => ({
    meta: [
      { title: "L'appartement — location vacances près de Honfleur | Les Cottages" },
      {
        name: "description",
        content:
          "Découvrez l'appartement des Cottages à La Rivière-Saint-Sauveur : séjour, cuisine, chambres, salle de bain et équipements, à quelques minutes de Honfleur.",
      },
      { property: "og:title", content: "Votre pied-à-terre en Normandie — Les Cottages" },
      {
        property: "og:description",
        content:
          "Séjour, cuisine, chambres, salle de bain et extérieurs de l'appartement en location saisonnière près de Honfleur.",
      },
      { property: "og:url", content: "/appartement" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/appartement" }],
  }),
  component: Appartement,
});

const icones = {
  wifi: Wifi,
  television: Tv,
  cuisine: UtensilsCrossed,
  laveLinge: WashingMachine,
  chauffage: Flame,
  parking: Car,
};

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

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Photo photo="sejour" ratio="16 / 9" className="rounded-sm shadow-soft" priority />
      </div>

      {/* Pièces */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {pieces.map((piece, i) => (
          <section
            key={piece.id}
            className="grid items-center gap-8 border-b border-border py-16 last:border-0 sm:py-24 lg:grid-cols-2 lg:gap-16"
          >
            <Photo
              photo={piece.photo}
              ratio="4 / 3"
              className={`rounded-sm shadow-soft ${i % 2 === 1 ? "lg:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow">{`0${i + 1}`}</p>
              <h2 className="title-lg rule-wood mt-3">{piece.titre}</h2>
              <p className="lead mt-6">{piece.intro}</p>
              <dl className="mt-8 divide-y divide-border border-t border-border">
                {piece.details.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3"
                  >
                    <dt className="min-w-0 truncate text-sm text-muted-foreground">{d.label}</dt>
                    <dd className="shrink-0 text-sm font-medium">
                      <Valeur valeur={d.valeur} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>

      {/* Équipements */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Sur place</p>
            <h2 className="title-lg rule-wood mt-3">Les équipements</h2>
            <p className="lead mt-6">
              Seuls les équipements confirmés seront conservés dans la version finale du site. Les
              mentions « À compléter » restent visibles tant que l'information n'est pas vérifiée.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipements.map((e) => {
              const Icone = icones[e.id];
              return (
                <li
                  key={e.id}
                  className="flex items-start gap-4 rounded-sm border border-border bg-card p-5 shadow-soft"
                >
                  <Icone className="mt-0.5 h-5 w-5 shrink-0 text-wood" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <p className="font-medium">{e.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <Valeur valeur={e.confirme ? e.detail : ""} />
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Gallery
        titre="La galerie de l'appartement"
        intro="Les photographies définitives du logement remplaceront prochainement ces images d'exemple."
        items={galerieAppartement}
      />

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center sm:px-8 sm:pb-28">
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
