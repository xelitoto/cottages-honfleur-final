/**
 * ============================================================
 *  CONFIGURATION DU SITE — À COMPLÉTER / À PERSONNALISER
 * ============================================================
 * Tous les textes modifiables et les informations pratiques sont
 * regroupés ici. Les mentions « À compléter » apparaissent
 * volontairement sur le site tant que l'information n'est pas
 * confirmée : remplacez-les par vos informations réelles.
 */

export const site = {
  nom: "Les Cottages",
  nomComplet: "Les Cottages – Escale près de Honfleur",
  ville: "La Rivière-Saint-Sauveur",
  region: "Normandie",

  /**
   * LIEN AIRBNB — à renseigner.
   * Collez ici l'URL de votre annonce, par exemple :
   * airbnbUrl: "https://www.airbnb.fr/rooms/00000000",
   * Tant que le champ est vide, les boutons restent visibles et
   * affichent une mention « lien à venir ».
   */
  airbnbUrl: "",

  /**
   * ADRESSE E-MAIL DE CONTACT — à renseigner.
   * Exemple : "bonjour@mon-domaine.fr"
   */
  email: "",

  /** Téléphone (facultatif) */
  telephone: "",
} as const;

export const A_COMPLETER = "À compléter";

/**
 * ÉQUIPEMENTS DE L'APPARTEMENT
 * Passez `confirme: true` uniquement pour les équipements réellement
 * présents. Les équipements non confirmés sont affichés en « À
 * compléter » ; supprimez simplement la ligne pour les retirer du site.
 */
export type Equipement = {
  id: "wifi" | "television" | "cuisine" | "laveLinge" | "chauffage" | "parking";
  label: string;
  detail: string;
  confirme: boolean;
};

export const equipements: Equipement[] = [
  { id: "wifi", label: "Wi-Fi", detail: A_COMPLETER, confirme: false },
  { id: "television", label: "Télévision", detail: A_COMPLETER, confirme: false },
  { id: "cuisine", label: "Cuisine", detail: A_COMPLETER, confirme: false },
  { id: "laveLinge", label: "Lave-linge", detail: A_COMPLETER, confirme: false },
  { id: "chauffage", label: "Chauffage", detail: A_COMPLETER, confirme: false },
  { id: "parking", label: "Parking", detail: A_COMPLETER, confirme: false },
];

/**
 * PIÈCES DE L'APPARTEMENT
 * Remplacez les textes « À compléter » par les caractéristiques
 * exactes du logement (surfaces, couchages, literie, etc.).
 */
export const pieces = [
  {
    id: "sejour",
    titre: "Le séjour",
    photo: "sejour" as const,
    intro:
      "La pièce à vivre, pensée pour se retrouver après une journée de découverte : un canapé confortable, un coin repas et de la lumière naturelle.",
    details: [
      { label: "Surface", valeur: A_COMPLETER },
      { label: "Coin repas", valeur: A_COMPLETER },
      { label: "Canapé / couchage d'appoint", valeur: A_COMPLETER },
      { label: "Vue / exposition", valeur: A_COMPLETER },
    ],
  },
  {
    id: "cuisine",
    titre: "La cuisine",
    photo: "cuisine" as const,
    intro:
      "De quoi préparer un petit-déjeuner tranquille ou cuisiner les produits rapportés du marché normand.",
    details: [
      { label: "Type de cuisine", valeur: A_COMPLETER },
      { label: "Plaques de cuisson", valeur: A_COMPLETER },
      { label: "Four / micro-ondes", valeur: A_COMPLETER },
      { label: "Réfrigérateur", valeur: A_COMPLETER },
      { label: "Vaisselle et ustensiles", valeur: A_COMPLETER },
    ],
  },
  {
    id: "chambres",
    titre: "Les chambres",
    photo: "chambre" as const,
    intro:
      "Un espace calme pour des nuits reposantes. Le détail des couchages et de la literie sera précisé prochainement.",
    details: [
      { label: "Nombre de chambres", valeur: A_COMPLETER },
      { label: "Couchages", valeur: A_COMPLETER },
      { label: "Literie", valeur: A_COMPLETER },
      { label: "Linge de lit fourni", valeur: A_COMPLETER },
    ],
  },
  {
    id: "salle-de-bain",
    titre: "La salle de bain",
    photo: "salleDeBain" as const,
    intro: "Un espace clair et fonctionnel pour se préparer sereinement.",
    details: [
      { label: "Douche / baignoire", valeur: A_COMPLETER },
      { label: "WC", valeur: A_COMPLETER },
      { label: "Linge de toilette", valeur: A_COMPLETER },
    ],
  },
  {
    id: "exterieurs",
    titre: "Les extérieurs",
    photo: "exterieur" as const,
    intro:
      "Balcon, terrasse ou jardin : cette section sera conservée uniquement si l'appartement dispose réellement d'un espace extérieur.",
    details: [
      { label: "Balcon / terrasse / jardin", valeur: A_COMPLETER },
      { label: "Mobilier extérieur", valeur: A_COMPLETER },
      { label: "Exposition", valeur: A_COMPLETER },
    ],
  },
];

/**
 * LA RÉSIDENCE
 * N'indiquez « confirme: true » que pour les équipements réellement
 * disponibles dans la résidence. Aucun équipement n'est inventé.
 */
export const residenceEquipements = [
  { label: "Espaces verts", detail: A_COMPLETER, confirme: false },
  { label: "Stationnement", detail: A_COMPLETER, confirme: false },
  { label: "Piscine", detail: A_COMPLETER, confirme: false },
  { label: "Autres équipements communs", detail: A_COMPLETER, confirme: false },
];

/**
 * NOS BONNES ADRESSES (restaurants)
 * Ajoutez ici uniquement des adresses réellement sélectionnées.
 * Laissez « À compléter » pour toute information non vérifiée.
 * Pour ajouter une adresse, dupliquez un bloc ci-dessous.
 */
export type Restaurant = {
  nom: string;
  cuisine: string;
  description: string;
  adresse: string;
  lien: string;
};

export const restaurants: Restaurant[] = [
  {
    nom: A_COMPLETER,
    cuisine: A_COMPLETER,
    description: A_COMPLETER,
    adresse: A_COMPLETER,
    lien: "",
  },
  {
    nom: A_COMPLETER,
    cuisine: A_COMPLETER,
    description: A_COMPLETER,
    adresse: A_COMPLETER,
    lien: "",
  },
  {
    nom: A_COMPLETER,
    cuisine: A_COMPLETER,
    description: A_COMPLETER,
    adresse: A_COMPLETER,
    lien: "",
  },
];

/** Carte OpenStreetMap centrée sur La Rivière-Saint-Sauveur / Honfleur */
export const carte = {
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=0.1750%2C49.3980%2C0.2900%2C49.4460&layer=mapnik&marker=49.4180%2C0.2320",
  lienExterne: "https://www.openstreetmap.org/#map=14/49.4180/0.2320",
};
