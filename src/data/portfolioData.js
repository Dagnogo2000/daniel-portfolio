export const personalInfo = {
  name: "Katie Daniel DAGNOGO",
  role: "Développeur Full Stack & Backend",
  school: "ESATIC (Abidjan)",
  diploma: "Licence DASI ('24)",
  location: "Abidjan, Côte d'Ivoire",
  email: "katiedanieldagnogo001@gmail.com",
  phone: "+225 07 58 75 71 52",
  phoneRaw: "2250758757152",
  github: "https://github.com/Dagnogo2000",
  available: true,
  bio: "Diplômé de Licence en Génie Logiciel (DASI) à l'ESATIC, je conçois des architectures backend robustes, des APIs sécurisées et des applications web modernes. J'aime transformer des besoins métiers concrets en produits fiables et performants."
};

export const skillsData = [
  {
    category: "Backend & APIs",
    icon: "Server",
    skills: ["Node.js", "Express", "Spring Boot", "Laravel", "PHP", "Python", "API REST", "JWT", "WebSockets"]
  },
  {
    category: "Frontend & UI",
    icon: "Layout",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "HTML5 / CSS3"]
  },
  {
    category: "Bases de Données",
    icon: "Database",
    skills: ["PostgreSQL", "Neon DB", "Supabase", "MongoDB", "MySQL", "ORM / Prisma", "Modélisation SQL"]
  },
  {
    category: "Méthodes & Outils",
    icon: "Wrench",
    skills: ["Git & GitHub", "Modélisation UML", "Merise", "Linux (WSL2)", "Vercel", "Postman", "CI/CD"]
  }
];

