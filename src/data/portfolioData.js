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
  linkedin: "https://www.linkedin.com/in/daniel-dagnogo",
  available: true,
  bio: "Je suis un développeur passionné par la construction d'architectures backend robustes et d'applications modernes qui ne se contentent pas de fonctionner, mais qui résolvent de vrais besoins avec performance et sécurité."
};

export const techStackData = [
  {
    category: "Backend",
    code: "01",
    color: "#059669",
    tools: [
      {
        name: "Node.js",
        role: "Environnement JavaScript",
        logo: "https://cdn.simpleicons.org/nodedotjs/339933"
      },
      {
        name: "Express",
        role: "APIs REST & microservices",
        logo: "https://cdn.simpleicons.org/express/ffffff"
      },
      {
        name: "Spring Boot",
        role: "Framework Java Entreprise",
        logo: "https://cdn.simpleicons.org/springboot/6DB33F"
      },
      {
        name: "Laravel",
        role: "Framework PHP & MVC",
        logo: "https://cdn.simpleicons.org/laravel/FF2D20"
      },
      {
        name: "Python",
        role: "Scripts, API & données",
        logo: "https://cdn.simpleicons.org/python/3776AB"
      }
    ]
  },
  {
    category: "Frontend",
    code: "02",
    color: "#2563eb",
    tools: [
      {
        name: "React",
        role: "Interfaces dynamiques",
        logo: "https://cdn.simpleicons.org/react/61DAFB"
      },
      {
        name: "Next.js",
        role: "Framework React Full Stack",
        logo: "https://cdn.simpleicons.org/nextdotjs/ffffff"
      },
      {
        name: "Angular",
        role: "Framework web structuré",
        logo: "https://cdn.simpleicons.org/angular/DD0031"
      },
      {
        name: "TypeScript",
        role: "JavaScript typé & robuste",
        logo: "https://cdn.simpleicons.org/typescript/3178C6"
      },
      {
        name: "Tailwind CSS",
        role: "CSS utilitaire moderne",
        logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4"
      }
    ]
  },
  {
    category: "Database",
    code: "03",
    color: "#4f46e5",
    tools: [
      {
        name: "PostgreSQL",
        role: "Base relationnelle avancée",
        logo: "https://cdn.simpleicons.org/postgresql/4169E1"
      },
      {
        name: "Neon DB",
        role: "PostgreSQL Serverless Cloud",
        logo: "https://cdn.simpleicons.org/postgresql/00E699"
      },
      {
        name: "Supabase",
        role: "Backend as a Service (BaaS)",
        logo: "https://cdn.simpleicons.org/supabase/3ECF8E"
      },
      {
        name: "MongoDB",
        role: "Base NoSQL orientée documents",
        logo: "https://cdn.simpleicons.org/mongodb/47A248"
      }
    ]
  },
  {
    category: "DevOps & Outils",
    code: "04",
    color: "#d97706",
    tools: [
      {
        name: "Git",
        role: "Gestion de versions",
        logo: "https://cdn.simpleicons.org/git/F05032"
      },
      {
        name: "GitHub",
        role: "Collaboration & CI/CD",
        logo: "https://cdn.simpleicons.org/github/ffffff"
      },
      {
        name: "Linux (WSL2)",
        role: "Environnement système",
        logo: "https://cdn.simpleicons.org/linux/FCC624"
      },
      {
        name: "Vercel",
        role: "Hébergement & déploiement",
        logo: "https://cdn.simpleicons.org/vercel/ffffff"
      },
      {
        name: "Postman",
        role: "Tests d'APIs REST",
        logo: "https://cdn.simpleicons.org/postman/FF6C37"
      }
    ]
  },
  {
    category: "Conception & IA",
    code: "05",
    color: "#7c3aed",
    tools: [
      {
        name: "Modélisation UML",
        role: "Architecture 4 couches",
        logo: "https://cdn.simpleicons.org/diagramsdotnet/F08705"
      },
      {
        name: "Intégration IA",
        role: "Assistants & LLMs",
        logo: "https://cdn.simpleicons.org/openai/ffffff"
      },
      {
        name: "Power BI / Data",
        role: "Tableaux de bord & KPIs",
        logo: "https://cdn.simpleicons.org/powerbi/F2C811"
      }
    ]
  }
];

export const parcoursData = [
  {
    period: "2021 - 2024",
    title: "Licence en Génie Logiciel (DASI)",
    institution: "ESATIC · École Supérieure Africaine des TIC (Abidjan)",
    status: "completed",
    badge: null
  },
  {
    period: "2024 - 2026",
    title: "Formation Avancée Full Stack & Systèmes",
    institution: "ESATIC · Développement d'Architectures Web, Mobiles & Cloud",
    status: "current",
    badge: "EN COURS"
  },
  {
    period: "En continu",
    title: "Projets Indépendants & R&D",
    institution: "Applications concrètes, microservices et déploiements Vercel/Cloud",
    status: "current",
    badge: "ACTIF"
  }
];

export const projectsData = [
  {
    id: "gesstages",
    title: "GesStages — Plateforme de Gestion des Stages",
    badge: "Projet Phare · ESATIC",
    category: "Full Stack",
    featured: true,
    shortDesc: "Plateforme complète pour dématérialiser les candidatures, conventions et évaluations de stages des étudiants de l'ESATIC.",
    overview: "GesStages simplifie l'interaction tripartite entre étudiants, encadrants pédagogiques et tuteurs d'entreprises.",
    problem: "Processus manuel sur papier avec risques de pertes et retards de validation de diplômes.",
    solution: "Plateforme web réactive centralisant le dépôt, le suivi en direct et la signature électronique des conventions.",
    highlights: [
      "Tableau de bord multi-rôles (Étudiant, Tuteur, Administration)",
      "Validation des conventions et alertes de suivi",
      "Génération automatique d'attestations en PDF"
    ],
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: "restauqr",
    title: "Gestion de Restauration par QR Code",
    badge: "Produit SaaS · Temps Réel",
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
