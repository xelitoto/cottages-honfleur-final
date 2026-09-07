import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Car, Plane } from "lucide-react";
import { AirbnbButton } from "@/components/AirbnbButton";
import { MapEmbed } from "@/components/MapEmbed";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Réservation et accès — Les Cottages, près de Honfleur" },
      {
        name: "description",
        content:
          "Réservez l'appartement des Cottages, à La Rivière-Saint-Sauveur près de Honfleur, directement sur Airbnb. Localisation et accès à la résidence en Normandie.",
      },
      { property: "og:title", content: "Réserver votre séjour près de Honfleur" },
      {
        property: "og:description",
        content:
          "Disponibilités, échanges et réservation de l'appartement se font directement sur Airbnb.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const acces = [
  {
    icone: MapPin,
    titre: "À deux pas de Honfleur",
    texte:
      "La résidence se trouve à La Rivière-Saint-Sauveur, aux portes de Honfleur : le Vieux Bassin et le centre historique sont à quelques minutes.",
  },
  {
    icone: Car,
    titre: "En voiture",
    texte:
      "Accès direct par le Pont de Normandie et l'A29. Deux places de parking sont réservées à l'appartement.",
  },
  {
    icone: Plane,
    titre: "Côte Fleurie",
    texte:
      "Deauville, Trouville-sur-Mer et les plages de la Côte Fleurie s'atteignent en une vingtaine de minutes.",
  },
];

function Contact() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">Réservation</p>
        <h1 className="title-xl mt-5">Réservez votre séjour</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Les disponibilités, les échanges avec nous et la réservation de l'appartement se font
          directement sur Airbnb.
        </p>
        <div className="mt-8 flex justify-center">
          <AirbnbButton />
        </div>
      </header>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {acces.map((a) => (
              <article key={a.titre} className="rounded-sm border border-border bg-card p-6 shadow-soft">
                <a.icone className="h-5 w-5 text-wood" strokeWidth={1.5} />
                <h2 className="title-md mt-4 text-[1.2rem]">{a.titre}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Localisation</p>
          <h2 className="title-lg rule-wood mt-3">{site.ville}, aux portes de Honfleur</h2>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
