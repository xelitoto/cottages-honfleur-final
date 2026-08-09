import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { AirbnbButton } from "@/components/AirbnbButton";
import { MapEmbed } from "@/components/MapEmbed";
import { ACompleter } from "@/components/ACompleter";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Les Cottages, location près de Honfleur en Normandie" },
      {
        name: "description",
        content:
          "Une question avant votre séjour près de Honfleur ? Écrivez-nous. Réservation de l'appartement des Cottages, à La Rivière-Saint-Sauveur, via Airbnb.",
      },
      { property: "og:title", content: "Une question avant votre séjour ?" },
      {
        property: "og:description",
        content:
          "Contactez-nous pour toute question sur l'appartement des Cottages, près de Honfleur en Normandie.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [envoye, setEnvoye] = useState(false);

  return (
    <>
      <header className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-14">
        <p className="eyebrow">Contact</p>
        <h1 className="title-xl mt-5">Une question avant votre séjour ?</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">
          Accès, équipements, conseils de visite en Normandie : écrivez-nous, nous vous répondrons
          avec plaisir.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="rounded-sm border border-border bg-card p-6 shadow-soft sm:p-9">
          {envoye ? (
            <div className="py-10 text-center">
              <h2 className="title-md">Merci pour votre message</h2>
              <p className="lead mt-4">
                Votre demande a bien été prise en compte. La connexion du formulaire à une adresse
                e-mail reste à finaliser : <ACompleter />
              </p>
              <button
                type="button"
                onClick={() => setEnvoye(false)}
                className="btn-outline-soft mt-8"
              >
                Écrire un nouveau message
              </button>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setEnvoye(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="prenom" className="text-sm font-medium">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    required
                    autoComplete="given-name"
                    className="min-h-12 rounded-sm border border-input bg-background px-4 text-base outline-none transition focus:border-ring"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="nom" className="text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    required
                    autoComplete="family-name"
                    className="min-h-12 rounded-sm border border-input bg-background px-4 text-base outline-none transition focus:border-ring"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="min-h-12 rounded-sm border border-input bg-background px-4 text-base outline-none transition focus:border-ring"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="rounded-sm border border-input bg-background p-4 text-base outline-none transition focus:border-ring"
                />
              </div>
              <button type="submit" className="btn-wood w-full sm:w-auto sm:justify-self-start">
                Envoyer
              </button>
              <p className="text-xs text-muted-foreground">
                Aucune donnée n'est transmise pour l'instant : l'adresse de réception du formulaire
                est à renseigner dans la configuration du site.
              </p>
            </form>
          )}
        </div>

        <aside className="flex flex-col gap-8">
          <div className="rounded-sm border border-border bg-secondary/50 p-6 sm:p-8">
            <h2 className="title-md">Vous souhaitez réserver ?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Les disponibilités et la réservation de l'appartement se font directement sur Airbnb.
            </p>
            <div className="mt-6">
              <AirbnbButton className="w-full sm:w-auto" />
            </div>
          </div>

          <div>
            <p className="eyebrow">Nous joindre</p>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-wood" strokeWidth={1.5} />
                <span className="min-w-0">
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                      {site.email}
                    </a>
                  ) : (
                    <>
                      Adresse e-mail : <ACompleter />
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-wood" strokeWidth={1.5} />
                <span className="min-w-0">
                  {site.telephone ? site.telephone : <>Téléphone (facultatif) : <ACompleter /></>}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Localisation</p>
          <h2 className="title-lg rule-wood mt-3">
            {site.ville}, aux portes de Honfleur
          </h2>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
