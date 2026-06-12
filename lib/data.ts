export const brand = {
  name: "IgniteX",
  trademark: "IgniteX™",
  slogan: "Au delà des frontières",
  tagline: "Réveille la lumière qui est en toi",
  pitch:
    "Studio de développement logiciel : applications mobiles, sites web, outils d'automatisation, plateformes métiers, ERP et systèmes sur mesure, livrés en production.",
  pitchShort: "Studio de développement logiciel & systèmes bas niveau",
  url: "https://www.ignitex.app",
  email: "ignitex.info@gmail.com",
  phone: "05 694 99 45",
  phoneTel: "+242056949945",
  whatsapp: "https://wa.me/242056949945",
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
    role: "Backend, Android & ML Engineering",
    description:
      "Architecture backend, applications Android natives et ML Engineering pour des systèmes à fort volume et des fonctionnalités intelligentes en production.",
    teaser:
      "PEJOSOFT pose les fondations techniques des projets IgniteX™ : serveurs solides, logique métier, applications Android et modèles ML intégrés aux services métiers.",
    image: "/images/groupe/pejosoft.png",
    about:
      "PEJOSOFT CORPORATION est le pilier backend et Android du groupe IgniteX™. L'entité conçoit l'architecture serveur, la logique métier et les applications Android qui font tourner nos systèmes les plus exigeants, de CCB Connect à Soleil d'Afrik. Chaque projet IgniteX™ qui nécessite performance, sécurité et montée en charge passe par l'expertise PEJOSOFT : bases de données, APIs, authentification, notifications et déploiement en production. PEJOSOFT développe aussi une expertise en ML Engineering : préparation des données, entraînement et intégration de modèles dans les APIs et services métiers (recommandations, scoring, détection d'anomalies ou classification) pour des fonctionnalités intelligentes fiables en production.",
    mission:
      "Au sein d'IgniteX™, PEJOSOFT garantit que chaque système repose sur une base technique fiable, sécurisée et capable de grandir avec ses utilisateurs, y compris lorsque des modèles d'apprentissage automatique viennent enrichir le produit.",
    contributions: [
      "Architecture backend et APIs pour les projets IgniteX™",
      "Applications Android natives et cross-platform",
      "ML Engineering : pipelines de données, entraînement et déploiement de modèles",
      "Intégration de modèles ML dans les services backend (inférence, scoring, recommandations)",
      "Sécurité, authentification et gestion des accès",
      "Intégration d'IgniteX™ Platform v6.9 côté serveur",
      "Mise en production et maintenance des systèmes livrés",
    ],
    visionary: {
      name: "POHO Eliezer Omar",
      title: "Fondateur de PEJOSOFT CORPORATION",
      image: "/images/groupe/pejosoft-poho.png",
      thoughts:
        "« Chez PEJOSOFT, nous croyons qu'un système IgniteX™ ne vaut que par la solidité de ce qu'on ne voit pas : le backend. Notre rôle est de construire des fondations sur lesquelles des milliers de personnes peuvent s'appuyer chaque jour, sans interruption. Rejoindre IgniteX™, c'était mettre cette exigence au service d'une vision plus grande : des projets qui dépassent les frontières et qui durent. »",
    },
  },
  {
    id: "jm-technologies",
    name: "JM TECHNOLOGIES",
    role: "Backend, Web & DevOps / SRE",
    description:
      "Architecture web moderne, interfaces professionnelles et DevOps / SRE pour des déploiements fiables et des systèmes toujours disponibles.",
    teaser:
      "JM TECHNOLOGIES donne forme au web IgniteX™ : sites, portails, tableaux de bord et pipelines de déploiement pour chaque projet livré.",
    image: "/images/groupe/jm-technologies.png",
    about:
      "JM TECHNOLOGIES porte la dimension web du groupe IgniteX™. L'entité développe les sites, portails et interfaces en ligne qui complètent nos applications mobiles et nos systèmes métiers, de la vitrine IgniteX™ aux espaces d'administration de nos clients. JM TECHNOLOGIES veille à ce que chaque projet IgniteX™ soit accessible, responsive et agréable à utiliser, que ce soit sur ordinateur, tablette ou téléphone. L'entité assure aussi l'exploitation DevOps / SRE : pipelines CI/CD, déploiements automatisés, supervision des services, gestion des incidents et fiabilité des environnements de production.",
    mission:
      "JM TECHNOLOGIES rend visible et utilisable la puissance des systèmes IgniteX™, pour les clients finaux comme pour les équipes qui les administrent, avec des plateformes stables, surveillées et prêtes à évoluer.",
    contributions: [
      "Sites vitrines et portails web IgniteX™",
      "Interfaces d'administration et tableaux de bord",
      "DevOps / SRE : pipelines CI/CD et déploiements automatisés",
      "Supervision, alerting et gestion des incidents en production",
      "Intégration frontend avec les APIs du groupe",
      "Design responsive et expérience utilisateur soignée",
      "Optimisation des performances et haute disponibilité",
    ],
    visionary: {
      name: "Moussounda Jacques",
      title: "Fondateur de JM TECHNOLOGIES",
      image: "/images/groupe/jm-technologies-jacques.png",
      thoughts:
        "« Le web, c'est la première impression qu'on donne au monde. Avec IgniteX™, nous voulons que chaque interface reflète le sérieux de nos systèmes : claire, rapide, professionnelle. JM TECHNOLOGIES existe pour que la technologie la plus avancée reste simple à comprendre, pour un client à Paris comme pour une communauté en Afrique. »",
    },
  },
  {
    id: "bkt-labs",
    name: "BKT Labs",
    role: "Backend, iOS & LLMOps / MLOps",
    description:
      "Applications iOS premium, intégrations système et industrialisation LLMOps / MLOps pour des modèles fiables en production.",
    teaser:
      "BKT Labs apporte l'excellence iOS et l'exploitation IA à l'écosystème IgniteX™ : apps fluides, intégrations Apple et modèles surveillés en production.",
    image: "/images/groupe/bkt-labs.png",
    about:
      "BKT Labs est la branche iOS et intégrations avancées du groupe IgniteX™. L'entité développe les applications iPhone et iPad qui complètent l'offre Android de PEJOSOFT, en garantissant la même qualité d'expérience sur l'écosystème Apple. BKT Labs intervient aussi sur les intégrations techniques exigeantes (paiements, notifications, services cloud) pour que chaque projet IgniteX™ fonctionne parfaitement sur tous les appareils. BKT Labs porte en outre l'expertise LLMOps et MLOps du groupe : industrialisation des modèles, pipelines de déploiement, supervision en production, versioning des prompts et des modèles, ainsi que fiabilité et observabilité des services IA au quotidien.",
    mission:
      "BKT Labs assure que les projets IgniteX™ offrent une expérience iOS au même niveau d'exigence que le reste de l'écosystème du groupe, et que les capacités IA déployées restent stables, surveillées et évolutives en production.",
    contributions: [
      "Applications iOS natives pour les projets IgniteX™",
      "Intégrations Apple (notifications, paiements, services)",
      "LLMOps / MLOps : déploiement, supervision et mise à jour des modèles en production",
      "Pipelines CI/CD pour modèles, prompts et services d'inférence",
      "Monitoring, alerting et fiabilité des capacités IA livrées",
      "Backend complémentaire et APIs spécialisées",
      "Tests et validation sur l'écosystème iPhone/iPad",
      "Support technique iOS en production",
    ],
    visionary: {
      name: "Bakouetila Vivaldi",
      title: "Fondateur de BKT Labs",
      image: "/images/groupe/bkt-labs-vivaldi.png",
      thoughts:
        "« L'iPhone est entre les mains de millions de personnes. Avec BKT Labs, nous voulons que les projets IgniteX™ soient à la hauteur de cette attente : fluides, élégants, fiables. Rejoindre le groupe IgniteX™, c'est partager une ambition : construire des outils qui respectent l'utilisateur, où qu'il se trouve et quel que soit son téléphone. »",
    },
  },
];

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((p) => p.id === id);
}

