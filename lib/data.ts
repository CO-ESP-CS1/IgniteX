export const brand = {
  name: "IgniteX",
  trademark: "IgniteX™",
  slogan: "Au delà des frontières",
  tagline: "Réveille la lumière qui est en toi",
  url: "https://www.ignitex.app",
  email: "contact@ignitex.app",
};

export type Partner = {
  id: string;
  name: string;
  role: string;
  description: string;
  teaser: string;
  image: string;
  about: string;
  mission: string;
  contributions: string[];
  visionary: {
    name: string;
    title: string;
    image: string;
    thoughts: string;
  };
};

export const partners: Partner[] = [
  {
    id: "pejosoft",
    name: "PEJOSOFT CORPORATION",
    role: "Développement Backend & Android",
    description:
      "Expertise backend robuste et applications Android natives pour des systèmes à fort volume.",
    teaser:
      "PEJOSOFT pose les fondations techniques des projets IgniteX™ : serveurs solides, logique métier et applications Android prêtes pour des milliers d'utilisateurs.",
    image: "/images/groupe/pejosoft.png",
    about:
      "PEJOSOFT CORPORATION est le pilier backend et Android du groupe IgniteX™. L'entité conçoit l'architecture serveur, la logique métier et les applications Android qui font tourner nos systèmes les plus exigeants — de CCB Connect à Soleil d'Afrik. Chaque projet IgniteX™ qui nécessite performance, sécurité et montée en charge passe par l'expertise PEJOSOFT : bases de données, APIs, authentification, notifications et déploiement en production.",
    mission:
      "Au sein d'IgniteX™, PEJOSOFT garantit que chaque système repose sur une base technique fiable, sécurisée et capable de grandir avec ses utilisateurs.",
    contributions: [
      "Architecture backend et APIs pour les projets IgniteX™",
      "Applications Android natives et cross-platform",
      "Sécurité, authentification et gestion des accès",
      "Intégration d'IgniteX™ Platform v6.9 côté serveur",
      "Mise en production et maintenance des systèmes livrés",
    ],
    visionary: {
      name: "POHO Eliezer Omar",
      title: "Fondateur — PEJOSOFT CORPORATION",
      image: "/images/groupe/pejosoft-poho.png",
      thoughts:
        "« Chez PEJOSOFT, nous croyons qu'un système IgniteX™ ne vaut que par la solidité de ce qu'on ne voit pas : le backend. Notre rôle est de construire des fondations sur lesquelles des milliers de personnes peuvent s'appuyer chaque jour, sans interruption. Rejoindre IgniteX™, c'était mettre cette exigence au service d'une vision plus grande — des projets qui dépassent les frontières et qui durent. »",
    },
  },
  {
    id: "jm-technologies",
    name: "JM TECHNOLOGIES",
    role: "Développement Backend & Web",
    description:
      "Architecture web moderne, interfaces professionnelles et expériences en ligne soignées.",
    teaser:
      "JM TECHNOLOGIES donne forme au web IgniteX™ : sites vitrines, portails clients, tableaux de bord et interfaces claires pour chaque projet livré.",
    image: "/images/placeholder.jpg",
    about:
      "JM TECHNOLOGIES porte la dimension web du groupe IgniteX™. L'entité développe les sites, portails et interfaces en ligne qui complètent nos applications mobiles et nos systèmes métiers — de la vitrine IgniteX™ aux espaces d'administration de nos clients. JM TECHNOLOGIES veille à ce que chaque projet IgniteX™ soit accessible, responsive et agréable à utiliser, que ce soit sur ordinateur, tablette ou téléphone.",
    mission:
      "JM TECHNOLOGIES rend visible et utilisable la puissance des systèmes IgniteX™ — pour les clients finaux comme pour les équipes qui les administrent.",
    contributions: [
      "Sites vitrines et portails web IgniteX™",
      "Interfaces d'administration et tableaux de bord",
      "Intégration frontend avec les APIs du groupe",
      "Design responsive et expérience utilisateur soignée",
      "Déploiement web et optimisation des performances",
    ],
    visionary: {
      name: "Moussounda Jacques",
      title: "Fondateur — JM TECHNOLOGIES",
      image: "/images/placeholder.jpg",
      thoughts:
        "« Le web, c'est la première impression qu'on donne au monde. Avec IgniteX™, nous voulons que chaque interface reflète le sérieux de nos systèmes : claire, rapide, professionnelle. JM TECHNOLOGIES existe pour que la technologie la plus avancée reste simple à comprendre — pour un client à Paris comme pour une communauté en Afrique. »",
    },
  },
  {
    id: "bkt-solutions",
    name: "BKT SOLUTIONS",
    role: "Développement Backend & iOS",
    description:
      "Expériences mobiles iOS premium et intégrations système de haut niveau.",
    teaser:
      "BKT SOLUTIONS apporte l'excellence iOS à l'écosystème IgniteX™ : applications fluides, intégrations Apple et expériences mobiles haut de gamme.",
    image: "/images/placeholder.jpg",
    about:
      "BKT SOLUTIONS est la branche iOS et intégrations avancées du groupe IgniteX™. L'entité développe les applications iPhone et iPad qui complètent l'offre Android de PEJOSOFT, en garantissant la même qualité d'expérience sur l'écosystème Apple. BKT SOLUTIONS intervient aussi sur les intégrations techniques exigeantes — paiements, notifications, services cloud — pour que chaque projet IgniteX™ fonctionne parfaitement sur tous les appareils.",
    mission:
      "BKT SOLUTIONS assure que les projets IgniteX™ offrent une expérience iOS au même niveau d'exigence que le reste de l'écosystème du groupe.",
    contributions: [
      "Applications iOS natives pour les projets IgniteX™",
      "Intégrations Apple (notifications, paiements, services)",
      "Backend complémentaire et APIs spécialisées",
      "Tests et validation sur l'écosystème iPhone/iPad",
      "Support technique iOS en production",
    ],
    visionary: {
      name: "Bakouetila Vivaldi",
      title: "Fondateur — BKT SOLUTIONS",
      image: "/images/placeholder.jpg",
      thoughts:
        "« L'iPhone est entre les mains de millions de personnes. Avec BKT SOLUTIONS, nous voulons que les projets IgniteX™ soient à la hauteur de cette attente : fluides, élégants, fiables. Rejoindre le groupe IgniteX™, c'est partager une ambition — construire des outils qui respectent l'utilisateur, où qu'il se trouve et quel que soit son téléphone. »",
    },
  },
];

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((p) => p.id === id);
}

