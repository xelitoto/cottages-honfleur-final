import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, KeyRound, Leaf, MapPin } from "lucide-react";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Gallery } from "@/components/Gallery";
import { Photo } from "@/components/Photo";
import { photos, galerieAccueil } from "@/content/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Location saisonnière près de Honfleur — Les Cottages, Normandie",
      },
      {
        name: "description",
        content:
          "Appartement en location saisonnière aux portes de Honfleur, dans la résidence Les Cottages : piscine, tennis, ping-pong et pétanque, à deux pas de la côte normande.",
      },
      {
        property: "og:title",
        content: "Les Cottages – Escale près de Honfleur",
      },
      {
        property: "og:description",
        content:
          "Une parenthèse normande aux portes de Honfleur : appartement confortable dans une résidence avec piscine, tennis, ping-pong et pétanque.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Les Cottages – Escale près de Honfleur",
          description:
            "Appartement en location saisonnière dans la résidence Les Cottages, près de Honfleur en Normandie.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Honfleur",
            addressRegion: "Normandie",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
  component: Accueil,
});

const blocs = [
  {
    titre: "Votre appartement",
    texte: "Salon, cuisine équipée, deux chambres et un balcon plein sud à la vue dégagée.",
    photo: "accueil-1" as const,
    to: "/appartement" as const,
    lien: "Découvrir l'appartement",
  },
  {
    titre: "La résidence",
    texte: "Piscine, court de tennis, table de ping-pong et terrain de pétanque sur place.",
    photo: "accueil-6" as const,
    to: "/residence" as const,
    lien: "Découvrir la résidence",
  },
  {
    titre: "La Normandie",
    texte: "Honfleur, Étretat, Deauville, la côte et les paysages du Marais à proximité.",
    photo: "accueil-5" as const,
    to: "/alentours" as const,
    lien: "Découvrir les alentours",
  },
];

const avantages = [
  {
    icone: Anchor,
    titre: "Aux portes de Honfleur",
    texte: "Profitez du charme de Honfleur tout en séjournant dans un environnement calme.",
  },
  {
    icone: Leaf,
    titre: "Un appartement confortable",
    texte: "Deux chambres et des équipements pensés pour un séjour agréable, en couple, en famille ou entre amis.",
  },
  {
    icone: MapPin,
    titre: "Idéal pour découvrir la Normandie",
    texte: "Un point de départ privilégié pour explorer Honfleur, Étretat, Deauville, Trouville et les paysages normands.",
  },
  {
    icone: KeyRound,
    titre: "Un séjour en toute sérénité",
    texte: "Balcon exposé plein sud, vue dégagée et deux places de parking pour profiter pleinement de votre escapade.",
  },
];

function Accueil() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <img
          src={photos["accueil-hero-1"].src}
          alt={photos["accueil-hero-1"].alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 sm:pb-24">
          <p className="reveal text-[0.68rem] font-semibold tracking-[0.26em] uppercase text-cream/80">
            Honfleur, Normandie
          </p>
          <h1 className="reveal title-xl mt-5 max-w-3xl text-cream">
            Une parenthèse normande aux portes de Honfleur
          </h1>
          <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Bienvenue aux Cottages, à La Rivière-Saint-Sauveur, pour un séjour entre calme,
            confort et découverte de la Normandie, aux portes de Honfleur. Profitez d'un cadre
            paisible pour découvrir Honfleur, la côte normande et les paysages de la région, tout
            en profitant sur place d'une résidence pensée pour les vacances.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="eyebrow">Bienvenue</p>
        <p className="mt-6 font-display text-xl leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
          À quelques minutes de Honfleur, Les Cottages offrent un cadre idéal pour découvrir la
          Normandie tout en profitant d'un environnement paisible. Que vous veniez pour un week-end
          à deux, quelques jours en famille ou une escapade entre amis, l'appartement est un
          pied-à-terre confortable pour explorer la côte normande. Et lorsque vous choisissez de
          rester sur place, la résidence a de quoi occuper vos journées.
        </p>
      </section>

      {/* Trois blocs */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {blocs.map((b) => (
            <article key={b.titre} className="group">
              <Link to={b.to} className="block">
                <Photo photo={b.photo} ratio="4 / 5" className="rounded-sm shadow-soft" />
                <h2 className="title-md mt-6">{b.titre}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texte}</p>
                <span className="mt-4 inline-block text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-wood underline decoration-wood/40 underline-offset-4">
                  {b.lien}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <div className="border-y border-border bg-secondary/40">
        <Gallery
          titre="Un aperçu de votre séjour"
          intro="Quelques images pour vous donner le ton : l'esprit du logement, la résidence et la Normandie alentour."
          items={galerieAccueil}
        />
      </div>

      {/* Avantages */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Nos atouts</p>
          <h2 className="title-lg rule-wood mt-4">Pourquoi choisir Les Cottages ?</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {avantages.map((a) => (
            <div key={a.titre} className="border-t border-border pt-6">
              <a.icone className="h-6 w-6 text-wood" strokeWidth={1.4} />
              <h3 className="title-md mt-4 text-[1.25rem]">{a.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden">
        <img
          src={photos["accueil-cta-1"].src}
          alt={photos["accueil-cta-1"].alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <h2 className="title-lg text-cream">Prêt pour votre escapade normande ?</h2>
          <p className="mt-4 text-cream/85">Découvrez l'appartement et préparez votre séjour.</p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <AirbnbButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
