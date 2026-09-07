import { createFileRoute } from "@tanstack/react-router";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Photo } from "@/components/Photo";
import { MapEmbed } from "@/components/MapEmbed";
import { destinations } from "@/content/site";

export const Route = createFileRoute("/alentours")({
  head: () => ({
    meta: [
      { title: "Les alentours — Honfleur, Étretat, Deauville | Séjour en Normandie" },
      {
        name: "description",
        content:
          "Autour de l'appartement : Honfleur et son Vieux Bassin, Étretat, Deauville, Trouville-sur-Mer, le Pont de Normandie, la plage du Butin, le Mont-Joli, la Route des Chaumières et le Marais-Vernier.",
      },
      { property: "og:title", content: "Découvrez la Normandie depuis Les Cottages" },
      {
        property: "og:description",
        content:
          "Neuf lieux à découvrir autour de Honfleur : villes de caractère, falaises, plages, panoramas et campagne normande.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/alentours" },
    ],
    links: [{ rel: "canonical", href: "/alentours" }],
  }),
  component: Alentours,
});

function Alentours() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">Les alentours</p>
        <h1 className="title-xl mt-5">Découvrez la Normandie</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Depuis l'appartement, Honfleur est à quelques minutes et toute la côte normande s'ouvre à
          vous : ports de caractère, falaises, longues plages de sable et campagne à colombages.
        </p>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article key={d.id}>
              <Photo
                photo={d.photo}
                ratio="4 / 3"
                className="rounded-sm shadow-soft"
                priority={i < 3}
              />
              <h2 className="title-md mt-5 text-[1.35rem]">{d.nom}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Localisation</p>
            <h2 className="title-lg rule-wood mt-3">La Rivière-Saint-Sauveur, aux portes de Honfleur</h2>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h2 className="title-lg">Envie de découvrir la Normandie ?</h2>
        <p className="lead mx-auto mt-5 max-w-xl">
          La réservation de l'appartement se fait directement sur Airbnb.
        </p>
        <div className="mt-8 flex justify-center">
          <AirbnbButton />
        </div>
      </section>
    </>
  );
}