export const stats = [
  { value: "29", label: "Projets réalisés", suffix: "+" },
  { value: "489", label: "Modules métier livrés", suffix: "+" },
  { value: "920", label: "Écrans & interfaces", suffix: "+" },
  { value: "6.9", label: "Version Plateforme", suffix: "" },
];

export const pillars = [
  {
    title: "Performance native",
    description:
      "Moteur algorithmique propriétaire : flux de données intelligents, requêtes optimisées et orchestration automatisée des processus métier.",
  },
  {
    title: "Sécurité & gouvernance",
    description:
      "JWT, RBAC, modération, validation manuelle, chiffrement et traçabilité — la confiance au cœur de chaque système livré.",
  },
  {
    title: "Terrain africain",
    description:
      "Mobile Money, mode hors ligne, connectivité intermittente et devises locales intégrées nativement, pas en option.",
  },
  {
    title: "Livraison vérifiable",
    description:
      "Jalons contractuels, documentation complète, tests automatisés et déploiement production — zéro prototype jetable.",
  },
];

export type ProjectStatus = "production" | "en-cours" | "proposition";

export type Project = {
  id: string;
  name: string;
  image?: string;
  client?: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  statusLabel: string;
  metrics: { label: string; value: string }[];
  featured?: boolean;
};

export const platformVersion = "6.9";

