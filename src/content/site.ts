/**
 * ============================================================
 *  CONFIGURATION ET CONTENUS DU SITE
 * ============================================================
 *  Tous les textes et informations pratiques sont regroupés ici.
 * ============================================================
 */

/**
 * LIEN AIRBNB — variable unique utilisée par tous les boutons
 * « Réserver sur Airbnb » du site. Collez ici l'URL de l'annonce.
 */
export const AIRBNB_URL = "https://www.airbnb.fr/";

export const site = {
  nom: "Les Cottages",
  nomComplet: "Les Cottages – Escale près de Honfleur",
  ville: "Honfleur",
  region: "Normandie",
  email: "",
  telephone: "",
} as const;

/** Équipements de la résidence mis en avant sur l'accueil et la page Résidence */
export const residenceEquipements = [
  {
    id: "piscine",
    label: "Piscine",
    detail: "Une piscine extérieure pour se rafraîchir après vos visites.",
    photo: "residence-piscine-1" as const,
  },
  {
    id: "tennis",
    label: "Court de tennis",
    detail: "Un court de tennis accessible aux résidents, raquettes fournies dans l'appartement.",
    photo: "residence-tennis-1" as const,
  },
  {
    id: "ping-pong",
    label: "Table de ping-pong",
    detail: "Une table de ping-pong pour les parties improvisées en famille ou entre amis.",
    photo: "residence-ping-pong-1" as const,
  },
  {
    id: "petanque",
    label: "Terrain de pétanque",
    detail: "Un terrain de pétanque ombragé, boules mises à disposition dans l'appartement.",
    photo: "residence-petanque-1" as const,
  },
];

/** PIÈCES DE L'APPARTEMENT */
export const pieces = [
  {
    id: "salon",
    titre: "Le salon",
    intro:
      "Une pièce à vivre de 20 m², lumineuse et confortable : on s'y installe pour dîner, lire ou regarder un film après une journée sur la côte.",
    photos: ["appartement-salon-1", "appartement-salon-2", "appartement-salon-3"] as const,
    details: [
      { label: "Surface", valeur: "20 m²" },
      { label: "Coin repas", valeur: "Table et chaises" },
      { label: "Pour les enfants", valeur: "Chaise bébé" },
      { label: "Assises", valeur: "Canapé" },
      { label: "Multimédia", valeur: "Télévision" },
      { label: "Confort d'été", valeur: "Ventilateur de plafond" },
    ],
  },
  {
    id: "cuisine",
    titre: "La cuisine",
    intro:
      "Entièrement équipée, elle permet de cuisiner comme à la maison, des produits du marché normand au café du matin.",
    photos: ["appartement-cuisine-1", "appartement-cuisine-2"] as const,
    details: [
      { label: "Cuisson", valeur: "Plaque à induction" },
      { label: "Four", valeur: "Four combiné micro-ondes" },
      { label: "Froid", valeur: "Grand réfrigérateur avec congélateur" },
      { label: "Linge", valeur: "Lave-linge et sèche-linge" },
      { label: "Vaisselle", valeur: "Lave-vaisselle" },
      { label: "Équipement", valeur: "Vaisselle complète et ustensiles de cuisine" },
      { label: "Café", valeur: "Machine Nespresso et cafetière" },
    ],
  },
  {
    id: "chambre-double",
    titre: "La chambre avec lit double",
    intro:
      "Une chambre calme avec un lit double et une literie neuve. Le linge de lit et les serviettes sont fournis.",
    photos: ["appartement-chambre-double-1", "appartement-chambre-double-2"] as const,
    details: [
      { label: "Couchage", valeur: "1 lit double" },
      { label: "Literie", valeur: "Literie neuve" },
      { label: "Linge", valeur: "Linge de lit fourni" },
    ],
  },
  {
    id: "chambre-simples",
    titre: "La chambre avec lits simples",
    intro:
      "La seconde chambre accueille deux lits simples, idéale pour les enfants ou deux voyageurs.",
    photos: ["appartement-chambre-simples-1", "appartement-chambre-simples-2"] as const,
    details: [
      { label: "Couchage", valeur: "2 lits simples" },
      { label: "Literie", valeur: "Literie neuve" },
      { label: "Linge", valeur: "Linge de lit fourni" },
    ],
  },
  {
    id: "salle-de-bain",
    titre: "La salle de bain",
    intro:
      "Une salle de bain avec baignoire et douche, et des WC séparés pour plus de confort à plusieurs.",
    photos: ["appartement-salle-de-bain-1"] as const,
    details: [
      { label: "Bain et douche", valeur: "Baignoire avec douche" },
      { label: "WC", valeur: "WC séparés" },
      { label: "Linge", valeur: "Serviettes fournies" },
    ],
  },
  {
    id: "balcon",
    titre: "Le balcon",
    intro:
      "Un balcon spacieux, ouvert à la fois sur la cuisine et sur le salon, exposé plein sud et avec une vue dégagée : le meilleur endroit pour le petit-déjeuner.",
    photos: ["appartement-balcon-1", "appartement-balcon-2", "appartement-balcon-3"] as const,
    details: [
      { label: "Accès", valeur: "Ouvert sur la cuisine et le salon" },
      { label: "Mobilier", valeur: "Table pour 2 personnes et 2 chaises" },
      { label: "Exposition", valeur: "Plein sud" },
      { label: "Vue", valeur: "Vue dégagée" },
    ],
  },
];

