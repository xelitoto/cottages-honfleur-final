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
      { label: "Assises", valeur: "Canapé et deux fauteuils en osier" },
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
      { label: "Équipement", valeur: "Vaisselle et ustensiles" },
      { label: "Café", valeur: "Machine Nespresso et cafetière" },
    ],
  },
  {
    id: "chambre-double",
    titre: "La chambre avec lit double",
    intro:
      "Une chambre calme et agréable, idéale pour se reposer après une journée de découverte de la Normandie.",
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
      "Une salle de bain avec baignoire et des WC séparés pour plus de confort à plusieurs.",
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
    id: "plage-du-butin",
    nom: "Plage du Butin",
    photo: "alentours-plage-butin-1" as const,
    description:
      "La plage de Honfleur, au pied des collines : idéale pour une promenade au bord de l'eau et pour regarder passer les bateaux.",
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
    id: "pont-audemer",
    nom: "Pont-Audemer",
    photo: "alentours-pont-audemer-1" as const,
    description:
      "Une charmante cité au bord de la Risle, surnommée la « Venise normande ». Ses canaux, ses petites rues et ses maisons à colombages invitent à une agréable promenade.",
  },
  {
    id: "fecamp",
    nom: "Fécamp",
    photo: "alentours-fecamp-1" as const,
    description:
      "Entre mer et falaises, Fécamp séduit par son port, son front de mer et son riche patrimoine. Une belle escapade pour découvrir la côte normande et ses paysages.",
  },
  {
    id: "cabourg",
    nom: "Cabourg",
    photo: "alentours-cabourg-1" as const,
    description:
      "Station balnéaire élégante au charme intemporel, Cabourg offre une longue promenade en bord de mer, de belles villas et une atmosphère paisible.",
  },
  {
    id: "houlgate",
    nom: "Houlgate",
    photo: "alentours-houlgate-1" as const,
    description:
      "Avec ses villas Belle Époque, sa grande plage et les falaises des Vaches Noires à proximité, Houlgate est une station balnéaire pleine de charme.",
  },
  {
    id: "ouistreham",
    nom: "Ouistreham",
    photo: "alentours-ouistreham-1" as const,
    description:
      "Au bord de la Manche, Ouistreham offre une grande plage de sable, un port animé et de belles balades en bord de mer.",
  },
  {
    id: "plages-debarquement",
    nom: "Les plages du Débarquement",
    photo: "alentours-plages-debarquement-1" as const,
    description:
      "Un lieu chargé d’histoire où se mêlent mémoire et paysages exceptionnels. D’Omaha Beach aux autres plages du Débarquement, une découverte historique unique.",
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
    id: "pont-de-normandie",
    nom: "Pont de Normandie",
    photo: "alentours-pont-normandie-1" as const,
    description:
      "L'immense pont à haubans qui enjambe l'estuaire de la Seine, spectaculaire à traverser comme à observer depuis les berges.",
  },
];

/** Carte OpenStreetMap centrée sur Honfleur / La Rivière-Saint-Sauveur */
export const carte = {
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=0.1750%2C49.3980%2C0.2900%2C49.4460&layer=mapnik&marker=49.4180%2C0.2320",
  lienExterne: "https://www.openstreetmap.org/#map=14/49.4180/0.2320",
};
