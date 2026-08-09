import { createFileRoute } from "@tanstack/react-router";
import {
  Bike,
  Croissant,
  Footprints,
  Landmark,
  Sailboat,
  ShoppingBasket,
  Umbrella,
} from "lucide-react";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Photo } from "@/components/Photo";
import { MapEmbed } from "@/components/MapEmbed";
import { ACompleter, Valeur } from "@/components/ACompleter";
import { A_COMPLETER, restaurants } from "@/content/site";

export const Route = createFileRoute("/alentours")({
  head: () => ({
    meta: [
      { title: "Les alentours — Honfleur, Deauville, Étretat | Séjour en Normandie" },
      {
        name: "description",
        content:
          "Depuis Les Cottages à La Rivière-Saint-Sauveur : Honfleur et son Vieux Bassin, Deauville, Trouville, Étretat, les marchés normands et la côte à découvrir.",
      },
      { property: "og:title", content: "Découvrez la Normandie depuis Les Cottages" },
      {
        property: "og:description",
        content:
          "Honfleur, le Vieux Bassin, Deauville, Trouville, Étretat, marchés et gastronomie : les incontournables autour de votre location.",
      },
      { property: "og:url", content: "/alentours" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/alentours" }],
  }),
  component: Alentours,
});

const activites = [
  {
    icone: Footprints,
    titre: "Promenades",
    texte: "Sentiers côtiers, quais de Honfleur, chemins de campagne et bords de Seine.",
  },
  {
    icone: Umbrella,
    titre: "Plages",
    texte: "Les grandes plages de sable de la Côte Fleurie, à quelques kilomètres.",
  },
  {
    icone: Landmark,
    titre: "Visites culturelles",
    texte: "Églises, musées, ateliers d'artistes et galeries au cœur de Honfleur.",
  },
  {
    icone: ShoppingBasket,
    titre: "Marchés",
    texte: "Marchés normands, producteurs locaux, cidre, fromages et poissons.",
  },
  {
    icone: Sailboat,
    titre: "Activités nautiques",
    texte: "Voile, char à voile, sorties en mer et balades sur le littoral.",
  },
  {
    icone: Bike,
    titre: "Vélo",
    texte: "Itinéraires cyclables le long de la côte et dans l'arrière-pays normand.",
  },
  {
    icone: Croissant,
    titre: "Découverte gastronomique",
    texte: "Fruits de mer, spécialités normandes, cidre et calvados à déguster sur place.",
  },
];

function Alentours() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">Les alentours</p>
        <h1 className="title-xl mt-5">Découvrez la Normandie</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Depuis Les Cottages, partez à la découverte de Honfleur et des incontournables de la côte
          normande.
        </p>
      </header>

      {/* Honfleur */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16">
        <Photo photo="honfleurRuelles" ratio="4 / 3" className="rounded-sm shadow-soft" priority />
        <div>
          <p className="eyebrow">À quelques minutes</p>
          <h2 className="title-lg rule-wood mt-3">Honfleur</h2>
          <div className="lead mt-6 space-y-4">
            <p>
              Port de caractère et ville d'artistes, Honfleur se découvre à pied : les maisons
              hautes et colorées du Vieux Bassin, les ruelles pavées, les galeries et ateliers, les
              terrasses de restaurants et l'ambiance maritime des quais.
            </p>
            <p>
              Une ville qui se visite aussi bien un matin de marché qu'en fin de journée, quand la
              lumière tombe sur les façades d'ardoise.
            </p>
          </div>
          <a
            href="https://www.ot-honfleur.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wood mt-8"
          >
            Découvrir Honfleur
          </a>
        </div>
      </section>

      {/* Vieux Bassin */}
      <section className="relative overflow-hidden">
        <Photo
          photo="honfleurVieuxBassin"
          ratio="16 / 9"
          className="max-h-[70svh] rounded-none"
          showBadge={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16">
          <h2 className="title-lg max-w-xl text-cream">Le Vieux Bassin</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
            Le cœur emblématique de Honfleur : les bateaux amarrés, les façades étroites qui se
            reflètent dans l'eau et les terrasses animées. Un lieu que l'on traverse plusieurs fois
            par séjour, sans jamais s'en lasser.
          </p>
          <p className="mt-3 text-[0.65rem] tracking-wide text-cream/60">Photo d'exemple</p>
        </div>
      </section>

      {/* Deauville & Trouville / Étretat */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <article>
          <Photo photo="deauvilleTrouville" ratio="4 / 3" className="rounded-sm shadow-soft" />
          <h2 className="title-lg mt-6">Deauville &amp; Trouville</h2>
          <p className="lead mt-4">
            Deux stations voisines et complémentaires : Deauville et ses planches, ses villas
            élégantes et son atmosphère chic ; Trouville, plus familiale et animée, avec son port de
            pêche, son marché aux poissons et sa grande plage.
          </p>
        </article>
        <article>
          <Photo photo="etretat" ratio="4 / 3" className="rounded-sm shadow-soft" />
          <h2 className="title-lg mt-6">Étretat</h2>
          <p className="lead mt-4">
            Les falaises blanches, l'aiguille et les arches naturelles qui ont inspiré tant de
            peintres. Une excursion à la journée, entre panoramas depuis les hauteurs et promenade
            sur la plage de galets.
          </p>
        </article>
      </section>

      {/* Marchés & gastronomie */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Saveurs locales</p>
            <h2 className="title-lg rule-wood mt-3">Marchés et gastronomie</h2>
            <div className="lead mt-6 space-y-4">
              <p>
                La Normandie se goûte autant qu'elle se visite : marchés colorés, fromages
                (camembert, livarot, pont-l'évêque, neufchâtel), cidre et poiré, calvados,
                spécialités à base de crème et de pommes.
              </p>
              <p>
                Sur la côte, les étals de poissons et de fruits de mer sont un rendez-vous à ne pas
                manquer : coquilles Saint-Jacques en saison, huîtres, crevettes et poissons du jour.
              </p>
            </div>
          </div>
          <Photo photo="marcheNormand" ratio="4 / 3" className="rounded-sm shadow-soft" />
        </div>
      </section>

      {/* Restaurants */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Sélection</p>
          <h2 className="title-lg rule-wood mt-3">Nos bonnes adresses</h2>
          <p className="lead mt-6">
            Cette sélection accueillera prochainement des restaurants réellement choisis autour de
            Honfleur. Aucune adresse n'est inventée : les informations non vérifiées restent
            affichées en « À compléter ».
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {restaurants.map((r, i) => (
            <article
              key={i}
              className="flex flex-col rounded-sm border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="title-md text-[1.2rem]">
                {r.nom === A_COMPLETER ? <ACompleter /> : r.nom}
              </h3>
              <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-wood">
                Type de cuisine
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <Valeur valeur={r.cuisine} />
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <Valeur valeur={r.description} />
              </p>
              <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-wood">
                Adresse
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <Valeur valeur={r.adresse} />
              </p>
              <div className="mt-6">
                {r.lien ? (
                  <a
                    href={r.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-wood underline underline-offset-4"
                  >
                    Voir le site / la carte
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Lien (site officiel ou Google Maps) : <ACompleter />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Activités */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Que faire</p>
            <h2 className="title-lg rule-wood mt-3">Activités aux alentours</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activites.map((a) => (
              <div
                key={a.titre}
                className="rounded-sm border border-border bg-card p-6 shadow-soft transition-transform duration-500 hover:-translate-y-0.5"
              >
                <a.icone className="h-6 w-6 text-wood" strokeWidth={1.4} />
                <h3 className="title-md mt-4 text-[1.15rem]">{a.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Situation</p>
          <h2 className="title-lg rule-wood mt-3">Sur la carte</h2>
          <p className="lead mt-6">
            La Rivière-Saint-Sauveur se situe immédiatement à l'entrée de Honfleur, à proximité du
            Pont de Normandie et des accès vers la côte.
          </p>
        </div>
        <MapEmbed />
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center sm:px-8 sm:pb-28">
        <h2 className="title-lg">Votre séjour normand commence ici</h2>
        <div className="mt-8 flex justify-center">
          <AirbnbButton />
        </div>
      </section>
    </>
  );
}
