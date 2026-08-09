/**
 * ============================================================
 *  BIBLIOTHÈQUE DE PHOTOS — COMMENT REMPLACER LES IMAGES
 * ============================================================
 *
 * Toutes les photos du site passent par ce fichier unique.
 *
 * POUR REMPLACER UNE PHOTO PAR LA VÔTRE :
 *   1. Déposez votre image dans le dossier  src/assets/photos/
 *      (formats conseillés : .jpg, largeur mini 1600 px)
 *   2. Remplacez, ci-dessous, l'import correspondant par le nom
 *      de votre fichier. Exemple :
 *         import sejour from "@/assets/photos/sejour.jpg";
 *      devient
 *         import sejour from "@/assets/photos/mon-salon.jpg";
 *   3. Mettez à jour le texte "alt" (description de l'image) et
 *      passez `temporaire: false` : la mention « Photo d'exemple »
 *      disparaîtra automatiquement du site.
 *
 * Rien d'autre à modifier : toutes les pages et galeries se
 * mettent à jour automatiquement.
 */

import hero from "@/assets/photos/hero-normandie.jpg";
import sejour from "@/assets/photos/sejour.jpg";
import cuisine from "@/assets/photos/cuisine.jpg";
import chambre from "@/assets/photos/chambre.jpg";
import salleDeBain from "@/assets/photos/salle-de-bain.jpg";
import exterieur from "@/assets/photos/exterieur.jpg";
import residence from "@/assets/photos/residence.jpg";
import residenceJardin from "@/assets/photos/residence-jardin.jpg";
import honfleurVieuxBassin from "@/assets/photos/honfleur-vieux-bassin.jpg";
import honfleurRuelles from "@/assets/photos/honfleur-ruelles.jpg";
import deauvilleTrouville from "@/assets/photos/deauville-trouville.jpg";
import etretat from "@/assets/photos/etretat.jpg";
import marcheNormand from "@/assets/photos/marche-normand.jpg";
import campagneNormande from "@/assets/photos/campagne-normande.jpg";

export type Photo = {
  /** Fichier image importé depuis src/assets/photos/ */
  src: string;
  /** Description de l'image (accessibilité + SEO) */
  alt: string;
  /** true = photo d'exemple à remplacer par vos propres photos */
  temporaire: boolean;
};

export const photos = {
  hero: {
    src: hero,
    alt: "Maison de vacances normande entourée de verdure à la lumière du soir",
    temporaire: true,
  },
  sejour: {
    src: sejour,
    alt: "Séjour lumineux et chaleureux d'un appartement de vacances",
    temporaire: true,
  },
  cuisine: {
    src: cuisine,
    alt: "Cuisine équipée claire avec plan de travail en bois",
    temporaire: true,
  },
  chambre: {
    src: chambre,
    alt: "Chambre paisible avec literie en lin blanc",
    temporaire: true,
  },
  salleDeBain: {
    src: salleDeBain,
    alt: "Salle de bain claire avec vasque et linge de toilette",
    temporaire: true,
  },
  exterieur: {
    src: exterieur,
    alt: "Terrasse avec mobilier en bois ouverte sur un jardin verdoyant",
    temporaire: true,
  },
  residence: {
    src: residence,
    alt: "Allées et pelouses de la résidence de vacances",
    temporaire: true,
  },
  residenceJardin: {
    src: residenceJardin,
    alt: "Espaces verts et banc ombragé au cœur de la résidence",
    temporaire: true,
  },
  honfleurVieuxBassin: {
    src: honfleurVieuxBassin,
    alt: "Le Vieux Bassin de Honfleur et ses maisons colorées reflétées dans l'eau",
    temporaire: true,
  },
  honfleurRuelles: {
    src: honfleurRuelles,
    alt: "Ruelle pavée de Honfleur bordée de maisons à colombages et de galeries",
    temporaire: true,
  },
  deauvilleTrouville: {
    src: deauvilleTrouville,
    alt: "Planches et parasols sur la plage de Deauville-Trouville",
    temporaire: true,
  },
  etretat: {
    src: etretat,
    alt: "Falaises blanches et arche naturelle d'Étretat sur la côte normande",
    temporaire: true,
  },
  marcheNormand: {
    src: marcheNormand,
    alt: "Étal de marché normand avec fromages, cidre et produits locaux",
    temporaire: true,
  },
  campagneNormande: {
    src: campagneNormande,
    alt: "Campagne normande verdoyante avec pommiers et prairies",
    temporaire: true,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Galerie de la page d'accueil — « Un aperçu de votre séjour » (6 photos) */
export const galerieAccueil: PhotoKey[] = [
  "sejour",
  "cuisine",
  "chambre",
  "exterieur",
  "honfleurVieuxBassin",
  "campagneNormande",
];

/** Galerie de la page « L'appartement » */
export const galerieAppartement: PhotoKey[] = [
  "sejour",
  "cuisine",
  "chambre",
  "salleDeBain",
  "exterieur",
  "hero",
];

/** Galerie de la page « La résidence » */
export const galerieResidence: PhotoKey[] = [
  "residence",
  "residenceJardin",
  "exterieur",
  "campagneNormande",
];

/** Galerie de la page « Les alentours » */
export const galerieAlentours: PhotoKey[] = [
  "honfleurVieuxBassin",
  "honfleurRuelles",
  "deauvilleTrouville",
  "etretat",
  "marcheNormand",
  "campagneNormande",
];
