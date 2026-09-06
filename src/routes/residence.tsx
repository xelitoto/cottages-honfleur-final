import { createFileRoute } from "@tanstack/react-router";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Gallery } from "@/components/Gallery";
import { Photo } from "@/components/Photo";

export const Route = createFileRoute("/residence")({
  head: () => ({
    meta: [
      { title: "La résidence Les Cottages — piscine, tennis et pétanque près de Honfleur" },
      {
        name: "description",
        content:
          "La résidence Les Cottages près de Honfleur : piscine extérieure, court de tennis, table de ping-pong et terrain de pétanque dans un cadre calme et verdoyant.",
      },
      { property: "og:title", content: "La résidence Les Cottages" },
      {
        property: "og:description",
        content:
          "Piscine, court de tennis, table de ping-pong et terrain de pétanque, au cœur d'un parc paisible aux portes de Honfleur.",
      },
      { property: "og:url", content: "/residence" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/residence" }],
  }),
  component: Residence,
});

function Residence() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">Honfleur, Normandie</p>
        <h1 className="title-xl mt-5">La résidence Les Cottages</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Une résidence de vacances aux portes de Honfleur, dans un environnement verdoyant et
          tranquille, avec piscine, court de tennis, table de ping-pong et terrain de pétanque.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Photo
          photo="residence-batiment-1"
          ratio="16 / 9"
          className="rounded-sm shadow-soft"
          priority
        />
      </div>

      {/* Le cadre */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Le cadre</p>
          <h2 className="title-lg rule-wood mt-3">Des allées, de la verdure, du calme</h2>
          <div className="lead mt-6 space-y-5">
            <p>
              La résidence s'organise autour d'allées bordées de pelouses et d'arbres. On y circule
              à pied, d'un équipement à l'autre, sans jamais s'éloigner de l'appartement.
            </p>
            <p>
              Le matin, on prend son café sur le balcon ; l'après-midi, on rejoint la piscine ou le
              court de tennis ; le soir, une partie de pétanque prolonge la journée avant le dîner.
            </p>
          </div>
        </div>
        <Photo photo="residence-allee-1" ratio="4 / 3" className="rounded-sm shadow-soft" />
      </section>

      {/* La piscine */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">L'équipement phare</p>
            <h2 className="title-lg rule-wood mt-3">La piscine</h2>
            <p className="lead mt-6">
              Une piscine extérieure au cœur de la résidence : quelques longueurs, un moment au
              soleil, et la journée de visites s'efface.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
            <Photo photo="residence-piscine-1" ratio="4 / 3" className="rounded-sm shadow-soft" />
            <Photo photo="residence-piscine-2" ratio="4 / 3" className="rounded-sm shadow-soft" />
            <Photo photo="residence-piscine-3" ratio="4 / 3" className="rounded-sm shadow-soft" />
          </div>
        </div>
      </section>

      {/* Tennis & ping-pong */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <article>
          <Photo photo="residence-tennis-1" ratio="4 / 3" className="rounded-sm shadow-soft" />
          <h2 className="title-lg mt-6">Le court de tennis</h2>
          <p className="lead mt-4">
            Un court accessible aux résidents pour un match matinal ou une partie en fin de journée.
            Les raquettes sont à disposition dans l'appartement.
          </p>
        </article>
        <article>
          <Photo photo="residence-ping-pong-1" ratio="4 / 3" className="rounded-sm shadow-soft" />
          <h2 className="title-lg mt-6">La table de ping-pong</h2>
          <p className="lead mt-4">
            À l'ombre des arbres, la table de ping-pong est le rendez-vous des parties improvisées,
            en famille comme entre amis. Raquettes fournies également.
          </p>
        </article>
      </section>

      {/* Pétanque */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <p className="eyebrow">Sur place</p>
            <h2 className="title-lg rule-wood mt-3">Le terrain de pétanque</h2>
            <p className="lead mt-6">
              Un terrain ombragé pour des parties tranquilles au soleil couchant. Les boules vous
              attendent dans l'appartement, il ne reste qu'à former les équipes.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <Photo photo="residence-petanque-1" ratio="4 / 3" className="rounded-sm shadow-soft" />
            <Photo photo="residence-petanque-2" ratio="4 / 3" className="rounded-sm shadow-soft" />
          </div>
        </div>
      </section>

      <Gallery
        titre="La galerie de la résidence"
        intro="Les allées, les espaces verts et les équipements communs de la résidence."
        items={["residence-allee-2", "residence-batiment-1", "residence-piscine-2"]}
      />

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center sm:px-8 sm:pb-28">
        <h2 className="title-lg">Envie de poser vos valises ici ?</h2>
        <p className="lead mt-4">La réservation se fait directement sur Airbnb.</p>
        <div className="mt-8 flex justify-center">
          <AirbnbButton />
        </div>
      </section>
    </>
  );
}