export type StatItem = {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
};

export const stats: StatItem[] = [
  { value: 29, label: "Projets réalisés", suffix: "+" },
  { value: 489, label: "Modules métier livrés", suffix: "+" },
  { value: 920, label: "Écrans & interfaces", suffix: "+" },
  { value: 6.9, label: "Version Plateforme", decimals: 1 },
];

export type TimelineEvent = {
  id: string;
  phase: string;
  title: string;
  date: string;
  description: string;
  highlights: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "foundations",
    phase: "01",
    title: "Premiers systèmes en production",
    date: "2018 — 2022",
    description:
      "Les entités du groupe livrent leurs premiers grands systèmes : applications communautaires, outils éducatifs et plateformes métiers déployés sur le terrain africain et international.",
    highlights: [
      "Loatékombo ONG — outils numériques",
      "L'Harmattan Congo — présence terrain",
      "Premiers backends et apps mobiles en production",
    ],
  },
  {
    id: "platform-v69",
    phase: "02",
    title: "Naissance d'IgniteX™ Platform v6.9",
    date: "2023 — 2025",
    description:
      "Le moteur propriétaire IgniteX™ Platform v6.9 équipe CCB Connect puis s'étend à Soleil d'Afrik, GMS School, Restaurant POS et d'autres systèmes livrés en production.",
    highlights: [
      "CCB Connect — 10 000+ membres connectés",
      "Soleil d'Afrik — librairie numérique multidevises",
      "GMS School — gestion scolaire multi-sites",
    ],
  },
  {
    id: "platform-v7",
    phase: "03",
    title: "IgniteX™ Platform v7 & expansion",
    date: "2026",
    description:
      "La nouvelle génération de la plateforme est en développement. Le groupe consolide 29+ projets livrés, 489+ modules métiers et un réseau de visionnaires répartis sur trois continents.",
    highlights: [
      "IgniteX™ Platform v7 en cours de développement",
      "Programme Initiation Programmation — 15+ mentors",
      "29+ projets en production ou en cours",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  accent: "primary" | "secondary";
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "clients",
    title: "Questions clients",
    accent: "primary",
    items: [
      {
        question: "Quels types de projets réalisez-vous ?",
        answer:
          "Applications mobiles (Android, iOS), sites et portails web, plateformes métiers, ERP, outils d'automatisation, systèmes de caisse, librairies numériques, solutions éducatives et outils communautaires — du premier brief jusqu'à la mise en production.",
      },
      {
        question: "Travaillez-vous avec des clients en Afrique et en Europe ?",
        answer:
          "Oui. IgniteX™ livre des systèmes au Congo, en Afrique centrale et francophone, ainsi qu'en France et à l'international. Notre expertise couvre Mobile Money, connectivité intermittente et exigences européennes (paiement par virement, RGPD).",
      },
      {
        question: "Combien de temps faut-il pour livrer un projet ?",
        answer:
          "Cela dépend de la complexité. Un MVP peut être livré en quelques semaines ; une plateforme métier complète prend généralement plusieurs mois, avec des jalons contractuels et une documentation à chaque étape.",
      },
      {
        question: "Proposez-vous la maintenance après livraison ?",
        answer:
          "Oui. Chaque système livré inclut une phase de stabilisation. Nous proposons ensuite des contrats de maintenance, d'évolution et de supervision (DevOps / SRE) selon les besoins du client.",
      },
      {
        question: "Comment obtenir un devis ?",
        answer:
          "Remplissez le formulaire sur notre page Contact ou écrivez-nous à ignitex.info@gmail.com. Nous analysons votre besoin et revenons vers vous avec une proposition adaptée.",
      },
    ],
  },
  {
    id: "technique",
    title: "Questions techniques",
    accent: "secondary",
    items: [
      {
        question: "Qu'est-ce qu'IgniteX™ Platform ?",
        answer:
          "C'est le moteur propriétaire du groupe : un socle algorithmique qui accélère le développement, optimise les flux de données et injecte performance, sécurité et scalabilité dans chaque système livré. La version actuelle en production est la v6.9 ; la v7 est en développement.",
      },
      {
        question: "Quelles technologies utilisez-vous ?",
        answer:
          "NestJS, GraphQL, Next.js, React Native, Flutter, Kotlin, Java Spring Boot, Django, PostgreSQL et plus encore. Le choix de la stack dépend du projet et de ses contraintes terrain.",
      },
      {
        question: "Les applications fonctionnent-elles hors ligne ?",
        answer:
          "Oui, lorsque le besoin l'exige. Plusieurs de nos systèmes (GMS School, CCB Connect) intègrent le mode hors ligne ou la synchronisation différée pour les zones à connectivité intermittente.",
      },
      {
        question: "Qui compose l'équipe IgniteX™ ?",
        answer:
          "Trois entités complémentaires : PEJOSOFT (backend, Android, ML), JM TECHNOLOGIES (web, DevOps/SRE) et BKT Labs (iOS, LLMOps/MLOps). Chaque entité est portée par un fondateur visionnaire.",
      },
    ],
  },
];