/** ÉQUIPEMENTS SUPPLÉMENTAIRES DE L'APPARTEMENT */
export const equipementsSupplementaires = [
  { label: "Raquettes de tennis et de ping-pong" },
  { label: "Boules de pétanque" },
  { label: "Télévision" },
  { label: "Chauffage électrique" },
  { label: "Nombreux rangements — grands placards intégrés dans le salon et les deux chambres" },
  { label: "2 places de parking" },
  { label: "Lit parapluie" },
  { label: "Chaise bébé" },
  { label: "Extincteur" },
];

/** LES ALENTOURS — une destination par emplacement photo indépendant */
export const destinations = [
  {
    id: "honfleur",
    nom: "Honfleur",
    photo: "alentours-honfleur-1" as const,
    description:
      "Le Vieux Bassin, ses maisons hautes et colorées, les ruelles pavées, les galeries d'artistes et les terrasses au bord de l'eau, à quelques minutes seulement.",
  },
  {
    id: "etretat",
    nom: "Étretat",
    photo: "alentours-etretat-1" as const,
    description:
      "Les falaises blanches, l'Aiguille et les arches naturelles qui ont inspiré les peintres impressionnistes : une belle excursion à la journée.",
  },
  {
    id: "deauville",
    nom: "Deauville",
    photo: "alentours-deauville-1" as const,
    description:
      "Les Planches, la grande plage, les villas élégantes et les boutiques d'une station balnéaire emblématique de la Côte Fleurie.",
  },
  {
    id: "trouville",
    nom: "Trouville-sur-Mer",
    photo: "alentours-trouville-1" as const,
    description:
      "Plus familiale et animée que sa voisine : un port de pêche, un marché aux poissons et une longue plage de sable.",
  },
  {
    id: "pont-de-normandie",
    nom: "Pont de Normandie",
    photo: "alentours-pont-normandie-1" as const,
    description:
      "L'immense pont à haubans qui enjambe l'estuaire de la Seine, spectaculaire à traverser comme à observer depuis les berges.",
  },
  {
    id: "plage-du-butin",
    nom: "Plage du Butin",
    photo: "alentours-plage-butin-1" as const,
    description:
      "La plage de Honfleur, au pied des collines : idéale pour une promenade au bord de l'eau et pour regarder passer les bateaux.",
  },
  {
    id: "mont-joli",
    nom: "Mont-Joli",
    photo: "alentours-mont-joli-1" as const,
    description:
      "Le belvédère qui domine Honfleur : un panorama sur les toits de la ville, le port et l'estuaire de la Seine.",
  },
  {
    id: "route-des-chaumieres",
    nom: "Route des Chaumières",
    photo: "alentours-route-chaumieres-1" as const,
    description:
      "Un itinéraire de campagne entre chaumières à colombages, vergers et petits villages typiques du Pays d'Auge et du Marais.",
  },
  {
    id: "marais-vernier",
    nom: "Marais-Vernier",
    photo: "alentours-marais-vernier-1" as const,
    description:
      "Un vaste espace naturel de prairies humides et d'étangs, parcouru de sentiers, où l'on observe chevaux, vaches rustiques et oiseaux.",
  },
];

/** Carte OpenStreetMap centrée sur Honfleur / La Rivière-Saint-Sauveur */
export const carte = {
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=0.1750%2C49.3980%2C0.2900%2C49.4460&layer=mapnik&marker=49.4180%2C0.2320",
  lienExterne: "https://www.openstreetmap.org/#map=14/49.4180/0.2320",
};