export const projectsData = [
  {
    id: "blok",
    title: "Assistant IA de Chantier pour Blok",
    badge: "🏆 Hackathon AethexAI × Mstudio 2026",
    category: "Hackathon & IA",
    featured: true,
    shortDesc: "Candidature sélectionnée à Abidjan. En équipe de 3, j'ai assuré le rôle de Développeur Backend pour concevoir l'assistant intelligent de la marketplace B2B Blok.",
    overview: "Développement en conditions de Hackathon d'un assistant conversationnel et analytique pour les professionnels du BTP en Côte d'Ivoire.",
    problem: "Sur les chantiers, le calcul manuel des volumes de matériaux entraîne d'importantes erreurs d'approvisionnement et des retards coûteux.",
    solution: "Moteur de calcul automatisé basé sur les normes de cubage combiné à une interface d'estimation et génération de devis instantanés.",
    highlights: [
      "Calcul automatique de cubage (sacs de ciment, tonnes de sable, gravier, fer à béton)",
      "Comparateur dynamique des gammes et marques de matériaux de construction",
      "Préparation et export direct des devis pour les gestionnaires de chantier"
    ],
    tags: ["Next.js", "TypeScript", "Backend", "IA & LLM", "REST API", "Git"]
  },
  {
    id: "kouma",
    title: "Kouma",
    badge: "Next.js · Supabase · Vercel",
    category: "Full Stack",
    featured: false,
    shortDesc: "Application web moderne ayant validé ma sélection technique au Hackathon. Interface réactive et stockage temps réel dans le cloud.",
    overview: "Plateforme web construite pour démontrer la maîtrise d'une stack full stack moderne et réactive.",
    problem: "Nécessité de délivrer une interface rapide, ergonomique et connectée à une base de données cloud.",
    solution: "Architecture Next.js avec authentification et base de données PostgreSQL managée sur Supabase.",
    highlights: [
      "Composants réactifs et performants",
      "Persistance cloud avec Supabase",
      "Déploiement continu automatisé sur Vercel"
    ],
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: "restauqr",
    title: "Gestion de Restauration par QR Code",
    badge: "🚀 Produit SaaS · Temps Réel",
    category: "Full Stack",
    featured: false,
    shortDesc: "Application restaurant : commande directe à table sans serveur via QR code et back-office en temps réel pour la cuisine.",
    overview: "Solution pensée pour accélérer les prises de commande dans les restaurants et maquis d'Abidjan.",
    problem: "Files d'attente et erreurs récurrentes dans les commandes lors des heures d'affluence.",
    solution: "QR code unique par table permettant au client de commander sur son téléphone pendant que la cuisine reçoit les tickets en direct.",
    highlights: [
      "Génération automatique des QR codes par table",
      "Dashboard gérant : suivi en direct des recettes et des commandes",
      "Notification temps réel pour la préparation en cuisine"
    ],
    tags: ["Node.js", "PostgreSQL", "QR Engine", "WebSockets"]
  },
  {
    id: "chat",
    title: "Application de Messagerie Instantanée Sécurisée",
    badge: "Temps Réel & Sécurité",
    category: "Backend",
    featured: false,
    shortDesc: "Messagerie complète développée de zéro avec WebSockets bidirectionnels, canaux de discussion et chiffrement des accès.",
    overview: "Système de communication instantané mettant l'accent sur la sécurité et la tenue de charge des sockets.",
    problem: "Garantir un échange fluide sans rechargement tout en protégeant les identifiants utilisateurs.",
    solution: "Architecture événementielle Node.js avec sockets persistants et authentification par tokens JWT signés.",
    highlights: [
      "Mots de passe hachés avec bcrypt et tokens JWT",
      "Salons publics et canaux de discussion privés",
      "Statuts de présence et indicateurs de frappe"
    ],
    tags: ["Node.js", "WebSockets", "MongoDB", "JWT"]
  },
  {
    id: "mafamille",
    title: "Espace MaFamille",
    badge: "Web App Déployée",
    category: "Full Stack",
    featured: false,
    shortDesc: "Plateforme de gestion associative et tontines familiales : suivi des cotisations, réunions et transparence financière.",
    overview: "Centralisation des contributions financières et des procès-verbaux de rencontres périodiques.",
    problem: "Manque de visibilité et litiges fréquents sur les cahiers de cotisations physiques.",
    solution: "Tableau de bord transparent où chaque contributeur visualise ses versements et l'état global de la caisse.",
    highlights: [
      "Historique exhaustif des cotisations",
      "Base relationnelle sur Neon PostgreSQL",
      "Accessible sur mobile et ordinateur"
    ],
    tags: ["Next.js", "Neon PostgreSQL", "Tailwind CSS", "Vercel"]
  },
  {
    id: "elections",
    title: "Carte Interactive des Résultats Électoraux",
    badge: "Data & Cartographie",
    category: "Data & Backend",
    featured: false,
    shortDesc: "Visualisation géographique dynamique des données électorales stockées en base de données avec cartes Leaflet.",
    overview: "Restitution spatiale des résultats de scrutins pour faciliter l'analyse décisionnelle.",
    problem: "L'incompréhension des rapports de données brutes sous forme de tableurs interminables.",
    solution: "Couche cartographique interactive GeoJSON avec code couleur automatique selon les scores.",
    highlights: [
      "Projection spatiale par région et circonscription",
      "Requêtes d'agrégation SQL optimisées",
      "Filtres dynamiques par taux de participation"
    ],
    tags: ["PHP", "PostgreSQL", "Leaflet.js", "GeoJSON"]
  },
  {
    id: "academics",
    title: "Gestion des Unités Pédagogiques (UP)",
    badge: "Ingénierie Logicielle · ESATIC",
    category: "Architecture & UML",
    featured: false,
    shortDesc: "Conception intégrale du système académique de l'ESATIC : 13 règles de gestion, 5 profils d'acteurs et architecture 4 couches.",
    overview: "Projet de référence en génie logiciel pour structurer informatiquement les cursus et unités d'enseignement.",
    problem: "Complexité de la répartition des enseignants, des matières et de la validation des crédits académiques.",
    solution: "Dossier d'analyse UML approfondi et architecture applicative n-tiers garantissant modularité et pérennité.",
    highlights: [
      "Diagrammes de cas d'utilisation, classes et séquences",
      "13 règles de gestion métier implémentées",
      "Séparation stricte en 4 couches d'architecture"
    ],
    tags: ["UML", "Architecture 4 tiers", "Génie Logiciel", "Java"]
  }
];

export const timelineData = [
  {
    year: "Octobre 2026",
    title: "Hackathon AethexAI × Mstudio (Abidjan)",
    role: "Développeur Backend (Équipe de 3)",
    desc: "Sélectionné sur candidature technique. Conception du backend de l'assistant IA pour la marketplace B2B Blok et présentation au Demo Day."
  },
  {
    year: "2026",
    title: "Formation Continue Full Stack · ESATIC",
    role: "Modules Avancés 1 à 7",
    desc: "Perfectionnement approfondi sur Angular, Node.js, Groovy, Grails et maîtrise des environnements Linux WSL2."
  },
  {
    year: "2026",
    title: "Parcours d'Apprentissage Data Analyst",
    role: "SQL · Python · Power BI",
    desc: "Analyse et traitement de données pour la prise de décision stratégique et la création de tableaux de bord."
  },
  {
    year: "2024",
    title: "Licence en Génie Logiciel (DASI) · ESATIC",
    role: "Diplôme Universitaire (Abidjan)",
    desc: "Formation rigoureuse en algorithmique, modélisation de bases de données, génie logiciel et sécurité informatique."
  }
];

