import { createFileRoute } from "@tanstack/react-router";
import { AirbnbButton } from "@/components/AirbnbButton";
import { Gallery } from "@/components/Gallery";
import { Photo } from "@/components/Photo";
import { Valeur } from "@/components/ACompleter";
import { galerieResidence } from "@/content/photos";
import { residenceEquipements, site } from "@/content/site";

export const Route = createFileRoute("/residence")({
  head: () => ({
    meta: [
      { title: "La résidence Les Cottages — La Rivière-Saint-Sauveur près de Honfleur" },
      {
        name: "description",
        content:
          "La résidence Les Cottages à La Rivière-Saint-Sauveur : environnement calme, espaces verts et cadre reposant à quelques minutes de Honfleur, en Normandie.",
      },
      { property: "og:title", content: "La résidence Les Cottages" },
      {
        property: "og:description",
        content:
          "Un cadre paisible et verdoyant aux portes de Honfleur pour se reposer après vos visites en Normandie.",
      },
      { property: "og:url", content: "/residence" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/residence" }],
  }),
  component: Residence,
});

function Residence() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">{site.ville}</p>
        <h1 className="title-xl mt-5">La résidence Les Cottages</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Une résidence de vacances installée à La Rivière-Saint-Sauveur, aux portes de Honfleur,
          dans un environnement résidentiel et verdoyant, à l'écart de l'agitation touristique.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Photo photo="residence" ratio="16 / 9" className="rounded-sm shadow-soft" priority />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">L'environnement</p>
          <h2 className="title-lg rule-wood mt-3">Un cadre propice à la détente</h2>
          <div className="lead mt-6 space-y-5">
            <p>
              Après une journée passée à flâner sur les quais de Honfleur, à longer la côte ou à
              parcourir les marchés normands, on apprécie de retrouver un lieu tranquille. La
              résidence offre précisément cela : un rythme plus lent, de la verdure et le calme
              d'un secteur résidentiel.
            </p>
            <p>
              On y prend le temps d'un café le matin, d'une promenade autour des allées le soir, et
              l'on repart le lendemain vers la mer, les falaises ou les villages de l'arrière-pays.
            </p>
          </div>
        </div>
        <Photo photo="residenceJardin" ratio="4 / 3" className="rounded-sm shadow-soft" />
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Sur place</p>
            <h2 className="title-lg rule-wood mt-3">Les équipements de la résidence</h2>
            <p className="lead mt-6">
              Aucun équipement n'est annoncé sans vérification. Les éléments ci-dessous seront
              confirmés, précisés ou retirés : seuls les équipements réellement disponibles seront
              conservés.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {residenceEquipements.map((e) => (
              <li key={e.label} className="rounded-sm border border-border bg-card p-6 shadow-soft">
                <p className="font-medium">{e.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <Valeur valeur={e.confirme ? e.detail : ""} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Gallery
        titre="La galerie de la résidence"
        intro="Images d'exemple, en attente des photographies réelles de la résidence et de ses extérieurs."
        items={galerieResidence}
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