export const projects: Project[] = [
  {
    id: "ccb-connect",
    name: "CCB Connect",
    image: "/images/projects/ccb-connect.png",
    client: "Communauté des Chrétiens Bénis (CCB)",
    tagline: "L'application officielle d'une communauté de foi internationale",
    description:
      "CCB Connect est l'application mobile officielle de la Communauté des Chrétiens Bénis. Elle permet aux membres de suivre les cultes en direct, d'échanger entre eux, de consulter la Bible, de gérer leurs assemblées et leurs cotisations, où qu'ils se trouvent dans le monde. Le système est en production et s'appuie sur IgniteX™ Platform v6.9 pour garantir performance, sécurité et évolutivité.",
    highlights: [
      "Cultes et événements en direct accessibles depuis le téléphone",
      "Messagerie fiable, même avec une connexion instable",
      "Bible, annonces et vie de communauté au même endroit",
      "Gestion des assemblées, cotisations et rôles des responsables",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Application mobile",
      "Portail d'administration",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Membres connectés", value: "10 000+" },
      { label: "Pays couverts", value: "12+" },
      { label: "Fonctionnalités", value: "200+" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "soleil-d-afrik",
    name: "Soleil d'Afrik",
    image: "/images/projects/soleil-d-afrik.png",
    client: "Librairie numérique",
    tagline: "Vendre et protéger des livres numériques en Afrique et à l'international",
    description:
      "Soleil d'Afrik est une librairie numérique complète : catalogue en ligne, achat par Mobile Money ou virement, lecture sécurisée des ouvrages et espace d'administration pour les éditeurs. La solution est en production et intègre IgniteX™ Platform v6.9 pour la gestion des contenus, des paiements et de la protection des livres.",
    highlights: [
      "Achat simple par téléphone mobile ou virement bancaire",
      "Lecture en ligne protégée contre la copie non autorisée",
      "Espace éditeur pour publier et suivre les ventes",
      "Recherche rapide et catalogue multilingue",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Boutique en ligne",
      "Espace éditeur",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Ouvrages gérés", value: "500+" },
      { label: "Devises acceptées", value: "15+" },
      { label: "Canaux de paiement", value: "3+" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "gms-school",
    name: "GMS School — SGSI",
    image: "/images/projects/gms-school.png",
    client: "GMS SCHOOL",
    tagline: "Gérer une école sur plusieurs sites, du préscolaire au collège",
    description:
      "GMS School est un système de gestion scolaire pour un établissement privé présent sur plusieurs sites. Il couvre les notes, les absences, la vie scolaire, les paiements des parents et le suivi de direction — y compris hors connexion Internet sur chaque site. Le système est en production et fonctionne avec IgniteX™ Platform v6.9.",
    highlights: [
      "Fonctionne sur chaque site, même sans Internet",
      "Parents informés des notes, absences et paiements sur leur téléphone",
      "Tableau de bord pour la direction sur tous les établissements",
      "Suivi des élèves et activités parascolaires",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Application école",
      "Portail parents",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Sites gérés", value: "8+" },
      { label: "Élèves suivis", value: "2 500+" },
      { label: "Niveaux scolaires", value: "3" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "boutique-paris",
    name: "La Boutique Parisienne",
    image: "/images/projects/boutique-paris.png",
    client: "Commerce en ligne — Paris, France",
    tagline: "Vendre des articles en ligne, avec paiement par virement bancaire",
    description:
      "La Boutique Parisienne est une plateforme e-commerce déployée en production pour une entreprise basée à Paris. Les clients parcourent le catalogue, passent commande en quelques clics et règlent par virement bancaire en toute simplicité. L'équipe côté siège suit les ventes, prépare les expéditions et gère le stock depuis un espace d'administration clair et fiable. Le système s'appuie sur IgniteX™ Platform v6.9 pour assurer sécurité, fluidité et évolutivité au quotidien.",
    highlights: [
      "Catalogue en ligne soigné, accessible depuis ordinateur et mobile",
      "Commande guidée et confirmation claire pour chaque achat",
      "Paiement par virement bancaire, adapté à une clientèle en France et en Europe",
      "Suivi des commandes, des stocks et des livraisons depuis Paris",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Boutique en ligne",
      "Paiement par virement",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Articles en ligne", value: "350+" },
      { label: "Commandes traitées", value: "1 200+" },
      { label: "Siège", value: "Paris" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "pos-restaurant",
    name: "Restaurant POS",
    image: "/images/projects/new-moon.png",
    client: "New Moon Fast-Food",
    tagline: "Une caisse fiable pour enregistrer chaque commande sans perte",
    description:
      "Restaurant POS est un système de caisse pour fast-food à fort passage. Chaque commande est enregistrée, payée avant impression, puis transmise automatiquement à la cuisine et au BBQ. Les responsables disposent de rapports clairs pour contrôler les ventes. Le système est en production et s'appuie sur IgniteX™ Platform v6.9.",
    highlights: [
      "Aucune commande imprimée sans paiement enregistré",
      "Tickets cuisine et BBQ envoyés automatiquement",
      "Historique complet des ventes et des annulations",
      "Rapports journaliers par caissier et par produit",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Caisse tablette",
      "Écrans cuisine",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Postes de vente", value: "5+" },
      { label: "Commandes / jour", value: "800+" },
      { label: "Caissiers formés", value: "12+" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "initiation-programmation",
    name: "Initiation Programmation",
    image: "/images/projects/initiation-programmation.png",
    client: "Programme éducatif IgniteX™",
    tagline: "Initier les jeunes à la création d'applications utiles",
    description:
      "Initiation Programmation est un programme de formation porté par IgniteX™ pour apprendre les bases de la programmation aux jeunes : comprendre la logique, créer de petits projets concrets et découvrir les métiers du numérique. Le programme est actif en production et s'appuie sur IgniteX™ Platform v6.9 pour organiser les parcours et le suivi des participants.",
    highlights: [
      "Cours progressifs, accessibles aux débutants",
      "Projets pratiques encadrés par des professionnels",
      "Lien avec le programme C-REPORTERS de la CCB",
      "Orientation vers les métiers du développement",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Programme de formation",
      "Suivi des participants",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Jeunes formés", value: "150+" },
      { label: "Ateliers réalisés", value: "40+" },
      { label: "Mentors actifs", value: "15+" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "loatekombo",
    name: "Loatékombo ONG",
    image: "/images/projects/loatekombo.png",
    client: "Loatékombo Association Culturelle",
    tagline: "Culture, santé publique et éducation au service des communautés",
    description:
      "Loatékombo Association Culturelle est une organisation créée en 2018 qui utilise l'art et la culture pour transformer la vie des communautés — éducation, santé, accès à l'eau et cohésion sociale. Nous avons conçu et déployé leur plateforme numérique sur loatekombo.org : vitrine des activités, concours nationaux de poésie, caravanes de sensibilisation (VIH/SIDA, paludisme, antiviolence) et mise en valeur de leur engagement culturel à Brazzaville et au Congo. Le site est en production et reflète la devise de l'association : S'inspirer, innover, développer.",
    highlights: [
      "Site vitrine des actions culturelles et communautaires de l'ONG",
      "Présentation des concours nationaux de poésie et cérémonies des lumières",
      "Suivi des campagnes de sensibilisation en milieu scolaire",
      "Valorisation des partenariats (PNLS, UNICEF, CRS et autres)",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Site web institutionnel",
      "Vitrine des activités",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "production",
    statusLabel: "En production",
    metrics: [
      { label: "Depuis", value: "2018" },
      { label: "Éditions concours", value: "4+" },
      { label: "Domaines d'action", value: "4" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "ignitex-platform-v7",
    name: "IgniteX™ Platform v7",
    image: "/images/projects/ignitex-platform-v7.png",
    client: "IgniteX™",
    tagline: "La prochaine évolution de notre moteur, actuellement en développement",
    description:
      "Après le succès de la version 6.9 — d'abord éprouvée sur CCB Connect puis déployée sur d'autres systèmes — les équipes IgniteX™ travaillent depuis un mois sur la version 7. L'objectif : aller plus loin en rendant le moteur plus accessible aux développeurs, intégrateurs et organisations qui souhaitent s'appuyer sur IgniteX™ pour construire leurs propres solutions.",
    highlights: [
      "Suite logique de la v6.9, validée sur le terrain avec CCB Connect",
      "Documentation et ressources pensées pour les équipes techniques",
      "Accès progressif aux capacités du moteur pour les partenaires",
      "Développement actif depuis un mois par les trois entités du groupe",
      "Préparation d'un portail public autour de la plateforme",
    ],
    stack: [
      "Moteur v7",
      "Portail développeurs",
      "Documentation",
    ],
    status: "en-cours",
    statusLabel: "En développement",
    metrics: [
      { label: "Durée de dev", value: "1 mois+" },
      { label: "Équipes mobilisées", value: "3" },
      { label: "Version cible", value: "v7" },
      { label: "Public visé", value: "Devs & intégrateurs" },
    ],
    featured: true,
  },
  {
    id: "mopesi-ussd",
    name: "MOPESI® USSD",
    image: "/images/projects/mopesi-ussd.png",
    client: "MOPESI®",
    tagline:
      "Rendre les services d'entreprise accessibles par simple appel, sans Internet",
    description:
      "MOPESI® USSD est une plateforme mutualisée qui permet aux entreprises d'offrir leurs services sur mobile via un code USSD partagé — menus personnalisés, connexion à leurs propres systèmes et tableau de bord pour suivre l'activité. Sans smartphone ni connexion Internet, chaque utilisateur compose le code, navigue dans un menu dédié à l'entreprise et obtient une réponse en temps réel. La solution réduit les délais et les coûts liés à l'obtention d'un code USSD individuel auprès des opérateurs, tout en laissant chaque entreprise maître de ses données.",
    highlights: [
      "Plusieurs entreprises hébergées sur un même code USSD mutualisé",
      "Menus et parcours personnalisés pour chaque client (abonnements, paiements, suivi…)",
      "Connexion sécurisée aux systèmes internes de l'entreprise",
      "Tableau de bord web pour gérer les menus, consulter les statistiques et les sessions",
      "Journalisation complète des sessions et maintenance assurée par MOPESI®",
    ],
    stack: [
      "Services USSD",
      "Intégration APIs entreprises",
      "Tableau de bord",
    ],
    status: "en-cours",
    statusLabel: "Pilotes en cours",
    metrics: [
      { label: "Sessions USSD", value: "28 000+" },
      { label: "Entreprises pilotes", value: "8+" },
      { label: "Utilisateurs", value: "12 000+" },
      { label: "Partenaires", value: "Opérateurs" },
    ],
    featured: true,
  },
  {
    id: "harmathon-congo",
    name: "L'Harmathon Congo",
    image: "/images/projects/harmathon-congo.png",
    client: "Éditions L'Harmattan Congo",
    tagline:
      "Relier culture, écriture et innovation numérique pour la jeunesse congolaise",
    description:
      "L'Harmathon Congo est une initiative portée par les Éditions L'Harmattan Congo à Brazzaville — maison d'édition implantée depuis 2009 et déjà active dans la promotion du livre et de la jeunesse à travers le Grand Prix littéraire de la jeunesse et le Grand Prix des auteurs francophones. Nous développons pour eux un système numérique dédié : inscriptions des participants, dépôt et suivi des candidatures, organisation des éditions et des concours, espace jury et tableau de bord pour les équipes. L'objectif est de donner à cette rencontre entre culture et numérique les mêmes outils de rigueur que nos autres systèmes métiers, en s'appuyant sur IgniteX™ Platform v6.9.",
    highlights: [
      "Inscriptions en ligne pour jeunes auteurs, créateurs et équipes participantes",
      "Dépôt sécurisé des textes, projets et candidatures aux concours",
      "Organisation des éditions, des phases de sélection et du palmarès",
      "Espace jury et tableau de bord pour les équipes L'Harmattan Congo",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Portail événementiel",
      "Gestion des concours",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "en-cours",
    statusLabel: "En développement",
    metrics: [
      { label: "Villes couvertes", value: "5+" },
      { label: "Candidatures (GPJ)", value: "1 000+" },
      { label: "Public visé", value: "< 23 ans" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
  {
    id: "parc-zoologique-brazzaville",
    name: "Parc Zoologique de Brazzaville",
    image: "/images/projects/parc-zoologique-brazzaville.png",
    client: "Parc zoologique de Brazzaville",
    tagline: "Piloter toutes les activités du zoo depuis un seul système",
    description:
      "Système de gestion complet pour le parc zoologique de Brazzaville : suivi des animaux et de leur santé, gestion des visiteurs et des billets, planification des soins et des activités, suivi du personnel et des ressources du site. Une solution métier conçue pour le terrain, en cours de développement avec IgniteX™ Platform v6.9.",
    highlights: [
      "Fiche et suivi de chaque animal et de son état de santé",
      "Gestion des visites, billets et flux de visiteurs",
      "Planification des soins, repas et activités du parc",
      "Tableau de bord pour la direction et les équipes sur site",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Gestion du parc",
      "Suivi des animaux",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "en-cours",
    statusLabel: "En développement",
    metrics: [
      { label: "Espèces suivies", value: "120+" },
      { label: "Activités gérées", value: "15+" },
      { label: "Équipes sur site", value: "25+" },
      { label: "Plateforme", value: "v6.9" },
    ],
    featured: true,
  },
];

export const platform = {
  version: "6.9",
  title: "IgniteX™ Platform",
  subtitle: "Le moteur propriétaire qui propulse nos systèmes",
  description:
    "IgniteX™ Platform est un moteur interne propriétaire développé par le groupe IgniteX™, conçu pour accélérer et optimiser la conception des systèmes d'information. Loin d'être un simple boilerplate, c'est un véritable moteur algorithmique qui embarque des mécanismes avancés d'optimisation.",
  history:
    "La version 6.9 a commencé par équiper CCB Connect, notre premier grand système déployé en production, avant de s'étendre progressivement à d'autres projets — Soleil d'Afrik, GMS School, Restaurant POS et bien d'autres. Chaque nouveau système profite des acquis et de la maturité acquise sur le terrain.",
  features: [
    "Gestion intelligente des flux de données",
    "Traitement optimisé des requêtes",
    "Orchestration automatisée des processus métier",
    "Architecture robuste injectée dans chaque système",
    "Réduction drastique des cycles de développement",
    "Performance, sécurité et scalabilité dès le départ",
  ],
  powered: [
    "Applications mobiles",
    "APIs & backends",
    "Portails web",
    "Systèmes métiers",
  ],
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/groupe", label: "Le groupe" },
  { href: "/plateforme", label: "Plateforme" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export const techStack = [
  "NestJS",
  "Next.js",
  "React.js",
  "React Native",
  "Flutter",
  "Kotlin",
  "Java Spring Boot",
  "Django",
  "PHP",
  "PostgreSQL",
];