export type MentorProfile = {
  id: string;
  name: string;
  role: string;
  entity: string;
  image: string;
  bio: string;
  tech: "flutter" | "firebase" | "fullstack";
  links?: { label: string; href: string }[];
};

export const mentors: MentorProfile[] = partners.map((p) => ({
  id: p.id,
  name: p.visionary.name,
  role: p.visionary.title,
  entity: p.name,
  image: p.visionary.image,
  bio: p.visionary.thoughts.replace(/^«\s*|\s*»$/g, ""),
  tech:
    p.id === "pejosoft"
      ? "fullstack"
      : p.id === "jm-technologies"
        ? "firebase"
        : "flutter",
}));

export type TrustedPartnerLogo = {
  id: string;
  name: string;
  image?: string;
};

/** Logos partenaires — fichiers normalisés 480×300 dans public/images/partenaires/ */
export const trustedPartnerLogos: TrustedPartnerLogo[] = [
  {
    id: "report-ccb",
    name: "C-REPORTERS · CCB",
    image: "/images/partenaires/report-ccb.png",
  },
  {
    id: "ccb-connect",
    name: "CCB Connect",
    image: "/images/partenaires/ccb-connect.png",
  },
  {
    id: "ccb-communaute",
    name: "Communauté des Chrétiens Bénis",
    image: "/images/partenaires/ccb-communaute.png",
  },
  {
    id: "soleil-d-afrik",
    name: "Soleil d'Afrik Éditions",
    image: "/images/partenaires/soleil-d-afrik.png",
  },
  {
    id: "jajc",
    name: "Jeunes Ambassadeurs de Jésus-Christ",
    image: "/images/partenaires/jajc.png",
  },
  {
    id: "loatekombo",
    name: "Loatékombo ONG",
    image: "/images/partenaires/loatekombo.png",
  },
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
      "JWT, RBAC, modération, validation manuelle, chiffrement et traçabilité : la confiance au cœur de chaque système livré.",
  },
  {
    title: "Terrain africain",
    description:
      "Mobile Money, mode hors ligne, connectivité intermittente et devises locales intégrées nativement, pas en option.",
  },
  {
    title: "Livraison vérifiable",
    description:
      "Jalons contractuels, documentation complète, tests automatisés et déploiement en production, sans prototype jetable.",
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
    name: "GMS School (SGSI)",
    image: "/images/projects/gms-school.png",
    client: "GMS SCHOOL",
    tagline: "Gérer une école sur plusieurs sites, du préscolaire au collège",
    description:
      "GMS School est un système de gestion scolaire pour un établissement privé présent sur plusieurs sites. Il couvre les notes, les absences, la vie scolaire, les paiements des parents et le suivi de direction, y compris hors connexion Internet sur chaque site. Le système est en production et fonctionne avec IgniteX™ Platform v6.9.",
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
    client: "Commerce en ligne, Paris (France)",
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
    id: "sos-job",
    name: "SOS JOB",
    image: "/images/projects/sos-job.png",
    client: "SOS JOB, offre emploi Congo Brazzaville",
    tagline:
      "Le premier réseau professionnel numérique du Congo, de WhatsApp à une plateforme complète",
    description:
      "SOS JOB est aujourd'hui la première plateforme de publication d'emploi au Congo, avec une communauté active de plus de 50 000 utilisateurs cumulés sur WhatsApp, LinkedIn et Facebook. Nous avons conçu et déployé la plateforme web et mobile qui structure cette audience : profils candidats et recruteurs (formels et informels), publication d'offres avec modération IA, génération automatique d'images brandées, diffusion multicanale via WhatsApp et réseaux sociaux, moteur de recherche et matching assisté par IA, messagerie interne et espace communautaire. Un pilote est en cours et s'appuie sur IgniteX™ Platform v6.9.",
    highlights: [
      "Plus de 50 000 utilisateurs : transition d'une diffusion informelle vers un espace sécurisé unique",
      "Profils évolutifs pour candidats et recruteurs, du secteur formel comme informel",
      "Publication d'offres intelligente avec modération IA et images générées automatiquement",
      "Diffusion multicanale (WhatsApp, réseaux sociaux) et messagerie connectée aux canaux populaires",
      "Moteur de recherche, matching IA, tableau de bord admin et modèle freemium intégrés",
      "Équipé du module IgniteX™ Platform v6.9",
    ],
    stack: [
      "Plateforme web & mobile",
      "Module IA & automatisation",
      "Intégration WhatsApp",
      `IgniteX™ Platform v${platformVersion}`,
    ],
    status: "en-cours",
    statusLabel: "Pilote en cours",
    metrics: [
      { label: "Utilisateurs", value: "50 000+" },
      { label: "Canaux actifs", value: "3+" },
      { label: "Secteurs couverts", value: "Formel & informel" },
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
      "Loatékombo Association Culturelle est une organisation créée en 2018 qui utilise l'art et la culture pour transformer la vie des communautés : éducation, santé, accès à l'eau et cohésion sociale. Nous avons conçu et déployé leur plateforme numérique sur loatekombo.org : vitrine des activités, concours nationaux de poésie, caravanes de sensibilisation (VIH/SIDA, paludisme, antiviolence) et mise en valeur de leur engagement culturel à Brazzaville et au Congo. Le site est en production et reflète la devise de l'association : S'inspirer, innover, développer.",
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
      "Après le succès de la version 6.9, d'abord éprouvée sur CCB Connect puis déployée sur d'autres systèmes, les équipes IgniteX™ travaillent depuis un mois sur la version 7. L'objectif : aller plus loin en rendant le moteur plus accessible aux développeurs, intégrateurs et organisations qui souhaitent s'appuyer sur IgniteX™ pour construire leurs propres solutions.",
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
      "MOPESI® USSD est une plateforme mutualisée qui permet aux entreprises d'offrir leurs services sur mobile via un code USSD partagé : menus personnalisés, connexion à leurs propres systèmes et tableau de bord pour suivre l'activité. Sans smartphone ni connexion Internet, chaque utilisateur compose le code, navigue dans un menu dédié à l'entreprise et obtient une réponse en temps réel. La solution réduit les délais et les coûts liés à l'obtention d'un code USSD individuel auprès des opérateurs, tout en laissant chaque entreprise maître de ses données.",
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
      "L'Harmathon Congo est une initiative portée par les Éditions L'Harmattan Congo à Brazzaville, maison d'édition implantée depuis 2009 et déjà active dans la promotion du livre et de la jeunesse à travers le Grand Prix littéraire de la jeunesse et le Grand Prix des auteurs francophones. Nous développons pour eux un système numérique dédié : inscriptions des participants, dépôt et suivi des candidatures, organisation des éditions et des concours, espace jury et tableau de bord pour les équipes. L'objectif est de donner à cette rencontre entre culture et numérique les mêmes outils de rigueur que nos autres systèmes métiers, en s'appuyant sur IgniteX™ Platform v6.9.",
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
    "La version 6.9 a commencé par équiper CCB Connect, notre premier grand système déployé en production, avant de s'étendre progressivement à d'autres projets : Soleil d'Afrik, GMS School, Restaurant POS et bien d'autres. Chaque nouveau système profite des acquis et de la maturité acquise sur le terrain.",
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
  "GraphQL",
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
